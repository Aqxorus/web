'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './style.module.scss';
import {
  motion,
  useMotionValue,
  useSpring,
  MotionValue,
  SpringOptions
} from 'motion/react';

interface MouseMoveEvent {
  clientX: number;
  clientY: number;
}

interface Distance {
  x: number;
  y: number;
}

export default function Cursor() {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorSize = isPressed ? 21 : 15;
  const [isVisible, setIsVisible] = useState(false);
  const [currentMousePos, setCurrentMousePos] = useState({ x: 0, y: 0 });

  const mouse: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions: SpringOptions = {
    damping: 15,
    stiffness: 500,
    mass: 0.3
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageResize = () => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) {
      setIsVisible(false);
      return;
    }
  };

  const manageMouseMove = (e: MouseMoveEvent) => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) {
      setIsVisible(false);
      return;
    }
    if (!isVisible) setIsVisible(true);

    const { clientX, clientY } = e;
    setCurrentMousePos({ x: clientX, y: clientY });
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  const manageMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 2) return;

    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    window.addEventListener('resize', manageResize);

    document.body.addEventListener('mouseleave', manageMouseLeave, {
      passive: true
    });
    window.addEventListener('mousemove', manageMouseMove, {
      passive: true
    });
    window.addEventListener('mousedown', handleMouseDown, {
      passive: true
    });
    window.addEventListener('mouseup', handleMouseUp, {
      passive: true
    });

    return () => {
      window.removeEventListener('resize', manageResize);

      window.removeEventListener('mouseleave', manageMouseLeave);
      window.removeEventListener('mousemove', manageMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        transition={{
          width: { type: 'spring', stiffness: 500, damping: 30 },
          height: { type: 'spring', stiffness: 500, damping: 30 }
        }}
        className={`${styles.cursor} ${
          isVisible ? styles.visible : styles.hidden
        }`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}
