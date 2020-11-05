import './Cares.css';
import Care from './Care';
import { useSelector } from 'react-redux';

function Cares() {
    const cares = useSelector(state => state.cares);
    return (
        <div className='cares'>
            {cares.reverse().map(care => (
                <Care key={care.id} text={care.data.text} duration={care.data.duration} date={care.data.date} />
            ))}
        </div>
    )
}

export default Cares
