import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Gift from './gift';
import ButtonModal from './buttonModal';
import AnotherWrongModal from './AnotherWrongModal';
import { useNavigate } from 'react-router-dom';
import { nav } from 'framer-motion/client';
const CorrectModal = ({ isOpen }) => {
    const [firstText, setFirstText] = useState(true);
    const [secondText, setSecondText] = useState(false);
    const [thirdText, setThirdText] = useState(false);
    const [showWrongModal, setShowWrongModal] = useState(false);
    const [words, setWords] = useState('');
    const [secondWords, setSecondWords] = useState('');

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setFirstText(false);
                setSecondText(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (secondText) {
            const timer = setTimeout(() => {
                setSecondText(false);
                setThirdText(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [secondText]);
    const navigate = useNavigate();
    const handleNavigation = () => {
        setShowWrongModal(true);
        setWords('Menujuu');
        setSecondWords('Gallery');
        setTimeout(() => {
            navigate('/gallery');
        }, 3000);
    }
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotate: 360 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0.5, opacity: 0, rotate: 360 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="bg-white p-4 rounded-lg shadow-lg min-w-64"
                        >
                            {/* Rest of your modal content */}
                            <AnimatePresence mode="wait">
                                {firstText && (
                                    <motion.div
                                        key="first"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-lg font-semibold mb-2">Betulllll!🎉</p>
                                        <p className="text-gray-600">Bebebb kerenn dechhh</p>
                                        <motion.div
                                            initial={{ width: "100%" }}
                                            animate={{ width: 0 }}
                                            transition={{ duration: 3, ease: "linear" }}
                                            className="h-2 bg-green-600 rounded-lg mt-2"
                                        />
                                    </motion.div>
                                )}

                                {secondText && (
                                    <motion.div
                                        key="second"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-lg font-semibold mb-2">Karena bebebbb sudah benar! 🌟</p>
                                        <p className="text-gray-600">Aku mau kasih sesuatuuu!</p>
                                        <motion.div
                                            initial={{ width: "100%" }}
                                            animate={{ width: 0 }}
                                            transition={{ duration: 3, ease: "linear" }}
                                            className="h-2 bg-green-600 rounded-lg mt-2"
                                        />
                                    </motion.div>
                                )}

                                {thirdText && (
                                    <motion.div
                                        key="third"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-lg font-semibold text- mb-2">Bebeb Dapet Hadiahhhhh!</p>
                                        <Gift/>
                                        <div className="flex justify-center gap-5 mt-10">
                                            <ButtonModal 
                                                text="Buang" 
                                                emoji="😫" 
                                                color1="bg-red-200"
                                                color2="bg-red-400"
                                                color3="bg-red-600" 
                                                onClick={() => {
                                                    setShowWrongModal(true);
                                                    setWords('Beneran mau di buang?');
                                                    setSecondWords('coba lagi yang bener ah!');
                                                }}
                                            />
                                            <ButtonModal 
                                                text="Ga butuh" 
                                                emoji="😖" 
                                                color1="bg-orange-200"
                                                color2="bg-orange-400"
                                                color3="bg-orange-600" 
                                                onClick={() => {
                                                    setShowWrongModal(true);
                                                    setWords('aslii kamu butuhnya apaa?');
                                                    setSecondWords('coba lagi yang bener ah!');
                                                }}
                                            />
                                            <ButtonModal text="Buka skrg!!!" emoji="🥰" color1="bg-green-200" color2="bg-green-400" color3="bg-green-600" onClick={handleNavigation}/>
                                            <ButtonModal 
                                                text="nasi goreng" 
                                                emoji="🤤" 
                                                color1="bg-sky-200"
                                                color2="bg-sky-400"
                                                color3="bg-sky-600" 
                                                onClick={() => {
                                                    setShowWrongModal(true);
                                                    setWords('Laper kali ya?');
                                                    setSecondWords('coba lagi yang bener ah!');
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnotherWrongModal 
                isOpen={showWrongModal} 
                onClose={() => setShowWrongModal(false)} 
                text={words} 
                secondText={secondWords} 
            />
        </>
    );
};

export default CorrectModal;