import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { LoginModule } from '@/login/login.module';
import { CreateModule } from './create/create.module';
import { ReadModule } from './read/read.module';

@Module({
  imports: [SampleModule, LoginModule, CreateModule, ReadModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
