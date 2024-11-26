import React from 'react';
import { motion } from 'framer-motion';

interface PolicyListProps {
  items: string[];
  delay?: number;
}

const PolicyList: React.FC<PolicyListProps> = ({ items, delay = 0 }) => {
  return (
    <ul className="mb-8 space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: delay + index * 0.1 }}
          className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 pl-6 relative"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
};

export default PolicyList;