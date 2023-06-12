/*
  Warnings:

  - You are about to drop the `RoleResources` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoleResources" DROP CONSTRAINT "RoleResources_resource_id_fkey";

-- DropForeignKey
ALTER TABLE "RoleResources" DROP CONSTRAINT "RoleResources_role_id_fkey";

-- DropTable
DROP TABLE "RoleResources";
