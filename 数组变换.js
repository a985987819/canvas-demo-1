// let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];
// let arr2 = arr.map((item) => {
//   if (item === 0) {
//     return (item = "周日");
//   } else if (item === 1) {
//     return (item = "周一");
//   } else if (item === 2) {
//     return (item = "周二");
//   } else if (item === 3) {
//     return (item = "周三");
//   } else if (item === 4) {
//     return (item = "周四");
//   } else if (item === 5) {
//     return (item = "周五");
//   } else if (item === 6) {
//     return (item = "周六");
//   } else {
//     return null;
//   }
// });
// console.log(arr2); // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
// let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
// let scores2 = scores.filter((item) => {
//   if (item > 60) {
//     return item;
//   } else {
//     return null;
//   }
// });
// console.log(scores2); //  [95,91,82,72,85,67,66, 91]

// let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
// let sum = scores.reduce((sum, n) => {
//   if (n % 2 === 0) {
//     return sum;
//   } else {
//     return sum + n;
//   }
// }, 0);
// console.log(sum); // 奇数之和：598

a = (i) => console.log(i);
for (i = 0; i < 6; i++) {
  setTimeout(a(i), 0);
}
