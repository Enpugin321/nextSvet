import { HeroSection, Timeline } from '@/components/widgets';
import { Container } from '@/components/shared';
import { OurProjects, Catalog } from '@/components/widgets';
import { ArrowTip } from '@/components/shared/ui/arrow';
import {
  Accordion,
  ControlSelector,
  ScrollTrackerComponent,
} from '@/components/features';

export default function HomePage() {
  return (
    <main>
      <HeroSection className='relative w-full h-screen' />

      <Container className='bg-white flex flex-col gap-28 pt-20 pb-20'>
        {/* Мы производим */}
        <div className='flex flex-col gap-7'>
          <h3 className='text-addition font-manrope text-5xl'>Мы производим</h3>

          <Catalog />
        </div>
        {/* Как мы работаем */}
        <div className='flex flex-col items-center'>
          <div className='text-graphite z-10 flex items-center text-xl font-extralight font-unbounded gap-3'>
            <ArrowTip className='rotate-90' />
            <h3 className='-mt-[3px]'>как мы работаем</h3>
            <ArrowTip className='-rotate-90' />
          </div>
          <div className='w-full mx-auto'>
            <Timeline />
          </div>
        </div>

        <div className='relative flex items-center flex-col '>
          <div className='text-graphite flex items-center text-xl font-extralight font-unbounded mb-10 gap-3'>
            <ArrowTip className='rotate-90' />
            <h3 className='-mt-[3px]'>наши проекты</h3>
            <ArrowTip className='-rotate-90' />
          </div>
          <OurProjects />
        </div>

        <div>
          <h3 className='text-graphite text-center items-center text-4xl font-extralight font-unbounded mb-10 uppercase'>
            почему выбирают нас
          </h3>
          <Accordion />
        </div>

        <ControlSelector />
      </Container>

      <ScrollTrackerComponent />
    </main>
  );
}
