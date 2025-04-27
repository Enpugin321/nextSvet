import { Prisma } from '@prisma/client'
import {prisma} from './prisma-client'

const userData: Prisma.UserCreateInput[] = [
    {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: [
          {
            title: 'Join the Prisma Discord',
            content: 'https://pris.ly/discord',
            published: true,
          },
          {
            title: 'Prisma on YouTube',
            content: 'https://pris.ly/youtube',
          },
        ],
      },
    },
    {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://www.twitter.com/prisma',
            published: true,
          },
        ],
      },
    }
  ]

export async function up() {
    for (const u of userData) {
        await prisma.user.create({ data: u })
      }
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  }
  
  async function main() {
    try {
      await down();
      await up();
    } catch (e) {
      console.error(e);
    }
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
