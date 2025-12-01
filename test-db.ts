import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Checking database...');
        const users = await prisma.user.findMany();
        console.log(`Found ${users.length} users:`);
        users.forEach(u => console.log(`- ${u.email} (${u.role})`));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
