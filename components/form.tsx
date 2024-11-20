"use client";

import React, { useRef } from 'react'
import { addTask } from '../actions/actions';

export default function Form() {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form ref={ref} action={async formData => {
            await addTask(formData);
        }}>
            <input type="text" 
            name="task" 
            placeholder="Add task" 
            required />
            <button type="submit">Add Task</button>
        </form>
    )
}
