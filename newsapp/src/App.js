import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const pageSize = 5;

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology}>"
                pageSize={pageSize}
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
