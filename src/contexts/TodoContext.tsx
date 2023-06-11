import { ReactNode, createContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  done: boolean;
};

type AddTaskData = Pick<Task, 'title'>;

type TodoContextType = {
  tasks: Task[];
  addTask: (data: AddTaskData) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
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
        id: uuidV4(),
        done: false,
        title,
      },
    ]);
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function toggleTaskStatus(id: string) {
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
