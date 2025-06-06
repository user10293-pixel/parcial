import { OnModuleInit } from '@nestjs/common';
import { TaskCreateDTO } from './dto/task.create.dto';
import { TaskUpdateDTO } from './dto/task.update.dto';
import { TaskStatusDTO } from './dto/task.status.dto';
import { PrismaClient } from 'generated/prisma';
export declare class TasksService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    create(taskCreateDTO: TaskCreateDTO): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }[]>;
    findByStatus(status: string): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }[]>;
    findByDueDate(date: string): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }[]>;
    update(id: number, taskUpdateDTO: TaskUpdateDTO): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }>;
    updateStatus(id: number, statusDTO: TaskStatusDTO): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }>;
    delete(id: number): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }>;
    findByPriority(priority: string): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }[]>;
    private getTaskById;
}
