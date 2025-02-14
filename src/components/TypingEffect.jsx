import { TypeAnimation } from "react-type-animation";

const TypingEffect = ({ onAnimationComplete }) => {


  return (
    <div className="text-3xl font-bold">
    <TypeAnimation
      sequence={[
        "Halo, Bebebbbbb!", // Ketik teks pertama
        1000, // Tunggu 1 detik
        "Kamu tau kannn sekraagn hrai ap",
        500,
        "Kamu tau kannn sekarang hari apaaa?",
        3000,
        "Kamu tau kan sekarang hari apa? Lama woi", // Ketik teks kedua
      ]}
      speed={50} // Kecepatan mengetik (ms per karakter)
      onFinish={onAnimationComplete} // Callback saat animasi selesai
    />
    </div>
  );
};

export default TypingEffect;
