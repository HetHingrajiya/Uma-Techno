const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.themeSetting.deleteMany();
  console.log('Cleared old theme settings!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
