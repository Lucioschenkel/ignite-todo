/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { beforeEach, describe, expect, it } from 'vitest';
import { screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import { renderWithProviders } from '../../utils/test.utils';
import { Home } from '.';

async function addTask(input: HTMLElement, text: string, submit: HTMLElement) {
  await user.click(input);
  await user.clear(input);

  await user.keyboard(text);

  await user.click(submit);
}

describe('HomePage', () => {
  beforeEach(() => {
    renderWithProviders(<Home />);
  });

  it('adds three tasks, deletes one, adds another and toggles the last', async () => {
    const input = screen.getByRole('textbox');
    const submit = screen.getByRole('button');

    const tasks = ['Task 1', 'Task 2', 'Task 3'];

    for (const task of tasks) {
      await addTask(input, task, submit);
    }

    

    const list = screen.getByTestId('tasks');

    let rows = within(list).getAllByTestId('task');

    expect(rows).toHaveLength(3);

    const deleteButton = within(rows[rows.length - 1]).getByRole('button');

    await user.click(deleteButton);

    rows = within(list).getAllByTestId('task');

    expect(rows).toHaveLength(2);

    await addTask(input, 'Task 4', submit);

    const checkboxes = screen.getAllByRole('checkbox');

    const lastTask = checkboxes[checkboxes.length -1];
    
    await user.click(lastTask);
    
    const done = screen.getByRole('checkbox', {
      name: /task 4/i
    });

    expect(done).toBeVisible();
    expect(done.getAttribute('data-state')).toBe('checked');

    const task2 = screen.getByRole('checkbox', {
      name: /task 2/i,
    });

    expect(task2).toBeVisible();
    expect(task2.getAttribute('data-state')).toBe('unchecked');
  });
});
