import { Variants } from 'motion/react';

export const titleAnimation: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.003
    }
  },
  hover: {
    transition: {
      staggerChildren: 0.003
    }
  }
};

export const letterAnimation: Variants = {
  rest: {
    y: 0
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween' as const
    }
  }
};

export const letterAnimationTwo: Variants = {
  rest: {
    y: 30
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween' as const
    }
  }
};
