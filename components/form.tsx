"use client";

import React from 'react'
import { addTask } from '../actions/actions';

export default function Form() {
    return (
        <form action={addTask}>
            <input type="text" 
            name="task" 
            placeholder="Add task" 
            required />
            <button type="submit">Add Task</button>
        </form>
    )
}
