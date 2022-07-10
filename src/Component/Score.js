import React, { PureComponent } from 'react';
import { PieChart, Pie,  Label, ResponsiveContainer } from 'recharts';
import '../Style/Score.css';


let data

let value

let percent

export default class Example extends PureComponent {

    render() {

        value = this.props.score

        data = [
            { name: 'Group A', value: value },
        ];

        percent = value+"%"

        return (
            <div className='right'>
                <ResponsiveContainer width="100%" height="100%">

                    <PieChart width={400} height={400}>
                        <text x="5%" y="24" fill="#20253A" fontWeight="bold" >
                            Score
                        </text>
                        <Pie cornerRadius={40} dataKey="value" data={data} cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" startAngle={((data[0].value * 360) / 100) + 90} endAngle={90} fill="#FF0000" stroke='#FF0000' />
                        <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius="70%" fill="white" stroke="white" > <Label
                          fontSize="26" fontWeight="bold" value={percent} position="centerBottom" className='label-top'
                        />
                        <Label
                            fill='#74798C' fontWeight="bold" value="de votre objectif" position="centerTop" className='label' fontSize="15"
                        /></Pie>
                        
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
        
    }
}