import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <p>
          Want to add your favorite subject to the list? or found a mistake?
          <button
            className="btn-1"
            onClick={() => (window.location = "mailto:himanshuich20@gmail.com")}
          >
            <u>Contact Me</u>
          </button>
        </p>
        <hr />
        <p>
          All articles © the original author and contributors, and licensed.
        </p>
      </div>
    </div>
  );
}

export default Footer;
