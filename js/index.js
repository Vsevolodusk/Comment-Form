const entryForm = document.querySelector(".comment_entry");
const userName = document.querySelector("#userName");
const userTopic = document.querySelector("#userTopic");
const userMark = document.querySelector("#userMark");
const userComment = document.querySelector("#userComment");
const confirmBtn = document.querySelector(".confirmBtn");
const commentList = document.querySelector(".comment_list");

function elementCreation(tag, config, ...childs) {
  const element = document.createElement(tag);
  element.classList.add(...config);
  element.append(...childs);
  return element;
}

function createComment(userInfo) {
  const { name, commentName, mark, comment } = userInfo;

  const userNameBlock = elementCreation("p", ["userComment"], `User Name : ${name}`);
  const userCommentblock = elementCreation("p", ["userComment"], `${comment}`);
  const userMarkBlock = elementCreation("p", ['userComment'], `Mark: ${mark} / 10`);
  const commentNameBlock = elementCreation("h2", ["userComment"],`Comment Title : ${commentName}`);
  const listItem = elementCreation("li", [], userNameBlock, commentNameBlock, userMarkBlock, userCommentblock);
  return listItem;
}

function commentCreation(e) {
  e.preventDefault();
  const listItem = createComment(userArray[userArray.length - 1]);
  commentList.append(listItem);
}

confirmBtn.addEventListener("click", createUser);
confirmBtn.addEventListener("click", commentCreation);