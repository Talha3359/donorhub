import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting database seed...');

    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
        where: { email: 'admin@donorhub.com' },
    });

    if (existingAdmin) {
        console.log('Admin user already exists. Skipping...');
        return;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('@Abc123456', 10);

    const admin = await prisma.user.create({
        data: {
            email: 'admin@donorhub.com',
            password: hashedPassword,
            name: 'Admin',
            role: 'ADMIN',
        },
    });

    console.log('Admin user created successfully:', admin.email);
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
