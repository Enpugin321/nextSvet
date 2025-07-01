import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '6', 10);
  const skip = (page - 1) * limit;
  const category = searchParams.get('category') as 'HOUSE' | 'APARTMENT' | 'COMERCIAL';

  const cases = await prisma.case.findMany({
    skip,
    take: limit,
    where: category ? { category } : undefined,
  });

  return NextResponse.json(cases);
}
