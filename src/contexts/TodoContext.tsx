import { ReactNode, createContext, useState } from 'react';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

type AddTaskData = Pick<Task, 'title'>;

type TodoContextType = {
  tasks: Task[];
  addTask: (data: AddTaskData) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

type TodoContextProviderProps = {
  children: ReactNode;
};

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask({ title }: AddTaskData) {
    setTasks((previous) => [
      ...previous,
      {
        id: previous.length,
        done: false,
        title,
      },
    ]);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function toggleTaskStatus(id: number) {
    setTasks((previous) => {
      const updatedTasks = previous.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
          1;
        }

        return task;
      });

      return updatedTasks;
    });
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTaskStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
