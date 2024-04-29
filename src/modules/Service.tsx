import ServiceItem from '@/components/ServiceItem';
import SubLine from '@/components/subLine/SubLine';
import Title from '@/components/title/Title';
import React from 'react';

const Service = () => {
  return (
    <div className={`container text-center`}>
      <Title>{"What I'm Doing"}</Title>
      <SubLine className='sm:mx-6'>I love what i do, i take a great pride in what i do</SubLine>
      <div className='mx-auto w-full max-w-[180px] h-[0.5px] bg-black mt-6 mb-12'></div>
      <div className='grid grid-cols-3 gap-x-5 sm:grid-cols-1 sm:gap-y-5 md:grid-cols-2 md:gap-y-5 place-items-center'>
        {services.map(item => (
          <ServiceItem key={item.serviceName} item={item}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    serviceName: 'WEB デベロッパー',
    desc: 'フロントエンドを中心でReactとFirebaseで各画面で対応できる色々なサイトを開発しています',
    imagePath: '/assets/Coding.png'
  },
  {
    serviceName: 'モバイル デベロッパー',
    desc: 'それと同時にReactNativeでシンプルなアプリもやっていて。自分が好きなアプリを開発しています',
    imagePath: '/assets/Developer.png'
  },
  {
    serviceName: 'UI/UX デザイナー',
    desc: 'シンプルで誰でも使いやすいWEBアプリとモバイルアプリのデザインをやっています',
    imagePath: '/assets/WebDesign.png'
  },
]

export default Service;