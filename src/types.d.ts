import { Todo } from "./ITodo";

type FormProps = {
    setInputText: (e:string) => void;
    setTodos: SetStateAction<Todo[]>;
    todos: Todo[]
    inputText:string;
}