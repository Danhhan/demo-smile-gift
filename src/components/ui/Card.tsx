'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  variant = 'default',
  hoverEffect = true,
  onClick,
}: CardProps) {
  const cardClasses = classNames(
    'rounded-lg overflow-hidden transition-all duration-300',
    {
      'bg-white shadow-md': variant === 'default',
      'border border-neutral-200 bg-white': variant === 'outlined',
      'bg-white shadow-lg': variant === 'elevated',
      'hover:shadow-lg cursor-pointer': hoverEffect && onClick,
    },
    className
  );
  
  return (
    <motion.div
      className={cardClasses}
      whileHover={hoverEffect ? { y: -5 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}