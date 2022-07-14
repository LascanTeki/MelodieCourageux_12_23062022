import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../Style/Intensite.css';

import PropTypes from 'prop-types';



export default class Example extends PureComponent {
/**
 * Component for generating a chart with the scores of every activity type.
 * @param {*} props 
 * @component
 * @extends {PureComponent}
 */
    render() {

        //Changes the value of "kind" (numbers) to the corresponding kind of value in the "inte" table
        let value = this.props.inte.data.map((perf) => {
            return {
                value: perf.value,
                kind: this.props.inte.kind[perf.kind].charAt(0).toUpperCase() + this.props.inte.kind[perf.kind].slice(1)
            }
        })

        return (
            <div className='center'>
                <ResponsiveContainer width="100%" height="90%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={value} padding={25} startAngle={210} endAngle={570}>
                        <PolarGrid radialLines={false} polarRadius={[5, 15, 30, 45, 65]} />
                        <PolarAngleAxis dataKey="kind" tick={{ fontSize: "0.8vw", fill: "white" }} />
                        <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );

    }
}

Example.propTypes = {
    inte: PropTypes.object,
};