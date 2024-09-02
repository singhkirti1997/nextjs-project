import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const user = await prisma.user.create({
      data: { name, email, message },
    });
    res.json(user);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
