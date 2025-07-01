'use server';

import { getCases } from '@/services/cases';
import CaseSliderClient from './ui/caseSliderClient';

export default async function CaseSlider() {
  const initialSlides = await getCases(1, 6);

  return <CaseSliderClient initialSlides={initialSlides} />;
}
