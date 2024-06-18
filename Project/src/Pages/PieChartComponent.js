import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Make New Mobile Applications', value: 240 },
  { name: 'Job Applications', value: 320 },
  { name: 'Social Media Campaign		', value: 220 },
  { name: 'Live Event Campaign		', value: 240 },
  { name: 'Electronic Item Sell Campaign	', value: 210 },
  { name: 'sell Home Loan campaign	', value: 110 }
];

const COLORS = ['#00C49F', '#ae7c83', '#4c068b', '#eaeaea', '4c068b',];

const PieChartComponent = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
