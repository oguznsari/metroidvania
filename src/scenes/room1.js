import { setBackgroundColor } from "./roomUtils.js";

export function room1(k, roomData) {
  setBackgroundColor(k, "#a2aed5");

  const roomLayers = roomData.layers;

  // parent of all game object
  const map = k.add([k.pos(0, 0), k.sprite("room1")]);

  let colliders = [];
  for (const layer of roomLayers) {
    if (layer.name === "colliders") {
      colliders.push(...layer.objects);
      break;
    }
  }
}
