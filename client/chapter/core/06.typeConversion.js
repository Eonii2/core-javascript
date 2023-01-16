/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(String(YEAR));

// undefined, null

console.log(String(undefined));

let days = null;
console.log(String(days));

let isKind = true;
console.log(String(isKind + ""));

// boolean

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false: 0
let cutie = false;
console.log(+cutie);

// string 숫자형 문자 숫자처럼 생겼지만 문자임

let num = "123";
console.log(num * 1);

// numeric string

let width = "32.23120px";

console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
console.log(Boolean(123));
console.log(!!null);
