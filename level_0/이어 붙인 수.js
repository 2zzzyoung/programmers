`정수가 담긴 리스트 num_list가 주어집니다.
num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로
이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.`;

function solution(num_list) {
  let x = num_list.filter((el) => el % 2 !== 0);
  console.log(x);
  let y = num_list.filter((el) => el % 2 === 0);
  return Number(x.join("")) + Number(y.join(""));
}

// 다른 사람의 풀이

function solution(num_list) {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, num) => {
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );
  return Number(odds.join("")) + Number(evens.join(""));
}
