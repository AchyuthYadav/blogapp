import React from "react";


function FeedNav(props) {
  return (
    <nav className="feed-nav">
      <ul className="flex">
        <li className="feed-nav-item">
          <Link className="active" to="/">
            Global Feed
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FeedNav;