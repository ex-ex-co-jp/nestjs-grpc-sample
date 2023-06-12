import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['login', 'sample', 'create', 'read', 'delete', 'update'],
        protoPath: [
          join(__dirname, '../proto/sample.proto'),
          join(__dirname, '../proto/login.proto'),
          join(__dirname, '../proto/create.proto'),
          join(__dirname, '../proto/read.proto'),
          join(__dirname, '../proto/update.proto'),
          join(__dirname, '../proto/delete.proto'),
        ],
        url: '0.0.0.0:3000',
      },
    },
  );
  await app.listen();
}
bootstrap();
