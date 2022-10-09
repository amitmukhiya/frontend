import data from '../utils/StackedBar.tsx';
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default function StackedChart() {
    return (
        <div>
            <div style={{width:'auto', border:'1px solid red', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <BarChart 
                width={650}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 20
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="NotWorking" stackId="a" fill="#8884d8" />
                <Bar dataKey="Working" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Meeting" stackId="a" fill="#2159" />
            </BarChart>
            </div>
        </div>
    );
}