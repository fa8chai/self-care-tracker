import { Button } from './Button';
import { useDispatch } from 'react-redux';
import { db, googleProvider } from './firebase';
import './Login.css';
import { setCares, setUser } from '../reduxConfig/actions';
import firebase from 'firebase';

function Login() {
    const dispatch = useDispatch();

    firebase.auth().onAuthStateChanged(luser => {
    if(luser){
        db.collection('caresT').where('userEmail', '==', luser.email).orderBy('date', 'asc').limit(32).onSnapshot(snapshot => (
          dispatch(setCares(snapshot.docs.map(doc => 
              ({id: doc.id, data: doc.data()})
            ))
    )))
      }else{

      }
    })

    const handleSubmit = () => {
        firebase.auth().signInWithPopup(googleProvider).then((res) => {
          dispatch(setUser(res.user))
        }).catch((error) => {
          alert(error.message)
        })
      }
    return (
        <div className='login'>
            <div>
                <Button onClick={handleSubmit}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
