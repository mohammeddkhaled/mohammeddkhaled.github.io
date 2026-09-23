import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScreenshotGallery({ screenshots, title }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!screenshots || screenshots.length === 0) return null;

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {screenshots.map((shot, idx) => (
          <div 
            key={idx}
            onClick={() => openLightbox(idx)}
            className={`relative group rounded-2xl overflow-hidden border border-white/5 cursor-pointer bg-midnight-950 aspect-[16/10] ${
              idx === 0 && screenshots.length % 2 !== 0 && screenshots.length !== 1 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <img 
              src={shot} 
              alt={`${title} screenshot ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-950/95 backdrop-blur-xl p-4 md:p-8"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-pearl-100 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            
            {screenshots.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-pearl-100 transition-colors z-50 hidden md:block"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-pearl-100 transition-colors z-50 hidden md:block"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={screenshots[selectedImage]} 
              alt={`${title} enlarged`} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
