import { Module } from '@nestjs/common';
import { LoginModule } from '@/login/login.module';
import { CreateModule } from './create/create.module';
import { ReadModule } from './read/read.module';
import { UpdateModule } from './update/update.module';
import { DeleteModule } from './delete/delete.module';

@Module({
  imports: [LoginModule, CreateModule, ReadModule, UpdateModule, DeleteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
