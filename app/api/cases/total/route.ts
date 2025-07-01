import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const total = [];

  for (const i of ['APARTMENT', 'HOUSE', 'COMERCIAL']) {
    const category = i as 'HOUSE' | 'APARTMENT' | 'COMERCIAL';
    const count = await prisma.case.count({
      where: { category },
    });
    total.push(count);
  }

  return NextResponse.json({ total });
}
