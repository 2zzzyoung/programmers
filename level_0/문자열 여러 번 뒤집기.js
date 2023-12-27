`문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.`;

function solution(my_string, queries) {
  var arr = my_string.split("");
  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0];
    let end = queries[i][1];
    let reverseArr = arr.slice(start, end + 1).reverse();
    for (let j = start, k = 0; j <= end; j++, k++) {
      arr[j] = reverseArr[k];
    }
  }
  return arr.join("");
}

// 다른 사람의 풀이

function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}
