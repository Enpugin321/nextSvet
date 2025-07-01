'use server';

import React from 'react';
import { CatalogItem } from '@/components/entities';

export async function Catalog() {
  return (
    <div
      className='grid grid-cols-2 sm:grid-cols-3'
      style={{
        boxSizing: 'border-box',
        borderTop: '1px solid #c4c4c4',
        borderLeft: '1px solid #c4c4c4',
      }}
    >
      {/* Each item has only right and bottom borders */}
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
      <CatalogItem img='/assets/images/roman.png' className='border-l-0 border-t-0' />
    </div>
  );
}
