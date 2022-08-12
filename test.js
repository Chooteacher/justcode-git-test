// 1부터 50의 자연수 중 짝수를 구하는 함수

function getEven() {
  const arr = [];
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
