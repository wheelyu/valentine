import Aurora from "./Aurora";
import TextPressure from "./TextPressure";
const Hero = () => {
    return (
        <div data-aos="fade-down">
        <div className="flex justify-center h-[200px] ">

          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            speed={0.5}
          />
    
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mb-6 sm:mb-8 md:mb-10 mt-56">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center text-whit">
        <div className="relative lg:h-[300px] h-[100px]">
            <TextPressure
            text="Welcome to Our Gallery"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
            />
            </div>
        </h1>
    </div>
    </div>
    )

}

export default Hero