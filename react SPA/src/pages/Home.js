import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Homes page</h1>
      <p>
        Go to <Link to="/products">products page</Link>
      </p>
    </div>
  );
};

export default Home;
