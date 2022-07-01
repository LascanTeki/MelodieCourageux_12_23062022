import '../Style/Duree.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '9',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];




export default class Example extends PureComponent {

  render() {

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].payload.pv}kg`}</p>
            <p className="label">{`${payload[0].payload.uv}Kcal`}</p>
          </div>
        );
      }
    }
    
    return (
      <div className='Duree'>
      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={data}
          margin={{
            top: 90,
            right: 10,
            left: 20,
            bottom: 25,
          }}
        >
          <text x={32} y={35} fill="#20253A" fontWeight="bold" dominantBaseline="central">
            <tspan fontSize="15">Activité quotidienne</tspan>
          </text>
          <CartesianGrid stroke="#DEDEDE" />
          <XAxis tick={{ fill: '#9B9EAC' }} dataKey="name" stroke="#DEDEDE" />
          <YAxis yAxisId="left" orientation="right" stroke="#9B9EAC" axisLine={false} tickCount={3} />
          <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" display="none" />
          <Tooltip contentStyle={{backgroundColor:"red"}} content={<CustomTooltip />}/>
          <Legend wrapperStyle={{ top: 25, right: 25 }} layout="horizontal" verticalAlign="top" align="right" iconSize="8px" formatter={(value, entry, index) => <span className="text-color-class">{value}</span>} payload={[{ type: "circle", value: "Poids (kg)", color: "#282D30" }, { type: "circle", value: "Calories brûlées (kCal)", color: "#E60000" }]} />
          <Bar yAxisId="left" dataKey="pv" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} maxBarSize={1}/>
          <Bar yAxisId="right" dataKey="uv" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} maxBarSize={1}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
