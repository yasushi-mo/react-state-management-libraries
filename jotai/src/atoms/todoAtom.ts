import { atom } from "jotai";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todosAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(null, (get, set, text: string) => {
  const todos = get(todosAtom);
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  set(todosAtom, [...todos, newTodo]);
});

export const toggleTodoAtom = atom(null, (get, set, id: number) => {
  const todos = get(todosAtom);
  set(
    todosAtom,
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
});

export const completedTodosAtom = atom((get) =>
  get(todosAtom).filter((todo) => todo.completed)
);
