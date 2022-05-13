import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Landingpage from "./components/pages/landing-page/landingpage";
import StudentLandPage from "./components/pages/student-dashboard/student-landing-page";
import SubjectPage from "./components/pages/student-dashboard/subject-landing-page";
import TeacherLandingPage from "./components/pages/teacher/teacher-landing-page";
import Quiz from "./components/pages/quiz/quiz";
import Analysis from "./components/pages/analysis/analysis";
import StartQuiz from "./components/pages/quiz/start-quiz";
import Score from "./components/pages/score-page/score";
import Form from "./components/pages/quiz/create-quiz-form";
import { RequireToken } from "./Auth";
import NavBar from "./components/navbar/navbar";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Landingpage />} />
          </Routes>

          <div>
            <Routes>
              <Route
                path="/student-landing-page"
                element={
                  <RequireToken>
                    <NavBar />
                    <StudentLandPage />
                  </RequireToken>
                }
              />

              <Route
                path="/teacher-landing-page"
                element={
                  <RequireToken>
                    <NavBar />
                    <TeacherLandingPage />
                  </RequireToken>
                }
              />

              <Route
                path="/subject-landing-page"
                element={
                  <>
                    <NavBar />
                    <SubjectPage />
                  </>
                }
              />
              <Route
                path="/teacher-subject-landing-page"
                element={
                  <>
                    <NavBar />
                    <SubjectPage />
                  </>
                }
              />
              <Route
                path="/start-quiz-page"
                element={
                  <>
                    <NavBar />
                    <StartQuiz />
                  </>
                }
              />
              <Route
                path="/quiz-page"
                element={
                  <>
                    {" "}
                    <NavBar />
                    <Quiz />
                  </>
                }
              />
              <Route
                path="/analysis-page"
                element={
                  <>
                    {" "}
                    <NavBar />
                    <Analysis />
                  </>
                }
              />
              <Route
                path="/score-page"
                element={
                  <>
                    <NavBar />
                    <Score />
                  </>
                }
              />
              <Route
                path="/create-quiz"
                element={
                  <>
                    {" "}
                    <NavBar />
                    <Form />
                  </>
                }
              />
            </Routes>
          </div>
        </Layout>
      </Router>
    </>
  );
}

export default App;
