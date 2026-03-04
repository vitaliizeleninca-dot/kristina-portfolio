import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative min-h-screen w-full overflow-x-hidden">
                <Home />
              </div>
            }
          />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
