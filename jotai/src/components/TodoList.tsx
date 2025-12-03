import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  todosAtom,
  addTodoAtom,
  toggleTodoAtom,
  completedTodosAtom,
} from "../atoms/todoAtom";

export function TodoList() {
  const [input, setInput] = useState("");
  const todos = useAtomValue(todosAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const completedTodos = useAtomValue(completedTodosAtom);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいタスク"
        />
        <button type="submit">追加</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <p>
        完了: {completedTodos.length} / {todos.length}
      </p>
    </div>
  );
}
