'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
        className="mb-8"
      >
        <Image
          src="/images/profile.jpg"
          alt="Koushal Sharma Profile"
          width={176}
          height={176}
          quality={70}
          className="size-44 rounded-full object-cover grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&#39;m{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Koushal Sharma
        </span>
        <span className="text-muted-foreground mt-2 block text-4xl font-medium">
          Backend Engineer with Full-Stack Expertise.
        </span>
      </motion.h1>

      {/* Typing animation is shown in the section divider above the About section */}

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        I am a recent Java developer trainee with certifications in Java, data
        structures, and software engineering fundamentals. I enjoy building
        reliable backend services with Java, learning frameworks like Spring
        Boot, and practicing clean code and testing. I am eager to apply my
        training in practical projects and continue growing as an engineer.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-2"
      >
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
          <a
            href="/cv/Koushal_Sharma_JavaDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/koushalshrma"
              aria-label="Linkedin"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://github.com/KoushalShrma"
              aria-label="Github"
              target="_blank"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.instagram.com/koushalshrma/"
              aria-label="Instagram"
              target="_blank"
            >
              <Icons.instagram className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://x.com/KOSLSHARMA"
              aria-label="Twitter"
              target="_blank"
            >
              <Icons.twitter className="size-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
