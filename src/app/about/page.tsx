'use client';
import TextReveal from '@/components/motion/text-reveal';

import React from 'react';
import Line from '@/components/motion/line';
import Link from '@/components/motion/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import { contact } from '@/components/sections/contact/config';

export default function About() {
  // const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // todo: add ability for different variants of about page

  return (
    <main className="my-24 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
            <TextReveal delay={0.1}>
              a young tech enthusiast who loves to code and build stuff
            </TextReveal>
          </h1>
          <Line className={'mb-10 mt-10'} />
          <div className="flex w-full flex-col items-start gap-1">
            {' '}
            {/* Add w-full and items-start */}
            {contact.socials.map(({ Icon, name, href }, index) => (
              <Link
                target="_blank"
                href={href}
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'text-md h-min w-min gap-1 p-0 text-xl font-normal'
                )}
                key={`contact-social_${index}`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/*<motion.div*/}
        {/*  className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"*/}
        {/*  style={{ opacity }}*/}
        {/*  animate={{ y: [0, 10, 0] }}*/}
        {/*  transition={{ duration: 1.5, repeat: Infinity }}*/}
        {/*>*/}
        {/*  <ChevronDown className="h-8 w-8" />*/}
        {/*</motion.div>*/}
      </section>
      {/*<section*/}
      {/*  className="relative flex min-h-[calc(50dvh)] items-center justify-center bg-foreground text-background"*/}
      {/*  id="skills"*/}
      {/*>*/}
      {/*  <div className="flex flex-col items-center md:max-w-7xl">*/}
      {/*    <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">*/}
      {/*      <TextReveal delay={0.1}>*/}
      {/*        A young tech enthusiast who loves to code*/}
      {/*      </TextReveal>*/}
      {/*    </h1>*/}
      {/*    <Line*/}
      {/*      className={'mt-16'}*/}
      {/*      borderColor={'text-muted-foreground/50'}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  /!*<motion.div*!/*/}
      {/*  /!*  className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"*!/*/}
      {/*  /!*  style={{ opacity }}*!/*/}
      {/*  /!*  animate={{ y: [0, 10, 0] }}*!/*/}
      {/*  /!*  transition={{ duration: 1.5, repeat: Infinity }}*!/*/}
      {/*  /!*>*!/*/}
      {/*  /!*  <ChevronDown className="h-8 w-8" />*!/*/}
      {/*  /!*</motion.div>*!/*/}
      {/*</section>*/}
    </main>
  );
}
