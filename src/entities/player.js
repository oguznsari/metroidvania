export function makePlayer(k) {
  const width = 12;
  const height = 12;

  return k.make([
    k.pos(),
    k.sprite("player"),
    k.area({
      shape: new k.Rect(k.vec2(0, 18), width, height),
    }),
    k.anchor("center"),
    k.body({ mass: 100, jumpForce: 320 }),
    k.doubleJump(1),
    {},
  ]);
}
