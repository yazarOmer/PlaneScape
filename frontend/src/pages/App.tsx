import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
