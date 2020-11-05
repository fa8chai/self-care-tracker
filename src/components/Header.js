import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { Button } from './Button';
import { logout } from '../reduxConfig/actions';
import { auth } from './firebase';

function Header() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout());
        auth.signOut();    
    }

    return (
        <div className='header'>
            <div className='header__info'>
                <Avatar src={user.photoURL} />
                <p>{user.displayName}</p>
            </div>
            <Button onClick={handleClick}>Sign out</Button>
        </div>
    )
}

export default Header
