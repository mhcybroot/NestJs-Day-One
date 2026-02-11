import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {

    constructor(private readonly databaseService: DatabaseService) {
        console.log('DatabaseController initialized with service:', this.databaseService.getConnectionStatus());
    }


    @Get('status')
    getStatus(): string {
        return this.databaseService.getConnectionStatus();
    }


    @Get('uri')
    getDatabaseUri(): string {
        return this.databaseService.getDatabaseUri();
    }
}
