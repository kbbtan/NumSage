import { Schema, MapSchema, type } from "@colyseus/schema";

export class Player extends Schema {
  @type("number") solved: number = 0;
}

export class MyRoomState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
