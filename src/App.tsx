import { Navigation } from "./routes/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
