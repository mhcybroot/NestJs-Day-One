import { Injectable ,OnApplicationShutdown,OnModuleInit} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {

    constructor(private  configService: ConfigService) {}
    private isConnected: boolean = false;

    onModuleInit() {
        this.isConnected = true;
        console.log('Database connected');
    }

    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log('Database disconnected due to signal: ', signal);
    }


    getConnectionStatus(): string {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }


    getDatabaseUri(): string {
        return this.configService.get<string>('DATABASE_URL') || 'Database URI not set';
    }


}
