import CountUp from './CountUp'
import DecayCard from './DecayCard';
import BlobCursor from './BlobCursor'
import Anniversary from "../assets/anniversary.jpg";
const Count = () => {
    return (
        <div className='min-h-screen'>
            <BlobCursor />
        <div className='text-6xl text-white flex flex-row items-center justify-center gap-3 '>
            <p>We Just Hit</p>
            <div className="text-6xl text-white bg-pink-300 w-fit p-4 rounded-xl">
                <CountUp
                    from={24}
                    to={376}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                    startWhen={true}
                />
            </div>
            <p>Days</p>
            <p className='text-sm text-yellow-300'>Unbelievable Number right?</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <DecayCard width={500} height={700} image={Anniversary}>
            <h2 className='text-white text-6xl'>The<br/>Anniversary</h2>
            </DecayCard>
        </div>
        </div>
    );
};

export default Count;