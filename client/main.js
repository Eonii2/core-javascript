/*  global gsap */

import {
  insertLast,
  attr,
  eoni,
  delayP,
  getNode as $, // getNode 를 $로 대체해서 쓸 수 있음
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
} from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = $(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);

    $(".loadingSpinner").remove();

    let response = await eoni.get("http://localhost:3000/users");

    let userData = response.data;

    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    //console.log(gsap.utils.toArray(".user-card"));

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    // console.log(err);
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

// 삭제 버튼을 클릭하면 콘솔창에 "삭제" 글자가 출력이 될 수 있도록 만들어 console.error('주세요',주세요)

function handler(e) {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");
  if (!deleteButton || !article) return;

  let id = attr(article, "data-index").slice(5);

  eoni.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
  console.log(id);
}

userCardContainer.addEventListener("click", handler);
