import heroImg from '../../assets/images/hero.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">It's time to blog</h1>
          <p className="mb-5">
            Your new blog is waiting for you. Start writing your first post
            today.
          </p>
          <Link to="/blogCreation">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
