const AnnoucementBar = () => {
  return (
    <div className="anoucementbar">
      <ul className="anoucementbar__links">
        <li>Community</li>
        <li>Books</li>
        <li>Recipe Index</li>
        <li>Popular</li>
      </ul>

      <div className="anoucementbar__buttons">
        <button>
          <img src="/register-icon.svg" alt="register-icon" />
          Register
        </button>
        <button>
          <img src="/login-icon.svg" alt="user-icon" />
          Login
        </button>
      </div>
    </div>
  );
};

export default AnnoucementBar;
