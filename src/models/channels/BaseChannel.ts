import { Client } from "../../client/Client.ts";

export default class BaseChannel {
  constructor(
    private _id: string,
    private _type: number,
    //private _created_at: Date,
    //private _name: string,
    //private _position: number,
    //private _parentId: string,
    //private _topic: string,
    //private _guild: Guild,
    //private _permissionOverwrites: Array<any>,
    //private _nsfw: boolean,
    //private _rateLimitPerUser: number,
    private _client: Client
  ) {
  }
}
