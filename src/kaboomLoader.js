import kaboom from "../lib/kaboom.mjs";

export const scale = 2;

export const k = kaboom({
  width: 640 * scale,
  height: 360 * scale,
  letterbox: true,
  scale,
  global: false,
});
