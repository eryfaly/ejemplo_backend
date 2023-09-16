import { Module } from '@nestjs/common';
import { ClientModule } from './client.module';

@Module({
  imports: [ClientModule],
  controllers: [],
  providers: [],
  exports:[]
  
})
export class AppModule {}
