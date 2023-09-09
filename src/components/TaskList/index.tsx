import { useContext } from 'react';

import { TodoContext } from '../../contexts/TodoContext';
import { Task } from '../Task';
import { Typography } from '../Typography';

import { EmptyTaskList, List } from './styles';

import clipboardIcon from '../../assets/clipboard.png';

export function TaskList() {
  const { tasks } = useContext(TodoContext);

  return (
    <>
      {tasks.length > 0 ? (
        <List data-testid="tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </List>
      ) : (
        <EmptyTaskList>
          <img src={clipboardIcon} alt="" />
          <Typography weight="bold">
            Você ainda não tem tarefas cadastradas
          </Typography>
          <Typography>Crie tarefas e organize seus itens a fazer</Typography>
        </EmptyTaskList>
      )}
    </>
  );
}
