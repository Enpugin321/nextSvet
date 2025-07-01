'use server';

import { getCases, getTotalCases } from '@/services/cases';
import { Case } from '@prisma/client';

import React from 'react';
import { CaseLoader } from '@/components/features';

type Props = {};

export async function OurProjects({}: Props) {
  const initialData: Case[] = await getCases(1, 4, 'APARTMENT');
  const totalCount = await getTotalCases();

  return <CaseLoader initialData={initialData} totalCount={totalCount} />;
}
