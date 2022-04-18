import { autorun } from "mobx";

class GS256 {
  basket = [];

  get total() {
    console.log("계산 중");

    return this.basket.reduce((prev, curr) => prev + curr.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

const gs256 = new GS256();
autorun(() => gs256.total);

gs256.select("물", 800);
console.log(gs256.total);
gs256.select("물", 800);
console.log(gs256.total);
gs256.select("가나파이", 3800);
console.log(gs256.total);
