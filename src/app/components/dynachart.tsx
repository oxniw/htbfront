"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface MyResponsiveLineChartProps {
  datas: { [key: string]: string | number }[]; 
  xKey: string;         
  lineKeys: string[];   
  colors?: string[];    
}

export default function MyResponsiveLineChart({
  datas,
  xKey,
  lineKeys,
  colors = ["#8884d8", "#82ca9d", "#ffc658"],
}: MyResponsiveLineChartProps) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          {lineKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
