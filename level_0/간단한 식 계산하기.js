`문자열 binomial이 매개변수로 주어집니다.
binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다.
주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.`;

function solution(binomial) {
  let answer = binomial.split(" ");
  if (answer[1] === "+") {
    return +answer[0] + +answer[2];
  } else if (answer[1] === "-") {
    return +answer[0] - +answer[2];
  } else {
    return +answer[0] * +answer[2];
  }
}

// 다른 사람의 풀이

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return ops[op](+a, +b);
}

//

function solution(binomial) {
  const [a, ex, b] = binomial.split(" ");
  return ex === "+" ? +a + +b : ex === "-" ? a - b : a * b;
}

//

function solution(binomial) {
  var answer = 0;
  const s = binomial.split(" ");
  const n1 = parseInt(s[0]);
  const n2 = parseInt(s[2]);

  switch (s[1]) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
  }
}
