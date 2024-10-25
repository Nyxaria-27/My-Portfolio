'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>PHP, Laravel</li>
        <li>Next.js, Tailwind</li>
        <li>HTML</li>
        <li>CSS, SCSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java, C, C++</li>
        <li>SQL</li>
        <li>Bootstrap, Framer Motion</li>
        <li>Adobe Illustrator, Photoshop, Premiere Pro, After Effects</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          <strong>SMK Negeri 21 Jakarta Pusat</strong>
          <br />
          Major: Software and Game Development (PPLG) <br />
          Focus: Web and Mobile Development, Game Development
        </li>
        <li>
          <strong>Math and Numeracy Competitions</strong>
          <br />
          Participated in several competitions that enhanced logical and
          computational thinking skills.
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          <strong>TOEIC</strong>: Score 400+
        </li>
        <li>
          <strong>Indonesian Language Competency Test</strong>: Score 651,
          categorized as <strong>Excellent Proficiency</strong>
        </li>
        <li>
          <strong>Web Development Training</strong>: Specializing in{' '}
          <strong>Laravel</strong>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className='text-black dark:text-white bg-white dark:bg-[#18191E]'
      id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/about-image.png'
          width={500}
          height={500}
          alt='About me image'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-black dark:text-white mb-4'>
            About Me
          </h2>
          <p className='text-base lg:text-lg text-gray-800 dark:text-gray-300'>
            <em>
              &quot;Hi, I&lsquo;m <strong>Dwi Wahyu Ramadhan</strong>, a student
              at <strong>SMK Negeri 21 Jakarta</strong> Pusat majoring in{' '}
              <strong>Software and Game Development (PPLG)</strong>. I
              specialize in{' '}
              <strong>
                web and mobile software development, with a focus on game
                creation
              </strong>
              . As a <strong>creative problem solver</strong>, I leverage my
              strong <strong>logical thinking and mathematical</strong>{' '}
              expertise to tackle challenges efficiently. I have a proven
              ability to quickly learn and retain new concepts.&quot;
            </em>
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}>
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
