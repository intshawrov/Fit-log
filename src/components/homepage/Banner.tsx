import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/banner.png'
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const Banner = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto bg-[#15171D] p-6 sm:p-10 md:p-14 my-8 md:my-12 border border-[#222630] rounded-2xl '>
            <div>
                <p className='text-[#A3E635] text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase mb-2 md:mb-3'>WORKOUT LIBRARY</p>
                <h1 className={`${oswald.className} text-white text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight mb-4 max-w-2xl`}>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='text-[#9CA3AF] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button className="bg-[#C2F800] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#b0e200] transition duration-200 text-sm md:text-base">BROWSE WORKOUTS</button>
            </div>

            <div>
                <Image src={bannerImage} alt='Banner Image'/>
            </div>
        </section>
    );
};

export default Banner;