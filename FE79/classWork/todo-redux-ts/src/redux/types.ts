interface ITodo {
  id: number;
  text: string;
}

interface IStore {
  todos: ITodo[];
}

export type { ITodo, IStore };
