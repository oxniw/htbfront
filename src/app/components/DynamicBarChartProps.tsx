'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type ChartData = {
  [key: string]: string | number;
};

type DynamicBarChartProps = {
  data: ChartData[];
  xKey: string;
  yKey: string;
  xLabel?: string;
  yLabel?: string;
  barColor?: string;
};

export default function DynamicBarChart({
  data,
  xKey,
  yKey,
  xLabel = '',
  yLabel = '',
  barColor = '#4F46E5',
}: DynamicBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} label={{ value: xLabel, position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: yLabel, angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey={yKey} fill={barColor} />
      </BarChart>
    </ResponsiveContainer>
  );
}
