import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  const colors = [
    'from-blue-500/20 to-blue-600/20 dark:from-blue-400/20 dark:to-blue-500/20',
    'from-purple-500/20 to-purple-600/20 dark:from-purple-400/20 dark:to-purple-500/20',
    'from-green-500/20 to-green-600/20 dark:from-green-400/20 dark:to-green-500/20',
    'from-rose-500/20 to-rose-600/20 dark:from-rose-400/20 dark:to-rose-500/20',
    'from-amber-500/20 to-amber-600/20 dark:from-amber-400/20 dark:to-amber-500/20',
    'from-cyan-500/20 to-cyan-600/20 dark:from-cyan-400/20 dark:to-cyan-500/20'
  ];

  const iconColors = [
    'text-blue-500 dark:text-blue-400',
    'text-purple-500 dark:text-purple-400',
    'text-green-500 dark:text-green-400',
    'text-rose-500 dark:text-rose-400',
    'text-amber-500 dark:text-amber-400',
    'text-cyan-500 dark:text-cyan-400'
  ];

  const randomGradient = colors[Math.floor(Math.random() * colors.length)];
  const randomColor = iconColors[Math.floor(Math.random() * iconColors.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center text-center relative"
      >
        <motion.div
          className={`mb-6 p-6 rounded-full bg-gradient-to-br ${randomGradient} relative group`}
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className={`w-8 h-8 ${randomColor}`} />
          </motion.div>
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProcessStep;