import React from 'react';
import { CasePage } from '@/components/pages/CasePage';
import { getCaseById } from '@/services/cases';
import { notFound } from 'next/navigation';

interface Props {
  params: { caseId: string };
}

const CasePageRoute = async ({ params }: Props) => {
  const { caseId } = await params;
  const caseData = await getCaseById(Number(caseId));

  if (!caseData) return notFound();

  return <CasePage caseData={caseData} />;
};

export default CasePageRoute;
