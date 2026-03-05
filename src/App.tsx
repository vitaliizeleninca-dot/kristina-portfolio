import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <main className="relative min-h-screen w-full overflow-x-hidden">
              <Home />
            </main>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
