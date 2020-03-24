import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../store";

const Home = ({ toDos }) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

const mapStateToProps = state => {
  return { toDos: state };
};
export default connect(mapStateToProps)(Home);
