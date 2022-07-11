import React, { PureComponent } from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import '../Style/Duree.css';
import PropTypes from 'prop-types';

let data

export default class Example extends PureComponent {

  render() {


    data = this.props.Duree.data.sessions

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="line-tooltip">
            <p className="label">{`${payload[0].payload.sessionLength}`}min</p>
          </div>
        );
      }
    }

    return (
      <div className='lower'>
        <div className='linetitle'> Durée moyenne des sessions</div>
        <ResponsiveContainer width="100%" height="65%" >
          <LineChart data={data} margin={{ bottom: 50, top: 5 }}>
            {/* defines a gradient from a low opacity white to a solid white to use for the line */}
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity={0.4} />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
            </defs>
            <Line type="monotone" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} dot={false} activeDot={{ fill: 'white', stroke: 'rgba(255,255,255,0.3', strokeWidth: 10, r: 4 }} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
          </LineChart>
        </ResponsiveContainer>

        {/* replaces Xaxis for better control over placement and to avoid labels not rendering*/}
        <div className='Week'>
          <div className='day'>L</div>
          <div className='day'>M</div>
          <div className='day'>M</div>
          <div className='day'>J</div>
          <div className='day'>V</div>
          <div className='day'>S</div>
          <div className='day'>D</div>
        </div>
      </div>
    );

  }
}

Example.propTypes = {
  data: PropTypes.array,
};