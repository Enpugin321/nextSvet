import React from 'react';
import { ImageSliderClient } from '@/components/features/ImageSlider';

interface Props {
  className?: string;
  images: string[];
}

export const RoomSection: React.FC<Props> = ({ className, images }) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col sm:flex-row justify-between h-fit gap-4 sm:gap-8 md:gap-14'>
        <h2 className='font-unbounded font-extralight text-4xl text-graphite'>
          Гостинная
        </h2>
        <div className='hidden sm:block w-[1px] bg-gray-300'></div>
        <div className='flex flex-col flex-1'>
          <h3 className='font-unbounded font-normal text-2xl text-graphite'>
            Рулонная штора с электроприводом
          </h3>
          <p className='font-unbounded font-extralight text-xl text-black'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam
            iure, unde dolore aut numquam beatae dolorum eum molestiae, laborum officia
            sit eligendi enim, libero dolor nihil aperiam recusandae itaque?
          </p>
        </div>
      </div>

      <ImageSliderClient
        className='h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] mt-8'
        images={images}
      />
    </div>
  );
};
