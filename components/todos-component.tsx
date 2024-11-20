"use client";

import React, { useOptimistic, useRef } from 'react'
import { addTask } from '../actions/actions';
import Button from './button';

type Todo = {
    id: number;
    content: string;
}

type TodosComponentProps = {
    tasks: Todo[];
}

export default function TodosComponent({tasks}: TodosComponentProps) {
    const ref = useRef<HTMLFormElement>(null);
    const [optimisticTodos, addOptimisticTodo] = useOptimistic(tasks, (state, newTask: Todo) => {
        return [...state, newTask];
    });
    return (
        <>
            <form ref={ref} action={async formData => {
                ref.current?.reset();
                addOptimisticTodo({
                    id: Math.random(),
                    content: formData.get("task") as string,
                });
                await addTask(formData);
            }}>
                <input type="text" 
                name="task" 
                placeholder="Add task" 
                required />
                <Button />
            </form>

            <ul>
                {optimisticTodos.map((task) => (
                    <li key={task.id}>{task.content}</li>
                ))}
            </ul>
        </>
    )
}
