import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";

export function showAlert(node, text = "에러입니다.", timeout = 1500) {
  if (typeof node === "string") node = getNode(node);
  //아무런 텍스트를 적지않았을때 에러입니다 가 나올 수 있도록
  node.textContent = text;

  addClass(node, "is - active"); //노드에게 is-active를 넣어주세요
  setTimeout(() => {
    removeClass(node, "is-active");
  }, timeout); // 일정 시간이 지나면 is-active가 뜸
}
