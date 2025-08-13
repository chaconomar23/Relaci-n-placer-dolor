
import React from 'react';

export const AddictionCycleDiagram: React.FC = () => {
    return (
        <div className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Dashed circular path */}
                <path 
                    d="M 50,10 A 40,40 0 1,1 49.9,10" 
                    fill="none" 
                    stroke="#475569" 
                    strokeWidth="2" 
                    strokeDasharray="4 2"
                />
                {/* Arrowhead */}
                <path 
                    d="M 85 58 L 90 50 L 82 50 Z" 
                    fill="#0ea5e9"
                />
            </svg>
            <div className="absolute w-full h-full text-center text-sm text-slate-300">
                <div className="absolute top-[2%] left-1/2 -translate-x-1/2">
                    <span className="font-bold text-cyan-400">1. Placer</span>
                    <p className="text-xs text-slate-400">(Estímulo inicial)</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[2%]">
                    <span className="font-bold text-rose-400">2. Descenso</span>
                    <p className="text-xs text-slate-400">(Valle de dolor)</p>
                </div>
                 <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
                    <span className="font-bold text-rose-500">3. Búsqueda</span>
                    <p className="text-xs text-slate-400">(Craving intenso)</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[2%] text-left">
                    <span className="font-bold text-red-600">4. Mayor Descenso</span>
                    <p className="text-xs text-slate-400">(La línea base baja)</p>
                </div>
            </div>
        </div>
    );
};
