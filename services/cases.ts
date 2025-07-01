import type { Case } from '@prisma/client';
import { axiosClient } from './axios-client';
import { axiosServer } from './axios-server';
import { prisma } from '@/prisma/prisma-client';

const isServer = typeof window === 'undefined';

export const getCases = async (
  page = 1,
  limit = 6,
  category?: 'APARTMENT' | 'HOUSE' | 'COMERCIAL',
): Promise<Case[]> => {
  const axios = isServer ? axiosServer : axiosClient;

  const params: { page: number; limit: number; category?: string } = { page, limit };
  if (category) {
    params.category = category;
  }
  // Fetch cases with optional category filtering

  const { data } = await axios.get<Case[]>('/cases', { params });

  return data;
};

export const fetchMoreCases = async (page: number, limit: number) => {
  return getCases(page, limit);
};

export const getTotalCases = async (): Promise<number[]> => {
  const axios = isServer ? axiosServer : axiosClient;
  const { data } = await axios.get<{ total: number[] }>('/cases/total');
  return data.total;
};

export const getCaseById = async (id: number) => {
  return await prisma.case.findUnique({
    where: { id },
    include: {
      rooms: true,
      products: true,
      controls: true,
      workTypes: true,
    },
  });
};
