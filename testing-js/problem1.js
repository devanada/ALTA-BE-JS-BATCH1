function dragonOfLoowater(dragonHead, knightHeight) {
  const cloneDragon = dragonHead.slice().sort((a, b) => a - b);
  const cloneKnight = knightHeight.slice().sort((a, b) => a - b);
  let totalHeight = 0;

  for (let i = 0; i < cloneKnight.length; i++) {
    if (cloneKnight[i] < cloneDragon[0]) {
      continue;
    }

    cloneDragon.shift();
    totalHeight += cloneKnight[i];

    if (cloneDragon.length === 0) {
      return totalHeight;
    }
  }

  return "knight fall";
}

module.exports = dragonOfLoowater;
