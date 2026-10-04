import React from 'react';
import { FaDumbbell } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0b0c10] border-t border-gray-800/60 py-6 px-4 sm:px-8 text-white">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <FaDumbbell className="w-5 h-5 text-[#ccff00]" />
                    <h2 className="font-extrabold text-lg tracking-wider text-white uppercase">
                        Fitlog
                    </h2>
                </div>

                <p className="text-xs text-gray-400 font-medium text-center sm:text-right">
                    © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;