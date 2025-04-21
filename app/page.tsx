import { HeroSection } from '@/components/widgets';
import { ScrollTrackerComponent } from '@/components/ScrollTrackerComponent';
import { CatalogItem, Container } from '@/components/shared';
import HowWeWork from '@/components/widgets/howWeWork';
import { CaseSlider } from '@/components/features/CaseSlider';
import { ManagingSlider } from '@/components/features/managingSlider';

export default function Home() {
  return (
    <div>
      <HeroSection className='relative w-full h-screen' />

      <Container className='bg-white flex flex-col gap-28 pt-20 pb-20'>
        {/* Мы производим */}
        <div className='flex flex-col gap-7'>
          <h3 className='text-addition-color font-manrope text-5xl'>Мы производим</h3>
          <div className='flex justify-between'>
            <CatalogItem className='' />
            <CatalogItem className='' />
            <CatalogItem className='' />
            <CatalogItem className='' />
          </div>
          <div className='flex justify-between'>
            <CatalogItem className='' />
            <CatalogItem className='' />
            <CatalogItem className='' />
            <CatalogItem className='' />
          </div>
        </div>

        {/* Как мы работаем */}
        <div className='flex flex-col gap-7'>
          <h3 className='text-[#4A2511] font-manrope text-5xl'>КАК МЫ РАБОТАЕМ</h3>
          <div className='w-full max-w-7xl mx-auto pb-10'>
            <HowWeWork />
          </div>
        </div>

        {/* Примеры работ */}
        <div className='flex flex-col gap-7'>
          <h3 className='text-[#4A2511] font-manrope text-5xl'>Наши работы</h3>
          <CaseSlider />
        </div>

        {/* Примеры работ */}
        <div className='flex flex-col gap-7'>
          <h3 className='text-[#4A2511] font-manrope text-5xl'>
            Виды управления электрокарнизом
          </h3>
          <ManagingSlider />
        </div>
      </Container>

      <ScrollTrackerComponent />
    </div>
  );
}
