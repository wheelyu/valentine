import Hero from "../components/Hero";
import CircularGallery from '../components/CircularGallery'
import BlurText from "../components/BlurText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Masonry from "../components/Masonry";
import { galleryData } from "../components/GalleryData";
import LogoWall from "../components/Logowall";
import { sliderImg } from "../components/SliderImg";
import Count from "../components/Count";
import FallingText from "../components/FallingText";
import TrueFocus from "../components/TrueFocus";
import Magnet from "../components/Magnet";
import { Gift } from "lucide-react";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-in-out", // Efek easing animasi
      once: false, // Hanya animasi saat pertama kali scroll
    });
  }, []);
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <div className="flex justify-center items-center h-[300px]">
      <BlurText
        text="Looks like there's even more!?"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-6xl mb-8 text-white"
        data-aos="fade-up"
      />
      </div>
      <Masonry data={galleryData} />
      <div style={{height: '500px', width: '100%', position: 'relative'}}>
        <LogoWall
          items={sliderImg}
          direction='horizontal'
          size='300px'
          duration='60s'
          bgColor='#060606'
          bgAccentColor='#111111'
        />  
      </div>
      <Count />
      <div className="flex justify-center items-center h-[300px] w-1/2 mx-auto text-white bg-[#060606] rounded-xl">
      <FallingText
        text={`If love were a journey, Id walk every path with you. If love were a song, Id sing every note for you. But love is you, and I am forever yours`}
        highlightWords={["love", "walk", "path", "forever", "note"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
      </div>
      <div className="flex flex-col justify-center items-center h-[200px] w-1/2 mx-auto text-white rounded-xl">
        jadi kamu suka atau engga?  
        <TrueFocus 
          sentence="Suka engga"
          manualMode={true}
          blurAmount={5}
          borderColor="cyan"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
          />
          
      </div>
          <div className="flex justify-center items-center h-[100px] w-1/2 mx-auto text-white   rounded-xl">
          <>
            <button className="group w-12 hover:w-56 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
              <Gift className="w-6 h-6 shrink-0" />
              <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                Ambil hadiah Kamu
              </span>
            </button>
          </>

          </div>
    </div>
  );
}
