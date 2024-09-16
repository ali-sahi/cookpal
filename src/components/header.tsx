import { Link } from "react-router-dom";
import SearchForm from "./search-form";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <SearchForm />
      </div>
    </section>
  );
};

export default Header;
