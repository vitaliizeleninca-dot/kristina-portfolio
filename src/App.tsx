import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import { GlowBackground } from "./components/ui/GlowBackground";

function App() {

  return (

    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* Animated premium background */}
      <GlowBackground />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-sm opacity-60">
            Loading experience...
          </div>
        }
      >

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

        </Routes>

      </Suspense>

    </div>

  );
}

export default App;
