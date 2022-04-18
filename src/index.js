import { observable, reaction, computed, autorun } from "mobx";

// Observable State
const calculator = observable({
  a: 1,
  b: 2,
});

// computed
const sum = computed(() => {
  console.log("계산중");
  return calculator.a + calculator.b;
});

// reaction
// reaction(
//   () => calculator.a,
//   (value, reaction) => {
//     console.log(`a 값이 ${value} 로 바뀌었네요!`);
//   }
// );

// reaction(
//   () => calculator.b,
//   value => {
//     console.log(`b 값이 ${value} 로 바뀌었네요!`);
//   }
// );

autorun(() => console.log(`a 값이 ${calculator.a}로 바뀌었습니다.`));
autorun(() => console.log(`b 값이 ${calculator.b}로 바뀌었습니다.`));
autorun(() => sum.get());

calculator.a = 10;
calculator.b = 20;

console.log(sum.get());
console.log(sum.get());

calculator.a = 30;

console.log(sum.get());
