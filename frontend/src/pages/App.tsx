import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </>
  );
}

export default App;
