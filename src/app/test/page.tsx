'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { score: 0, people: 2 },
  { score: 1, people: 4 },
  { score: 2, people: 6 },
  { score: 3, people: 8 },
  { score: 4, people: 3 },
  { score: 5, people: 10 },
  { score: 6, people: 5 },
  { score: 7, people: 1 },
  { score: 8, people: 0 },
  { score: 9, people: 2 },
  { score: 10, people: 7 },
];

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="score" label={{ value: 'คะแนน', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'จำนวนคน', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="people" fill="#4F46E5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
