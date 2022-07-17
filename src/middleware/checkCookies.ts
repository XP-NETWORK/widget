import { Request, Response, NextFunction } from "express";
import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";

import { ObjectId } from "mongoose";

import USER from "../models/user";

export const checkCookies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cookie = req.cookies["WIDGET_CRED"];

  if (!cookie && !req.body.signature) {
    return res.status(403).send("no cookies");
  }

  const signature = req.body.signature || JSON.parse(cookie).signature;

  if (signature) {
    const address = ethers.utils.verifyMessage(
      "Please sign in order to see your widgets",
      signature
    );

    const user = await USER.findOne({
      address,
      signature,
    });

    if (user?.widgets.includes(req.body.widgetId)) {
      res.cookie("WIDGET_CRED", JSON.stringify({ signature, address }), {
        maxAge: 10 * 60000,
        httpOnly: true,
      });

      return next();
    }

    return res.status(401).send("Unauth");
  }

  return res.status(404).send("signature error");
};
