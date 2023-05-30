import { useContext } from 'react';
import { PlusCircle } from 'phosphor-react';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TextInput } from '../../components/TextInput';
import {
  EmptyTaskList,
  HeaderText,
  HomeContainer,
  SectionContainer,
  TaskForm,
  TaskList,
  TaskListContainer,
  TaskListHeader,
} from './styles';
import { Badge } from '../../components/Badge';
import { TodoContext } from '../../contexts/TodoContext';

import clipboardIcon from '../../assets/clipboard.png';
import { Typography } from '../../components/Typography';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Task } from '../../components/Task';

const addTaskSchema = z.object({
  title: z.string().min(3),
});

type AddTaskData = z.infer<typeof addTaskSchema>;

export function Home() {
  const { tasks, addTask } = useContext(TodoContext);
  const { register, handleSubmit, reset } = useForm<AddTaskData>({
    resolver: zodResolver(addTaskSchema),
  });

  function handleAddTask(data: AddTaskData) {
    addTask({
      title: data.title,
    });
    reset();
  }

  const finished = tasks.filter((task) => task.done).length;

  return (
    <HomeContainer>
      <Header />
      <SectionContainer>
        <TaskForm onSubmit={handleSubmit(handleAddTask)}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            {...register('title')}
          />
          <Button type="submit" icon={PlusCircle}>
            Criar
          </Button>
        </TaskForm>

        <TaskListContainer>
          <TaskListHeader>
            <HeaderText variant="primary">
              Tarefas Criadas <Badge>{tasks.length}</Badge>
            </HeaderText>

            <HeaderText variant="secondary">
              Concluídas{' '}
              <Badge>
                {finished} {tasks.length > 0 && ` de ${tasks.length}`}
              </Badge>
            </HeaderText>
          </TaskListHeader>
          {tasks.length > 0 ? (
            <TaskList>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </TaskList>
          ) : (
            <EmptyTaskList>
              <img src={clipboardIcon} alt="" />
              <Typography weight="bold">
                Você ainda não tem tarefas cadastradas
              </Typography>
              <Typography>
                Crie tarefas e organize seus itens a fazer
              </Typography>
            </EmptyTaskList>
          )}
        </TaskListContainer>
      </SectionContainer>
    </HomeContainer>
  );
}
