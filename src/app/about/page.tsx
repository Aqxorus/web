'use client';
import TextReveal from '@/components/motion/text-reveal';

import React from 'react';
import { ChevronDown, MailIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Reveal from '@/components/reveal';

import SkillCard from '@/app/about/_components/skill-card';
import { skills } from '@/components/sections/skills/config';
import { Footer } from '@/components/sections';
import ContactForm from '@/components/sections/contact/cozy/contact-form';
import { contact } from '@/components/sections/contact/config';

import Link from '@/components/motion/link';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
        <section className="flex h-[calc(100svh-theme(spacing.14))] items-center pb-12">
          <div className="container relative mx-auto flex flex-col items-center px-4">
            <h1 className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <Reveal>Enthusiast</Reveal>
            </h1>
            <h1 className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <Reveal>Developer</Reveal>
            </h1>
            <motion.div
              className="mt-8"
              style={{ opacity }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </div>
        </section>

        <Separator />
        <section className="py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold sm:text-2xl">about</h2>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="space-y-8">
                <h3 className="font-serif text-3xl leading-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <TextReveal>
                    A software developer, designer, and computer ethausiast
                  </TextReveal>
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
                  <TextReveal>
                    I am Ev4n, a passionate software developer and designer from
                    New Zealand. I have extensive experience in both front-end
                    and back-end development, enabling me to create engaging
                    user experiences. My passion for technology stems from a
                    desire to constantly learn and grow.
                  </TextReveal>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />
        <section className="py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold sm:text-2xl">skills</h2>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={`skill_${index}`}
                    index={index + 1}
                    name={skill.name}
                    description={skill.description}
                    thumbnail={skill.thumbnail}
                    className="flex rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator />
        <section className="py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold sm:text-2xl">contact</h2>
              <div className="mt-2 flex flex-col gap-1">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'h-min w-min p-0 text-sm font-normal sm:text-base md:text-lg'
                  )}
                  href={`mailto:${contact.email}`}
                >
                  <MailIcon className="h-4 w-4" />
                  {contact.email}
                </Link>
                {contact.socials.map(({ Icon, name, href }, index) => (
                  <Link
                    target="_blank"
                    href={href}
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'h-min w-min gap-1 p-0 text-sm sm:text-base md:text-lg'
                    )}
                    key={`contact-social_${index}`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-1 md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
