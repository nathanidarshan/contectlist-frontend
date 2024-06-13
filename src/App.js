import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainlayout from './pages/Mainlayout';
import { Route, Routes } from 'react-router-dom';
import Dashbord from './pages/Dashboard';
import Dash from './dash';
import Contactadd from './pages/Contactadd';
import Contactview from './pages/Contactview';
import Contactupdate from './pages/Contactupdate';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={ <><Dashbord /><Dash/></>} />
        <Route path="/contactadd" element={ <><Dash /><Contactadd/></>} />
        <Route path="/contactview" element={ <><Dash /><Contactview/></>} />
        <Route path="/contactupdate/:id" element={ <><Dash /><Contactupdate/></>} />
        {/* <Route path="/contactsearch/:test" element={ <><Dash /><Contactsearch/></>} /> */}
      </Routes>

    </div>
  );
}

export default App;
