import "./App.css";
import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    console.log("hello", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const user = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, user]);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="my todoslist" searchbar={false} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <hr></hr>
                  <Todos todos={todos} ondelete={ondelete} />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/about"
          >
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
