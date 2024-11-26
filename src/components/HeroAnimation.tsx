import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Code2, Rocket, Heart } from 'lucide-react';

const HeroAnimation = () => {
  const icons = [Star, Sparkles, Code2, Rocket, Heart];
  const colors = [
    'text-blue-500/30 dark:text-blue-400/30',
    'text-purple-500/30 dark:text-purple-400/30',
    'text-green-500/30 dark:text-green-400/30',
    'text-rose-500/30 dark:text-rose-400/30',
    'text-amber-500/30 dark:text-amber-400/30',
    'text-cyan-500/30 dark:text-cyan-400/30'
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark opacity-50" />
        
        {/* Animated shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-500/5 to-cyan-500/5 dark:from-green-400/5 dark:to-cyan-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-rose-500/5 to-amber-500/5 dark:from-rose-400/5 dark:to-amber-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [-45, 45, -45],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating icons */}
        {Array.from({ length: 30 }).map((_, i) => {
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              className={`absolute ${color}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.2, 1],
                opacity: [0, 1, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>
          );
        })}

        {/* Larger accent icons */}
        {Array.from({ length: 5 }).map((_, i) => {
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={`large-${i}`}
              className={`absolute ${color}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.5, 1],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HeroAnimation;