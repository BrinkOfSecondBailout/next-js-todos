"use server";

import { revalidatePath } from "next/cache";

type Task = {
    id: number;
    content: string;
};

// Mock database
let tasks: Task[] = [];

// Add task action
export async function addTask(formData: FormData) {
    const content = formData.get("task") ;

    if (typeof content !== "string" || !content.trim()) {
        throw new Error("Invalid task content");
    }

    const newTask: Task = { id : Date.now(), content };
    tasks.push(newTask);
    revalidatePath('/todos');
}

// Get tasks action (to simulate fetching tasks from a database)
export async function getTasks(): Promise<Task[]> {
    return tasks;
}