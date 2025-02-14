import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TypingEffect from "../components/TypingEffect";
import WrongModal from "../components/WrongModal";
import CorrectModal from "../components/CorrectModal";
export default function Home() {
  const [showButtons, setShowButtons] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Menunda tampilan tombol lebih dari 3 detik
    setTimeout(() => {
      setShowButtons(true);
    }, 5000); // Delay 5 detik
  }, []);

  return (
    <div className="flex justify-center bg-red-200 h-screen">
      <div className="flex flex-col justify-center">
        <TypingEffect onAnimationComplete={() => console.log("Animasi selesai!")} />

        {/* Tombol hanya muncul setelah 5 detik */}
        {showButtons && (
          <div className="flex justify-center gap-5 mt-10" data-aos="fade-up">
            <button onClick={() => setShowWrongModal(true)}
            className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
              Jum'at
            </button>
            <button
            onClick={() => setShowCorrectModal(true)} 
            className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-pink-300  duration-500 before:duration-500 hover:duration-500 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-pink-300 origin-left hover:decoration-2 hover:text-pink-900 relative bg-pink-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-pink-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-pink-600 after:right-8 after:top-3 after:rounded-full after:blur">
              Valentine
            </button>
          </div>
        )}
      </div>

        <WrongModal isOpen={showWrongModal} onClose={() => setShowWrongModal(false)} text="Salah Sayangg" secondText="Coba lagi yang benerrr, kalo jawab ini lagi aku gigit"/>
        <CorrectModal isOpen={showCorrectModal} onClose={() => setShowCorrectModal(false)} />
  
    </div>
  );
}
