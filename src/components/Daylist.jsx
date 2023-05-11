



import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DayListItem from './DayListItem';
import data from '../data';

function DayList() {
  const [cards, setCards] = useState(data);

  const handleAddCardClick = () => {
    const newCard = {
      title: "New Day",
      doneText: "Done",
      notDoneText: "Not Done",
      items: [],
      type: "feature",
      checkboxText: "Completed"
    };
    setCards([...cards, newCard]);
  };

  const handleCardUpdate = (index, updatedCard) => {
    const updatedCards = [...cards];
    updatedCards[index] = updatedCard;
    setCards(updatedCards);
  };

  const handleCardDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="flex">
          <motion.button
            onClick={handleAddCardClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Add Card
          </motion.button>
          {cards.length > 0 && (
            <motion.button
              onClick={() => handleCardDelete(cards.length - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Delete Card
            </motion.button>
          )}
        </div>
      </div>
      <div className="mx-auto py-6 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <DayListItem
                  index={index}
                  {...card}
                  onUpdate={handleCardUpdate}
                  onDelete={() => handleCardDelete(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DayList;
