import { TasksService } from './tasks.service';
import { TaskCreateDTO } from './dto/task.create.dto';
import { TaskUpdateDTO } from './dto/task.update.dto';
import { TaskStatusDTO } from './dto/task.status.dto';
export declare class TasksController {
    private readonly service;
    constructor(service: TasksService);
    create(data: TaskCreateDTO): Promise<{
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
    update(id: string, data: TaskUpdateDTO): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }>;
    updateStatus(id: string, statusDTO: TaskStatusDTO): Promise<{
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        status: string;
        id: number;
        createdAt: Date;
    }>;
    delete(id: string): Promise<{
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
}
