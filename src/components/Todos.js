import React from "react";
import Todoitem from "./Todoitem";


export default function Todos(props) {
  const mystyle = {
    color: "red",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    padding: "5px",
  };
  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      <h2 className=" my-4" style={{ textDecoration: "underline" }}>
        To-Do-List
      </h2>
      {props.todos.length === 0 ? (
        <h5 style={mystyle}>No more todos</h5>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
}
