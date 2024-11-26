import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  const colors = [
    'text-blue-500 dark:text-blue-400',
    'text-purple-500 dark:text-purple-400',
    'text-green-500 dark:text-green-400',
    'text-rose-500 dark:text-rose-400',
    'text-amber-500 dark:text-amber-400',
    'text-cyan-500 dark:text-cyan-400'
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <motion.div 
          className="mb-4"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className={`w-8 h-8 ${randomColor}`} />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;