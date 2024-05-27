import Nav from "../../components/Nav";
import "./index.css";

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="not-found-container">
        <img
          src="https://stories.freepiklabs.com/storage/8198/Error-404-01.svg"
          alt="not-found"
          className="not-found"
        />
            <h1 className="heading">Page NotFound</h1>
      </div>
    </>
  );
};

export default NotFound;
