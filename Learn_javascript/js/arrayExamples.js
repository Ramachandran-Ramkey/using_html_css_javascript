// Arrays

const earnMoneyA = ["Frontend","Backend","Fullstack"];
const earnMoneyB = ["AI","Blockchain","DataAnalytics"];
const growMoneyA = ["stock","Realestate","FixedIncome"];
const growMoneyB = ["options","Futures"];
const giveMoney = ["Quality Education"];
console.log(earnMoneyA[1],growMoneyB[1]);
//two daimentional array
const earnMoney = [earnMoneyA,earnMoneyB];
const growMoney = [growMoneyA,growMoneyB];
console.log(earnMoney[0][1],growMoney[1][1]);
//three daimentional array
const dhuddu = [earnMoney,growMoney,giveMoney];

console.log(dhuddu[0][0][1]);