import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">Task Tracker</div>
      <nav className="header__nav">
        <div className="header__nav-item">Add Todo</div>
        <div className="header__nav-item">Todo Panel</div>
      </nav>
    </header>
  );
};

export default Header;
