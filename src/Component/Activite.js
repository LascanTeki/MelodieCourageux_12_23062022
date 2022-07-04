import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../Style/Activite.css';

const data = [
  {
    name: '',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'A',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'G',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '',
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
          <div className="line-tooltip">
            <p className="label">{`${payload[0].payload.pv}`}</p>
          </div>
        );
      }
    }

    return (
      <div className='lower'>
        <div className='linetitle'> Durée moyenne des sessions</div>
        <ResponsiveContainer width="100%" height="65%" >
          <LineChart data={data} margin={{bottom: 25, top: 5}}>
          
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="white" />
              </linearGradient>
            </defs>
            <Line type="monotone" dataKey="pv" stroke="url(#colorUv)" strokeWidth={2} dot={false} activeDot={{ fill: 'white', stroke:'rgba(255,255,255,0.3', strokeWidth: 10, r: 4 }} />
            <Tooltip  content={<CustomTooltip />} cursor={false} />
            <XAxis dataKey="name" axisLine={false} width="5"  style={{ fill:'rgba(255,255,255,0.5)' }}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}