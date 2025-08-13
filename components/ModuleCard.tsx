
import React from 'react';

interface ModuleCardProps {
    children: React.ReactNode;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ children }) => {
    return (
        <section className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 md:p-8 backdrop-blur-lg">
            {children}
        </section>
    );
};
