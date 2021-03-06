import { Todo } from "./ITodo";

export type FormProps = {
    setInputText: (e:string) => void;
    setTodos: SetStateAction<Todo[]>;
    todos: Todo[];
    inputText:string;
    setTodos: SetStateAction<Todo[]>;
    setStatus:SetStateAction<Actions>;

}

export type TodoListProps = {
    todos: Todo[];
    setTodos: SetStateAction<Todo[]>;
    filterdTodos:Todo[];


}
export type TodoProps = {
    todo: Todo;
    todos: Todo[];

    setTodos: SetStateAction<Todo[]>;

}