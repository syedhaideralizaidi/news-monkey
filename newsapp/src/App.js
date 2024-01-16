import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//           <Navbar />
//           <News pageSize={6} country="us" category="sports" />
//       </div>
//     )
//   }
// }
let pageSize = 2;
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
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
  }
}
