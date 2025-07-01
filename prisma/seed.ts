import { Prisma } from '@prisma/client';
import { prisma } from './prisma-client';

type TagsDataType = {
  products: Prisma.ProductTagCreateInput[];
  controls: Prisma.ControlTagCreateInput[];
  workTypes: Prisma.WorkTypeTagCreateInput[];
};

const caseData: Prisma.CaseCreateInput[] = [
  {
    title: 'Название кейса 1',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 120000,
    date: 'Март 2025',
    category: 'APARTMENT',
  },
  {
    title: 'Название кейса 2',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 85000,
    date: 'Апрель 2025',
    category: 'HOUSE',
  },
  {
    title: 'Название кейса 3',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 99000,
    date: 'Май 2025',
    category: 'COMERCIAL',
  },
  {
    title: 'Название кейса 4',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 105000,
    date: 'Июнь 2025',
    category: 'APARTMENT',
  },
  {
    title: 'Название кейса 5',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 97000,
    date: 'Июль 2025',
    category: 'HOUSE',
  },
  {
    title: 'Название кейса 6',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 112000,
    date: 'Август 2025',
    category: 'COMERCIAL',
  },
  {
    title: 'Название кейса 7',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 89000,
    date: 'Сентябрь 2025',
    category: 'APARTMENT',
  },
  {
    title: 'Название кейса 8',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 125000,
    date: 'Октябрь 2025',
    category: 'HOUSE',
  },
  {
    title: 'Название кейса 9',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 91000,
    date: 'Ноябрь 2025',
    category: 'COMERCIAL',
  },
  {
    title: 'Название кейса 10',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 118000,
    date: 'Декабрь 2025',
    category: 'APARTMENT',
  },
  {
    title: 'Название кейса 11',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 100000,
    date: 'Январь 2025',
    category: 'HOUSE',
  },
  {
    title: 'Название кейса 12',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 87000,
    date: 'Февраль 2025',
    category: 'COMERCIAL',
  },
  {
    title: 'Название кейса 13',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 109000,
    date: 'Март 2024',
    category: 'APARTMENT',
  },
  {
    title: 'Название кейса 14',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 93000,
    date: 'Апрель 2024',
    category: 'HOUSE',
  },
  {
    title: 'Название кейса 15',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 115000,
    date: 'Май 2024',
    category: 'COMERCIAL',
  },
  {
    title: 'Название кейса 16',
    img: 'https://avatars.mds.yandex.net/get-altay/5449402/2a0000017f494ef687a578c34865cc1c6518/XXL_height',
    price: 101000,
    date: 'Июнь 2024',
    category: 'HOUSE',
  },
];

const tagsData: TagsDataType = {
  products: [
    { label: 'Раздвижные' },
    { label: 'Римские' },
    { label: 'Плиссе' },
    { label: 'Жалюзи горизонтальные' },
    { label: 'Пергола (зимний сад)' },
  ],
  controls: [
    { label: 'Алиса' },
    { label: 'Пульт' },
    { label: 'Смартфон' },
    { label: 'Выключатели' },
  ],
  workTypes: [
    { label: 'Изготовление карнизов' },
    { label: 'Установка карнизов' },
    { label: 'Настройка карнизов' },
    { label: 'Развешивание штор' },
  ],
};

const roomsData: Prisma.RoomCreateInput[] = [
  {
    title: 'Гостиная',
    subTitle: 'Рулонная штора с электроприводом',
    description:
      'Рулонные шторы с электроприводом, управляются через смартфон и Алисой. Светопропускаемость 30%.',
    images: [
      'https://optim.tildacdn.com/tild6135-3636-4262-b761-363435386435/-/contain/860x582/center/center/-/format/webp/_2.jpg',
      'https://optim.tildacdn.com/tild3432-3033-4961-a562-336266366135/-/format/webp/photo.jpg',
      'https://static.tildacdn.com/tild3362-3163-4365-b330-666136396634/IMG_1081_2JPG.jpg',
      'https://static.tildacdn.com/tild3435-3334-4266-a131-643638343930/IMG_1033_2JPG.jpg',
      'https://static.tildacdn.com/tild3839-3061-4337-b236-316131656239/photo.png',
      'https://static.tildacdn.com/tild3566-3961-4134-a538-366461643262/photo.jpg',
    ],
    case: {
      connect: { id: 1 },
    },
  },
  {
    title: 'Спальня',
    subTitle: 'Трековые шторы и подсветка',
    description:
      'Тканевые панели на треке, встроенная LED-подсветка. Управление через пульт.',
    images: [
      'https://optim.tildacdn.com/tild6135-3636-4262-b761-363435386435/-/contain/860x582/center/center/-/format/webp/_2.jpg',
      'https://optim.tildacdn.com/tild3432-3033-4961-a562-336266366135/-/format/webp/photo.jpg',
      'https://static.tildacdn.com/tild3362-3163-4365-b330-666136396634/IMG_1081_2JPG.jpg',
      'https://static.tildacdn.com/tild3435-3334-4266-a131-643638343930/IMG_1033_2JPG.jpg',
      'https://static.tildacdn.com/tild3839-3061-4337-b236-316131656239/photo.png',
      'https://static.tildacdn.com/tild3566-3961-4134-a538-366461643262/photo.jpg',
    ],
    case: {
      connect: { id: 1 },
    },
  },
  {
    title: 'Кухня',
    subTitle: 'Плиссе с ручным управлением',
    description: 'Компактные плиссе-шторы для кухни. Просты в использовании и уходе.',
    images: [
      'https://optim.tildacdn.com/tild6135-3636-4262-b761-363435386435/-/contain/860x582/center/center/-/format/webp/_2.jpg',
      'https://optim.tildacdn.com/tild3432-3033-4961-a562-336266366135/-/format/webp/photo.jpg',
      'https://static.tildacdn.com/tild3362-3163-4365-b330-666136396634/IMG_1081_2JPG.jpg',
      'https://static.tildacdn.com/tild3435-3334-4266-a131-643638343930/IMG_1033_2JPG.jpg',
      'https://static.tildacdn.com/tild3839-3061-4337-b236-316131656239/photo.png',
      'https://static.tildacdn.com/tild3566-3961-4134-a538-366461643262/photo.jpg',
    ],
    case: {
      connect: { id: 2 },
    },
  },
];

export async function up() {
  for (const c of caseData) {
    await prisma.case.create({ data: c });
  }

  for (const c of roomsData) {
    await prisma.room.create({ data: c });
  }

  for (const product of tagsData.products) {
    await prisma.productTag.upsert({
      where: { label: product.label },
      update: {},
      create: product,
    });
  }
  for (const control of tagsData.controls) {
    await prisma.controlTag.upsert({
      where: { label: control.label },
      update: {},
      create: control,
    });
  }
  for (const workType of tagsData.workTypes) {
    await prisma.workTypeTag.upsert({
      where: { label: workType.label },
      update: {},
      create: workType,
    });
  }
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Case" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
