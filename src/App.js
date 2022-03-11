import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Landingpage from './components/pages/landing-page/landingpage';
import Signup from './components/pages/user-account/signup';
import Login from './components/pages/user-account/login';

import './App.css';

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Landingpage/>} />
        {/* <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login />} /> */}
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;
