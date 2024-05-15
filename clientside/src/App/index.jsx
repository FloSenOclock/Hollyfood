import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicRouter from "../Router/PublicRouter";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
