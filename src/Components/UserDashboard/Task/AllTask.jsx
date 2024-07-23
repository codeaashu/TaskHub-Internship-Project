import React, { useEffect, useState } from "react";
import Task from "./Task";

const AllTask = () => {
  // getting the todo data from local storage
  const allTodos = JSON.parse(localStorage.getItem("todo"));

  return (
    <>
      <main className="grid grid-cols-1 800px:grid-cols-2 w-full px-2 800px:px-32 gap-4">
        {allTodos ? (
          <>
            {allTodos?.map((todo) => (
              <Task todoData={todo} key={todo.id} />
            ))}
          </>
        ) : (
          <div className=" font-semibold">No task yet!</div>
        )}
      </main>
    </>
  );
};

export default AllTask;
