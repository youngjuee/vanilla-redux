import { createStore } from "redux";
// 리덕스는 데이터를 관리하기위해 만들어졌다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(action, count);
  if (action.type === "ADD") {
    count = count + 1;
  } else if (action.type === "MINUS") {
    count = count - 1;
  } else {
    return count;
  }
  return count;
};
const countStore = createStore(countModifier);
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
