"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
let TasksService = class TasksService extends prisma_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async create(taskCreateDTO) {
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
    async findByStatus(status) {
        if (!['pendiente', 'completada'].includes(status)) {
            throw new common_1.BadRequestException('Estado debe ser "pendiente" o "completada"');
        }
        return this.task.findMany({ where: { status } });
    }
    async findByDueDate(date) {
        const dueDate = new Date(date);
        if (isNaN(dueDate.getTime())) {
            throw new common_1.BadRequestException('Fecha inválida');
        }
        return this.task.findMany({
            where: {
                dueDate: {
                    equals: dueDate
                }
            }
        });
    }
    async update(id, taskUpdateDTO) {
        await this.getTaskById(id);
        return this.task.update({
            where: { id },
            data: {
                ...taskUpdateDTO,
                dueDate: taskUpdateDTO.dueDate ? new Date(taskUpdateDTO.dueDate) : null
            }
        });
    }
    async updateStatus(id, statusDTO) {
        await this.getTaskById(id);
        return this.task.update({
            where: { id },
            data: { status: statusDTO.status }
        });
    }
    async delete(id) {
        await this.getTaskById(id);
        return this.task.delete({ where: { id } });
    }
    async findByPriority(priority) {
        if (!['Alta', 'Media', 'Baja'].includes(priority)) {
            throw new common_1.BadRequestException('Prioridad debe ser "Alta", "Media" o "Baja"');
        }
        return this.task.findMany({ where: { priority } });
    }
    async getTaskById(id) {
        const task = await this.task.findUnique({ where: { id } });
        if (!task)
            throw new common_1.BadRequestException(`Tarea con ID ${id} no encontrada`);
        return task;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map