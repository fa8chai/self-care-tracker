import './Care.css';
import { timeConvert } from './functions';

function Care({ text, duration, date }) {

    
    return (
        <div className='care'>
            <div className='care__info'>
                <h4>{text}</h4>
                <p>{timeConvert(duration)}</p>
            </div>
            <p className='care__info--date'>{new Date(date).toLocaleDateString()}</p>
        </div>
    )
}

export default Care
