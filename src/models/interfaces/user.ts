import { ObjectId } from "bson";
import { Document, Model, Schema } from "mongoose";

export interface IUSER {
  signature: { type: string };
  address: { type: string };
  widgets: [{ type: ObjectId }];
}

// Instance methods
export interface IUSERDocument extends IUSER, Document {
  toJSON(): IUSERDocument;
}

// Static methods
export interface IUSERModel extends Model<IUSERDocument> {
  //getByURI(uri: string): Promise<IUSERDocument>
  getUser(signature: string, address: string): Promise<IUSERDocument>;
  getUserById(userId: string): Promise<any>;
  addUser(signature: string, address: string): Promise<IUSERDocument | string>;
  updateUserWidgetList(address: string, widgetId: string): any;
}
