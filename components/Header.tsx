
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10 py-6 border-b border-slate-800">
            <div className="container mx-auto text-center px-4 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                    Relación Placer–Dolor
                </h1>
                <p className="mt-2 text-lg md:text-xl text-slate-400">
                    Un Enfoque Psicológico y Neuropsicológico para una Vida Equilibrada
                </p>
            </div>
        </header>
    );
};
