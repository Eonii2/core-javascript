/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

//과제다
//마지막 어드민 써야함 Admin admin adMin aDmin 등등 다 인식해야됨

let age = 20;
if (age >= 14 && age <= 90);

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };

let userName = prompt("사용자 아이디를 입력해주세요", "");
let pw;

if (userName === "Admin") {
  console.log("확인됐습니다.");
} else if (userName === "" || userName === null) {
  console.log("인증되지 않은 사용자 입니다.");
}

console.log(userName);
