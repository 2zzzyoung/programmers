`정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서
그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여
return하도록 solution 함수를 완성해주세요.`;

function solution(num_list) {
  let last = num_list[num_list.length - 1];
  let last2 = num_list[num_list.length - 2];
  if (last > last2) {
    num_list.push(last - last2);
  } else {
    num_list.push(last * 2);
  }
  return num_list;
}

// 다른 사람의 풀이

function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
