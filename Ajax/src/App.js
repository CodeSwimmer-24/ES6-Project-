import Blog from "./container/Blog/Blog";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Blog />
      </div>
    </BrowserRouter>
  );
}

export default App;
