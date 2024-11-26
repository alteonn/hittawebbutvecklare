import React from 'react';
import { motion } from 'framer-motion';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-16 last:mb-0"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      {children}
    </motion.section>
  );
};

export default PolicySection;