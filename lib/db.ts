import { PrismaClient } from "@prisma/client";

// This is needed to prevent multiple instances of Prisma Client in development
interface CustomNodeJsGlobal {
  prisma: PrismaClient | undefined;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
