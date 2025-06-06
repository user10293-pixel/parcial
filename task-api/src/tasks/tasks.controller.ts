import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskCreateDTO } from './dto/task.create.dto';
import { TaskUpdateDTO } from './dto/task.update.dto';
import { TaskStatusDTO } from './dto/task.status.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly service: TasksService) {}

    @Post()
    create(@Body() data: TaskCreateDTO) {
        return this.service.create(data);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }
    
    @Get('status/:status')
    findByStatus(@Param('status') status: string) {
        return this.service.findByStatus(status);
    }

    @Get('limit/:date')
    findByDueDate(@Param('date') date: string) {
        return this.service.findByDueDate(date);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: TaskUpdateDTO) {
        return this.service.update(+id, data);
    }

    @Patch(':id/status')
    updateStatus(@Param('id') id: string, @Body() statusDTO: TaskStatusDTO) {
        return this.service.updateStatus(+id, statusDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(+id);
    }

    @Get('priority/:priority')
    findByPriority(@Param('priority') priority: string) {
        return this.service.findByPriority(priority);
    }
}