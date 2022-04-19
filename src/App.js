import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Landingpage from './components/pages/landing-page/landingpage';
// import Signup from './components/pages/user-account/signup';
// import Login from './components/pages/user-account/login';
import StudentLandPage from './components/pages/student-dashboard/student-landing-page';
import SubjectPage from './components/pages/student-dashboard/subject-landing-page';

import './App.css';
import Quiz from './components/pages/quiz/quiz';
import Analysis from './components/pages/analysis/analysis';
import StartQuiz from './components/pages/quiz/start-quiz';
import Score from './components/pages/score-page/score';


function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Landingpage/>} />
        {/* <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login />} /> */}
        <Route path='/student-landing-page' element={<StudentLandPage/>} />
        <Route path='/subject-landing-page' element={<SubjectPage />} />
        <Route path='/start-quiz-page' element={<StartQuiz />} />
        <Route path='/quiz-page' element={<Quiz />} />
        <Route path='/analysis-page' element={<Analysis />} />
        <Route path='/score-page' element={<Score />} />
      </Routes> 
    </Layout>
    </Router> 
  );
}

export default App;
