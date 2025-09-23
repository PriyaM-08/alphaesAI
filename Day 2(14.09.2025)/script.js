// Challenge 3

// const scoreEagles = +(((75 + 89 + 95) / 3).toFixed(2));
// const scoreSharks = +(((92 + 81 + 78) / 3).toFixed(2));

// if (scoreEagles > scoreSharks) {
//      console.log("Eagles win the trophy");
//  } else if (scoreSharks > scoreEagles) {
//      console.log("Sharks win the trophy");
//  } else if (scoreEagles === scoreSharks) {
//      console.log("Match Draw");
//  } else {
//      console.log("No one win the trophy");
//  }

 const scoreEagles = 70
 const scoreSharks = 60

 if (scoreEagles > scoreSharks && scoreEagles >= 80) {
     console.log("Eagles win the trophy");
 } else if (scoreSharks > scoreEagles && scoreSharks >= 80) {
     console.log("Sharks win the trophy");
 } else if (scoreEagles === scoreSharks && scoreEagles >= 80 && scoreSharks >= 80) {
     console.log("Match Draw");
 } else {
     console.log("No one win the trophy");
 }

///////////////////////////////////////////

// Challenge 4

const orderValue = 450
const deliveryFee = orderValue >= 100 && orderValue <= 500 ? orderValue * 0.1 : orderValue * 0.15;

console.log(`The order was ${orderValue}, the delivery fee was ${deliveryFee}, and the total amount ${orderValue + deliveryFee}`);