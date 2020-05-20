import Guild from "../Guild.ts";
import { Client } from "../../client/Client.ts";

export default interface TextBasedChannel {


  _lastMessageId: string,
  _lastPinTimestamp: Date,



  send(content: string): Promise<any>;

}