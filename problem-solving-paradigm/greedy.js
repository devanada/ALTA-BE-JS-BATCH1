function coinChange(amount) {
  const coins = [25, 10, 5, 1];
  let result = [];
  let moneyLeftover = amount;

  for (const coin of coins) {
    console.log(`Coin: ${coin}`);
    while (moneyLeftover >= coin) {
      result.push(coin);
      console.log("result", result);
      moneyLeftover = moneyLeftover - coin;
      console.log("Money leftover:", moneyLeftover);
      // moneyLeftover -= coin
    }
  }

  return result;
}

console.log(coinChange(42)); // 25 10 5 1 1
