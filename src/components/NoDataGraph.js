import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { CustomizedAxisTick, dateFunc } from './functions';
import './NoDataGraph.css';


function NoDataGraph() {

    const data = [
        {
            date: new Date().toLocaleDateString(),
            min: 30
        },
        {
            date: dateFunc(1),
            min: 50
        },
        {
            date: dateFunc(2),
            min: 20
        },
        {
            date: dateFunc(3),
            min: 30
        },
        {
            date: dateFunc(4),
            min: 30
        },
        {
            date: dateFunc(5),
            min: 50
        },
        {
            date: dateFunc(6),
            min: 20
        },
        {
            date: dateFunc(7),
            min: 30
        },
        {
            date: dateFunc(8),
            min: 50
        },
        {
            date: dateFunc(9),
            min: 20
        },
        {
            date: dateFunc(10),
            min: 30
        },
        {
            date: dateFunc(11),
            min: 50
        },
        {
            date: dateFunc(12),
            min: 20
        },
        {
            date: dateFunc(13),
            min: 30
        },
        {
            date: dateFunc(14),
            min: 50
        },
        {
            date: dateFunc(15),
            min: 20
        },
        {
            date: dateFunc(16),
            min: 30
        },
        {
            date: dateFunc(17),
            min: 50
        },
        {
            date: dateFunc(18),
            min: 20
        },
        {
            date: dateFunc(19),
            min: 30
        },
        {
            date: dateFunc(20),
            min: 50
        },
        {
            date: dateFunc(21),
            min: 20
        },
        {
            date: dateFunc(22),
            min: 30
        },
        {
            date: dateFunc(23),
            min: 30
        },
        {
            date: dateFunc(24),
            min: 20
        },
        {
            date: dateFunc(25),
            min: 30
        },
        {
            date: dateFunc(26),
            min: 30
        },
        {
            date: dateFunc(27),
            min: 20
        },
        {
            date: dateFunc(28),
            min: 30
        },
        {
            date: dateFunc(29),
            min: 30
        },
        {
            date: dateFunc(30),
            min: 70
        },
        {
            date: dateFunc(31),
            min: 60
        },
//32

    ]
    return (
        <div className='noDataGraph'>
            <div>
                
            </div>
            <h4>No Data</h4>
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
                interval={data.length>23? 2 : data.length>16? 1: 0} 
                dataKey="date" 
                height={50} 
                tick={<CustomizedAxisTick />}
                />
                <YAxis />
                <Legend />
                <Bar dataKey="min" fill="#9b006d" />
            </BarChart>
        </div>
    )
}

export default NoDataGraph
