import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { TaskCreateDTO } from './dto/task.create.dto';
import { TaskUpdateDTO } from './dto/task.update.dto';
import { TaskStatusDTO } from './dto/task.status.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TasksService extends PrismaClient implements OnModuleInit {
    
    async onModuleInit() {
        await this.$connect();
    }

    async create(taskCreateDTO: TaskCreateDTO) {
        return this.task.create({
            data: {
                ...taskCreateDTO,
                dueDate: taskCreateDTO.dueDate ? new Date(taskCreateDTO.dueDate) : null,
                createdAt: new Date()
            }
        });
    }

    async findAll() {
        return this.task.findMany();
    }

    async findByStatus(status: string) {
        if (!['pendiente', 'completada'].includes(status)) {
            throw new BadRequestException('Estado debe ser "pendiente" o "completada"');
        }
        return this.task.findMany({ where: { status } });
    }

    async findByDueDate(date: string) {
        const dueDate = new Date(date);
        if (isNaN(dueDate.getTime())) {
            throw new BadRequestException('Fecha inválida');
        }
        return this.task.findMany({ 
            where: { 
                dueDate: { 
                    equals: dueDate 
                } 
            } 
        });
    }

    async update(id: number, taskUpdateDTO: TaskUpdateDTO) {
        await this.getTaskById(id);
        return this.task.update({
            where: { id },
            data: {
                ...taskUpdateDTO,
                dueDate: taskUpdateDTO.dueDate ? new Date(taskUpdateDTO.dueDate) : null
            }
        });
    }

    async updateStatus(id: number, statusDTO: TaskStatusDTO) {
        await this.getTaskById(id);
        return this.task.update({
            where: { id },
            data: { status: statusDTO.status }
        });
    }

    async delete(id: number) {
        await this.getTaskById(id);
        return this.task.delete({ where: { id } });
    }

    async findByPriority(priority: string) {
        if (!['Alta', 'Media', 'Baja'].includes(priority)) {
            throw new BadRequestException('Prioridad debe ser "Alta", "Media" o "Baja"');
        }
        return this.task.findMany({ where: { priority } });
    }

    private async getTaskById(id: number) {
        const task = await this.task.findUnique({ where: { id } });
        if (!task) throw new BadRequestException(`Tarea con ID ${id} no encontrada`);
        return task;
    }
}