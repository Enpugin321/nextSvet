import Image from 'next/image';

import StartSVG from '@/public/assets/vectors/Frame96.svg';
import testJPG from '@/public/assets/images/test.jpg';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils';

const events = [
  {
    id: '01',
    title: 'Бесплатный замер',
    text: 'Наш специалист приедет к вам, проведет замеры и поможет выбрать оптимальное решение, учитывая все ваши пожелания.',
    img: testJPG,
  },
  {
    id: '02',
    title: 'Подготовка ремонта',
    text: 'Делаем техническое задание для ваших строителей, чтобы правильно подготовить ремонт к установке электрокарнизов',
    img: testJPG,
    right: true,
  },
  {
    id: '03',
    title: 'Производство',
    text: 'Изготавливаем продукцию на современном оборудовании, гарантируя высокое качество и точное соответствие размерам.',
    img: testJPG,
  },
  {
    id: '04',
    title: 'Монтаж и настройка',
    text: 'Установим все изделия без пыли и грязи. Настроим управление любым удобным способом',
    img: testJPG,
    right: true,
  },
];

export function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`${styles.timelineEvent} ${event.right ? styles.rightSide : ''} ${
            index === 0 ? 'overflow-hidden' : ''
          }`}
        >
          <Image className={styles.timelineImg} src={event.img} alt={event.title} />

          <div className={styles.timelineDate}>
            <div className={styles.timelineStarWrapper}>
              <Image src={StartSVG} alt='Star icon' className={styles.timelineStar} />
            </div>
          </div>

          <div
            className={cn(
              styles.timelineDetailsWrapper,
              'font-unbounded',
              index === 3 ? '' : 'mb-[50px]',
            )}
          >
            <Image
              className={`${styles.timelineImg} ${styles.timelineImgMobile}`}
              src={event.img}
              alt={event.title}
            />

            <div className={styles.timelineDetails}>
              <h2>{event.id}</h2>
              <div className={styles.timelineDetailsContent}>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
