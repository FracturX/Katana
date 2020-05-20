import Guild from "./Guild.ts";
import TextBasedChannel from "./channels/TextBasedChannel.ts";
import { Client } from "../client/Client.ts";
import BaseChannel from "./channels/BaseChannel.ts";

export default class GuildChannel extends BaseChannel {

  constructor(
    id: string,
    type: number,
    client: Client,
    name: string,
    position: number,
    parentId: string,
    // topic: string,
    guild: Guild,
    // permissionOverwrites: Array<any>,
    // nsfw: boolean,
    // rateLimitPerUser: number,
    
  ) {
    super(id, type, client);
  }


}