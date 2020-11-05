import { useState } from 'react';
import './Home.css';
import FeatherIcon from 'feather-icons-react';
import { Button } from './Button';
import { db } from './firebase';
import { useSelector } from 'react-redux';


function Home() {
    const [care, setCare] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');
    const user = useSelector(state => state.user);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const time = Number(hours)* 60 + Number(minutes);
        db.collection('caresT').add({
            text: care,
            date: String(new Date()),
            duration: time,
            userEmail: user.email
        })

        setHours('');
        setMinutes('');
        setCare('');
    }
    const handleHours = (e) => {
        setHours(e.target.value);
    }

    const handleMinutes = (e) => {
        setMinutes(e.target.value);
    }

    const handleCare = (e) => {
        setCare(e.target.value);
    }
    
    return (
        <div className='home'>
            <form>
                <input className='home__care' placeholder="Today's care" value={care} onChange={handleCare} />
                <div className='home__time'>
                    <input type='number' value={hours} min={0} max={24} placeholder='Hours' onChange={handleHours} />
                    <input type='number' value={minutes} min={1} max={59} placeholder='Minutes' onChange={handleMinutes} />
                    <FeatherIcon icon='clock' size='20' />
                </div>
                <Button className={care && minutes || care && hours ? 'home__button' : 'home__btn'} type='submit' onClick={handleSubmit} disabled={care && minutes || care && hours ? false : true}>Add Care</Button>
            </form>
        </div>
    )
}

export default Home
