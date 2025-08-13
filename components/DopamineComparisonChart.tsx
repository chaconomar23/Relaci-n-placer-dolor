
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const data = [
  {
    name: 'Inmediata',
    dopamina: 100,
    sostenibilidad: 'Pico alto, caída brusca',
  },
  {
    name: 'Diferida',
    dopamina: 60,
    sostenibilidad: 'Pico moderado, eleva línea base',
  },
];

const colors = ['#f43f5e', '#22c55e'];

export const DopamineComparisonChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <BarChart 
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
          <YAxis label={{ value: 'Nivel Dopamina', angle: -90, position: 'insideLeft', fill: '#94a3b8', dy: 60 }} tick={{ fill: '#94a3b8' }} />
          <Tooltip 
             contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }}
             cursor={{fill: 'rgba(100, 116, 139, 0.1)'}}
          />
          <Legend wrapperStyle={{ color: '#94a3b8' }} />
          <Bar dataKey="dopamina" name="Pico de Dopamina" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
