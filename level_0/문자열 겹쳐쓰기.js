`문자열 my_string, overwrite_string과 정수 s가 주어집니다.
문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을
문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.`;

function solution(my_string, overwrite_string, s) {
  let str = [...my_string];
  str.splice(s, overwrite_string.length, overwrite_string);
  // splice(배열 시작점, 삭제 요소의 수, 배열에 추가할 요소)
  return str.join("");
}

solution("He11oWor1d", "lloWorl", 2);

function solution1(my_string, overwrite_string, s) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i >= s && i < s + overwrite_string.length) {
    }
  }
}

solution1("He11oWor1d", "lloWorl", 2);
