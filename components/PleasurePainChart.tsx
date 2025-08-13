
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';

const data = [
  { name: 'Inicio', valor: 0 },
  { name: 'Estímulo', valor: 8 },
  { name: 'Pico Placer', valor: 10 },
  { name: 'Adaptación', valor: 2 },
  { name: 'Fin Estímulo', valor: 0 },
  { name: 'Valle Dolor', valor: -5 },
  { name: 'Recuperación', valor: -1 },
  { name: 'Equilibrio', valor: 0 },
];

export const PleasurePainChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} fontSize={12} />
          <YAxis domain={[-6, 12]} tick={{ fill: '#94a3b8' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }}
            labelStyle={{ color: '#94a3b8' }}
          />
          <ReferenceLine y={0} stroke="#64748b" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="colorPlacer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorDolor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0}/>
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="valor" stroke="#8884d8" fill="url(#colorPlacer)" fillOpacity={1} />
           <Area type="monotone" dataKey="valor" stroke="#f43f5e" fill="url(#colorDolor)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
