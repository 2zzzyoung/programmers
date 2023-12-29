`문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을,
만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.`;

function solution(before, after) {
  const beforeS = [...before].sort();
  const afterS = [...after].sort();
  return JSON.stringify(beforeS) === JSON.stringify(afterS) ? 1 : 0;
}
