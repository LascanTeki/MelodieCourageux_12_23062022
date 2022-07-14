import '../Style/Activite.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
  * Component for generating a chart with activity of the user.
  * @param {*} props 
  * @component
  * @extends {PureComponent}
 */
export default class Example extends PureComponent {

  render() {

    //Changes day to the last caracters in itself, corresponding to the day instead of the full date
    let dat = this.props.act.data.sessions.map((perf) => {
      return {
        day: perf.day.slice(-1),
        kilogram: perf.kilogram,
        calories: perf.calories,
      }
    })

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].payload.kilogram}kg`}</p>
            <p className="label">{`${payload[0].payload.calories}Kcal`}</p>
          </div>
        );
      }
    }

    return (
      <div className='Duree'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dat} margin={{ top: 90, right: 10, left: 20, bottom: 25 }}>
            <text x={32} y={35} fill="#20253A" fontWeight="bold" dominantBaseline="central">
              <tspan fontSize="15">Activité quotidienne</tspan>
            </text>
            <CartesianGrid stroke="#DEDEDE" />
            <XAxis tick={{ fill: '#9B9EAC' }} dataKey="day" stroke="#DEDEDE" />
            <YAxis yAxisId="left" dataKey="kilogram" orientation="right" stroke="#9B9EAC" axisLine={false} tickCount={3} />
            <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" display="none" />
            <Tooltip contentStyle={{ backgroundColor: "red" }} content={<CustomTooltip />} />
            <Legend wrapperStyle={{ top: 25, right: 25 }} layout="horizontal" verticalAlign="top" align="right" iconSize="8px" formatter={(value) => <span className="text-color-class">{value}</span>} payload={[{ type: "circle", value: "Poids (kg)", color: "#282D30" }, { type: "circle", value: "Calories brûlées (kCal)", color: "#E60000" }]} />
            <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} maxBarSize={1} />
            <Bar yAxisId="right" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} maxBarSize={1} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    );

  }
}
