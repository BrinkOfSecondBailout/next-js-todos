"use server";
import { PrismaClient, Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addTask(formData: FormData) {
    const content = formData.get("task") ;

    try {
        await prisma.task.create({
            data: { 
                content: content as string 
            },
        });
    } catch (e) {
        console.log(e);
    }

    revalidatePath('/todos');
}

export async function getTasks(): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
        orderBy: { createdAt: "desc" },
    });
    return tasks;
}