"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// type Task = {
//     id: number;
//     content: string;
// };

// // Mock database
// let tasks: Task[] = [];

// Add task action
export async function addTask(formData: FormData) {
    const content = formData.get("task") ;

    if (typeof content !== "string" || !content.trim()) {
        throw new Error("Invalid task content");
    }

    await prisma.task.create({
        data: { content },
    });

    revalidatePath('/todos');
}

// Get tasks action (to simulate fetching tasks from a database)
export async function getTasks(): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
        orderBy: { createdAt: "desc" },
    });
    return tasks;
}