import GuildChannel from "../GuildChannel.ts";
import TextBasedChannel from "./TextBasedChannel.ts";
import Guild from "../Guild.ts";
import { Client } from "../../client/Client.ts";

export default class TextChannel extends GuildChannel implements TextBasedChannel {
  constructor(
    private id: string,
    private type: number,
    private name: string,
    private position: number,
    private parentId: string,
    private topic: string,
    private guild: Guild,
    private permissionOverwrites: Array<any>,
    private nsfw: boolean,
    private rateLimitPerUser: number,
    private client: Client,
    private lastMessageId: string,
    private LastPinTimestamp: Date,
  ) {
    super(id, type, client, name, position, parentId, guild)
    
  }


  public _lastPinTimestamp =  this.LastPinTimestamp;
  public _lastMessageId = this.lastMessageId

  send(content: string): Promise<any> {
    const rest = this.client.rest;
    return rest.createMessage(content, rest.token)
  }
  



}