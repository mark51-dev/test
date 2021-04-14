const peoples = new Array(1000).fill(0).map((item, index) => ({userId: index, money: 10}));
const flipCoin = () => (Math.round(Math.random()));

const findMoneyMaker = (array) => {
  for(let left = 0, right = array.length - 1; left < right;) {
    while(true) {
      if (array[left].money === 0) {
        left++;
        break;
      }
      if (array[right].money === 0) {
        right--;
        break;
      }
      if (flipCoin() === 0) {
        array[left].money++;
        array[right].money--;
      } else {
        array[left].money--;
        array[right].money++;
      }
    }
  }
  return array.filter(item => item.money > 0);
};


const res = findMoneyMaker(peoples);
console.log(res);
