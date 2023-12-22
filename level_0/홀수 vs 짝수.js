`정수 리스트 num_list가 주어집니다.
가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을
return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.`;

function solution(num_list) {
  let a = []; //홀수
  let b = []; //짝수
  [...num_list].map((e, i) => (i % 2 === 1 ? a.push(e) : b.push(e)));
  a = a.reduce((a, b) => a + b);
  b = b.reduce((a, b) => a + b);
  return a > b ? a : b;
}
