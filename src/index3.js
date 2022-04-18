import {
  observable,
  reaction,
  computed,
  action,
  makeObservable,
  autorun,
} from "mobx";

class GS256 {
  basket = [];

  constructor(value) {
    makeObservable(this, {
      basket: observable,
      total: computed,
      select: action,
    });
  }

  get total() {
    console.log("계산 중");

    return this.basket.reduce((prev, curr) => prev + curr.price, 0);
  }

  info() {
    console.log(basket);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

const gs256 = new GS256();

autorun(() => {
  if (gs256.basket.length > 0) {
    console.log(gs256.basket[0].name, gs256.basket[gs256.basket.length - 1]);
  }
});

reaction(
  () => gs256.basket.length,
  (value, previousValue, reaction) => {
    console.log(value, previousValue);
  }
);

gs256.select("물", 800);
console.log(gs256.total);
gs256.select("물", 800);
console.log(gs256.total);
gs256.select("가나파이", 3800);
console.log(gs256.total);
