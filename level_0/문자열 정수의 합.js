`한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.`;

function solution(num_str) {
  let a = num_str.split("");
  let b = a.map(Number);
  return b.reduce((c, d) => c + d);
}

// 다른 사람의 풀이

function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}
