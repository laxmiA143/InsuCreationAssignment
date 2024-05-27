import Nav from "../Nav";
import Reviews from "../StudentReviews";
import Footer from "../Footer";

const CommonLayout = ({ children }) => (
  <div className="common-layout-container">
    <Nav />
    {children}
    <Reviews />
    <Footer />
  </div>
);

export default CommonLayout;
