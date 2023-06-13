import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.role.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: 'admin',
    },
  });
  await prisma.role.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      name: 'superuser',
    },
  });
  await prisma.role.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      name: 'user',
    },
  });

  // USER
  await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: 'admin1',
      password: 'password',
    },
  });
  await prisma.user.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      name: 'admin2',
      password: 'password',
    },
  });
  await prisma.user.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      name: 'superuser1',
      password: 'password',
    },
  });
  await prisma.user.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      name: 'user1',
      password: 'password',
    },
  });
  await prisma.user.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      name: 'user2',
      password: 'password',
    },
  });
  // user role
  await prisma.userRoles.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      user_id: 1,
      role_id: 1,
    },
  });
  await prisma.userRoles.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      user_id: 2,
      role_id: 1,
    },
  });
  await prisma.userRoles.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      user_id: 3,
      role_id: 2,
    },
  });
  await prisma.userRoles.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      user_id: 4,
      role_id: 3,
    },
  });
  await prisma.userRoles.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      user_id: 5,
      role_id: 3,
    },
  });
}

main();
