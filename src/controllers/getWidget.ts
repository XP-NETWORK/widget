import WIDGET from "../models/widget";

export const getWidget = async (req: any, res: any) => {
  try {
    if (!req.query.widgetId) {
      res.send("widget or user name were not sent");
      return;
    }

    const { widgetId } = req.query;
    const result = await WIDGET.getWidget(widgetId);

    if (result) {
      res.send(result);
      return;
    } else {
      res.send("no such widget found");
      return;
    }
  } catch (error) {
    res.send(error);
    return;
  }
};
