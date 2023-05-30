import { Check, Trash } from 'phosphor-react';

import {
  CheckboxContainer,
  CheckboxIndicator,
  DeleteButton,
  InputContainer,
  TaskContainer,
} from './styles';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

type TaskProps = {
  task: {
    done: boolean;
    id: number;
    title: string;
  };
};

export function Task({ task }: TaskProps) {
  const { deleteTask, toggleTaskStatus } = useContext(TodoContext);
  const { id, done, title } = task;

  return (
    <TaskContainer>
      <InputContainer>
        <CheckboxContainer
          id={`task-${id}`}
          checked={done}
          onCheckedChange={() => toggleTaskStatus(id)}
        >
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </CheckboxContainer>
        <label htmlFor={`task-${id}`}>{title}</label>
      </InputContainer>
      <DeleteButton onClick={() => deleteTask(id)}>
        <Trash size={20} />
      </DeleteButton>
    </TaskContainer>
  );
}
