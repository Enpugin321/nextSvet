import React from 'react';
import { Case, Prisma } from '@prisma/client';
import { Button } from '@/components/shared/ui';
import Image from 'next/image';
import { Container } from '@/components/shared';
import { Tag } from '@/components/shared/ui';
import { RoomSection, OurProjects } from '@/components/widgets';
import { ArrowTip } from '@/components/shared/ui/arrow';
import { Accordion } from '@/components/features';

type CaseWithRelations = Prisma.CaseGetPayload<{
  include: {
    rooms: true;
    products: true;
    controls: true;
    workTypes: true;
  };
}>;

interface Props {
  caseData: CaseWithRelations;
}

const tagsTitles: {
  title: string;
  key: 'products' | 'controls' | 'workTypes';
  color: 'bronze' | 'graphite' | 'yellow';
}[] = [
  { title: 'Изделия', key: 'products', color: 'bronze' },
  { title: 'Способы управления', key: 'controls', color: 'graphite' },
  { title: 'Виды работ', key: 'workTypes', color: 'yellow' },
];

export const CasePage: React.FC<Props> = ({ caseData }) => {
  console.log(caseData);
  return (
    <main className='bg-white pt-14 md:pt-24'>
      <Container className='flex flex-col gap-40 pb-10'>
        <section className='grid grid-cols-1 md:grid-cols-[1fr_3fr] h-fit  w-full gap-3'>
          <div className='aspect-square h-full border border-red-300 relative'>
            <Image src={caseData.img} fill alt='caseImage' className='object-fill' />
          </div>
          <div className='flex flex-col justify-between w-full h-fit md:h-[75vh] xl:h-fit gap-2'>
            <div className='flex flex-col gap-5 sm:gap-10 justify-between border border-red-300 p-5 lg:p-10 text-graphite md:overflow-auto'>
              <h1 className='font-unbounded font-normal text-base sm:text-xl lg:text-2xl max-w-md'>
                3-х комнатная квартира ЖК Муринская дыра
              </h1>

              {tagsTitles.map((tag, idx) => (
                <div key={tag.title + idx}>
                  <h4 className='font-unbounded mb-2 font-extralight text-sm sm:text-lg lg:text-xl'>
                    {tag.title}
                  </h4>

                  <div className='flex gap-2'>
                    {caseData[tag.key].map((item, idx) => (
                      <Tag
                        key={tag.color + 'tag' + idx}
                        className='px-2 sm:px-[14px] text-[10px] sm:text-base'
                        color={tag.color}
                      >
                        {item.label}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}

              <div className='border border-b-gray-300'></div>

              <div className='flex gap-8 sm:gap-16'>
                <div>
                  <h4 className='font-unbounded font-extralight text-sm sm:text-lg lg:text-xl'>
                    Сроки
                  </h4>
                  <h5 className='font-unbounded font-normal text-base sm:text-xl lg:text-2xl'>
                    {caseData.date}
                  </h5>
                </div>

                <div>
                  <h4 className='font-unbounded font-extralight text-sm sm:text-lg lg:text-xl'>
                    Стоимость
                  </h4>
                  <h5 className='font-unbounded font-normal text-base sm:text-xl lg:text-2xl'>
                    {Math.round(caseData.price / 1000)} тыс.р.
                  </h5>
                </div>
              </div>
            </div>

            <Button
              className='hidden md:block bg-accent font-montserrat font-medium w-2xs text-[16px]'
              size={'lg'}
            >
              рассчитать ваш проект
            </Button>
          </div>
        </section>

        {caseData.rooms.map((room, idx) => (
          <RoomSection key={idx} images={room.images} />
        ))}

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
      </Container>
    </main>
  );
};
