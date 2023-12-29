`정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중
n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.`;

function solution(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);
  const idx = array.indexOf(n);
  if (array[idx - 1] === undefined) return array[idx + 1];
  if (array[idx + 1] === undefined) return array[idx - 1];
  else {
    const before = array[idx] - array[idx - 1];
    const after = array[idx + 1] - array[idx];
    return before <= after ? array[idx - 1] : array[idx + 1];
  }
}

// 다른 사람의 풀이

function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
