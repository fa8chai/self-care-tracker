import Graph from './components/Graph';
import Home from './components/Home';
import Cares from './components/Cares';
import Login from './components/Login';
import { auth, db } from './components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setUser, setCares } from './reduxConfig/actions';
import { useEffect } from 'react';
import Header from './components/Header';
import NoDataGraph from './components/NoDataGraph';
import './App.css';
import Footer from './components/Footer';

function App() {
  const user = useSelector(state => state.user);
  const cares = useSelector(state => state.cares);
  
  return (
    <div className="app">
      {!user? (  <Login />) :
      ( 
        cares.length >=1 ? (
        <>
          <Header />
          <div className='app__cares'>
            <div className='app__flex'>
                <Graph />
                <Home />
            </div>
            <Cares />
          </div>
          <Footer />
        </>
        ) :
        (  
        <>
          <Header />
          <div className='app__cares'>
            <div className='app__flex'>
                  <NoDataGraph />
                  <Home />
              </div>
          </div>
          <Footer />
        </>
        )
      )
}
    </div>
  );
}

export default App;
