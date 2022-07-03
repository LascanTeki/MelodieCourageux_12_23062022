import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../Style/Intensite.css';

const data = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

    render() {
        return (
            <div className='center'>
              
                <ResponsiveContainer width="90%" height="90%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} padding={25}>
                        <PolarGrid radialLines={false} polarRadius={[5, 15, 30, 45, 65]} />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "white" }} />
                        <Radar name="Mike" dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
