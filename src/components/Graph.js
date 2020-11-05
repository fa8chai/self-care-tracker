import { useEffect, useState } from 'react';
import './Graph.css';
import {
    XAxis, YAxis, CartesianGrid, Tooltip,
     Legend, Bar, BarChart,
  } from 'recharts';
import { useSelector } from 'react-redux';
import { CustomizedAxisTick, CustomTooltip, groupBy } from './functions';
  

function Graph() {
    const cares = useSelector(state => state.cares);
    const [data, setData] = useState([]);

    useEffect(() => { 
        const test = () => {
            const grouped = groupBy(cares, care => new Date(care.data.date).toLocaleDateString())
            setData(Array.from(grouped).map(gr => ({
                date: gr[0],
                min: gr[1].reduce((total, care) => total += care.data.duration, 0)
            })))
        }
        test();
    }, [cares])

    return (
        <div className='graph'> 
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 10, right: 30, left: -20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                dataKey="date" 
                height={65} 
                tick={<CustomizedAxisTick />}
                interval={data.length>23? 2 : data.length>16? 1: 0}
                />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="min" fill="#9b006d" />
            </BarChart>
        </div>
    )
}

export default Graph
