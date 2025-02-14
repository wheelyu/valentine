const ButtonModal = ({ text, emoji, color1, color2, color3, onClick }) => {
    return (
        <>
        <button onClick={onClick} className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">  
            <p className="text-sm">{text}</p>
          <span className={`absolute w-36 h-32 -top-8 -left-2 ${color1} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right`} />
          <span className={`absolute w-36 h-32 -top-8 -left-2 ${color2} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right`} />
          <span className={`absolute w-36 h-32 -top-8 -left-2 ${color3} rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right`} />
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-10 text-3xl z-10">
            {emoji}
          </span>
        </button>
      </>
      

    );
}

export default ButtonModal