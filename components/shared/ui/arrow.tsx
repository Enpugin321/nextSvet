// ArrowTip.tsx
import React from 'react';

type ArrowProps = {
  color?: string;
  length?: number;
  direction?: 'right' | 'left' | 'up' | 'down';
};

export function ArrowTip({
  color = 'currentColor',
  size = 18,
  className = '',
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={(size * 10) / 18}
      viewBox='0 0 18 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ color }}
      className={`inline-block ${className}`}
    >
      <path
        d='M16.6979 1.0719L13.4716 2.00767C13.4716 2.00767 13.4251 2.02164 13.4018 2.03095C12.1169 2.51513 11.1066 3.53004 10.6224 4.81032C10.6131 4.8336 10.6085 4.85687 10.5992 4.88015L9.8197 8.05929C9.62882 8.72503 8.37112 8.72503 8.18024 8.05929L7.40079 4.88015C7.40079 4.88015 7.38682 4.8336 7.37751 4.81032C6.89333 3.52538 5.87842 2.51512 4.59814 2.03095C4.57486 2.02163 4.55159 2.01698 4.52831 2.00767L1.302 1.0719'
        stroke='currentColor'
        strokeLinecap='round'
      />
    </svg>
  );
}

export function Arrow({ color = '#000', length = 100, direction = 'right' }: ArrowProps) {
  const tipSize = 18;
  const isVertical = direction === 'up' || direction === 'down';

  const rotation = {
    right: 'rotate-0',
    left: 'rotate-180',
    up: '-rotate-90',
    down: 'rotate-90',
  }[direction];

  const commonLineStyle: React.CSSProperties = {
    backgroundColor: color,
    transition: 'all 0.3s ease', // ⬅️ плавное изменение длины
  };

  const lineStyle: React.CSSProperties = isVertical
    ? {
        ...commonLineStyle,
        height: length - tipSize,
        width: 1,
      }
    : {
        ...commonLineStyle,
        width: length - tipSize,
        height: 1,
        marginTop: '2.5px',
      };

  const tipStyle: React.CSSProperties =
    direction === 'right'
      ? { marginInlineStart: '-12px' }
      : direction === 'down'
      ? { marginBlockStart: '-8px' }
      : {};

  return (
    <div className={`flex items-center justify-center ${isVertical ? 'flex-col' : ''}`}>
      {(direction === 'right' || direction === 'down') && (
        <>
          <div style={lineStyle} />
          <div className={rotation} style={tipStyle}>
            <ArrowTip className='-rotate-90' color={color} />
          </div>
        </>
      )}
      {(direction === 'left' || direction === 'up') && (
        <>
          <div className={rotation}>
            <ArrowTip color={color} />
          </div>
          <div className=' -mt-[8px]' style={lineStyle} />
        </>
      )}
    </div>
  );
}
