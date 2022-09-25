import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h1>Learn with me in minutes</h1>
        </Link>

        <p>
          Take a whirlwind tour of Electronics Engineering courses.
          Community-driven!
        </p>

        {/* <form action="#">
          <label className="switch">
            <input type="checkbox" />
            <span onClick={() => themeToggler()} className="slider"></span>
          </label>
        </form> */}
      </div>
    </header>
  );
}

export default Header;
