`문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를
뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.`;

function solution(my_string, s, e) {
  var answer = my_string.split("");
  let arr = answer.slice(s, e + 1).reverse();
  answer.splice(s, arr.length, ...arr);
  return answer.join("");
}
