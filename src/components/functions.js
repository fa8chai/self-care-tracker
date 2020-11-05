import { PureComponent } from "react";

export const dateFunc = (n) => {
    var date = new Date();
    date.setDate((date.getDate() + n));
    return date.toLocaleDateString();
}

export const timeConvert = (num) => {
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return hours + ":" + minutes;   
}

export class CustomizedAxisTick extends PureComponent {
    render() {
        const {
        x, y, stroke, payload,
        } = this.props;
    
        return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{new Date(payload.value).toLocaleDateString("en-US", { day: 'numeric' }) + "-"+ new Date(payload.value).toLocaleDateString("en-US", { month: 'short' })}</text>
        </g>
        );
    }
    }
export const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{label}</p>
                    <p className="intro">{timeConvert(payload[0].value)}</p>
                </div>
            );
        }
    
        return null;
};

export const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}