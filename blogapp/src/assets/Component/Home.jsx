import React from "react";
import Banner from "./Banner";
import Feed from "./Feed";
import Sidebar from "./SideBar.jsx";

function Home(props) {
  return (
    <main>
      <Banner />
      <div className="padding">
        <div className="container col-xs-4 item-start">
          <Feed />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

export default Home;