// app/api/users/route.ts
import { prisma } from '@/prisma/prisma-client'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      posts: {
        create: body.posts
      }
    }
  })
  
  return NextResponse.json(user)
}

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
 
  return NextResponse.json(users)
}