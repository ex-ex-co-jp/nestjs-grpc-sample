// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider = "postgresql"
//   url      = "postgresql://postgres:postgres@db:5432/sample"
// }

// model User {
//   id        Int         @id @default(autoincrement())
//   name      String
//   password  String
//   UserRoles UserRoles[]
// }

// model Role {
//   id            Int             @id @default(autoincrement())
//   name          String
//   UserRoles     UserRoles[]
//   RoleResources RoleResources[]
// }

// model Resource {
//   id            Int             @id @default(autoincrement())
//   name          String
//   RoleResources RoleResources[]
// }

// model UserRoles {
//   id      Int  @id @default(autoincrement())
//   user_id Int
//   user    User @relation(fields: [user_id], references: [id])
//   role    Role @relation(fields: [role_id], references: [id])
//   role_id Int
// }

// model RoleResources {
//   id          Int      @id @default(autoincrement())
//   role        Role     @relation(fields: [role_id], references: [id])
//   role_id     Int
//   resource    Resource @relation(fields: [resource_id], references: [id])
//   resource_id Int
// }

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const adminRole = await prisma.role.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: 'admin',
    },
  });
  const superUserRole = await prisma.role.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      name: 'superuser',
    },
  });
  const userRole = await prisma.role.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      name: 'user',
    },
  });

  // USER
  const admin1 = await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: 'admin1',
      password: 'password',
    },
  });
  const admin2 = await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: 'admin1',
      password: 'password',
    },
  });
  const superuser1 = await prisma.user.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      name: 'superuser1',
      password: 'password',
    },
  });
  const user1 = await prisma.user.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      name: 'user1',
      password: 'password',
    },
  });
  const user2 = await prisma.user.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      name: 'user2',
      password: 'password',
    },
  });
}

main();
