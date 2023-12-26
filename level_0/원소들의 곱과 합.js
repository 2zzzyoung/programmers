`정수가 담긴 리스트 num_list가 주어질 때,
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.`;

function solution(num_list) {
  var answer = 1;
  var answer2 = 0;
  for (let i of num_list) {
    answer *= i;
    answer2 += i;
  }
  return answer < answer2 ** 2 ? 1 : 0;
}
