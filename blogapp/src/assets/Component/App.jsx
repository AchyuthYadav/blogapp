import { Profiler } from "react";

import Header from "./Header";
import Home from "./Home";
import Login from "./LogIn";
import NewPost from "./NewPost";
import Profile from "./Profile";
import Setting from "./Setting";
import SignUp from "./SignUp";
import SinglePost from "./SinglePost";


function App(props) {
  return (
    <>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/singlepost">
        <SinglePost />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings">
        <Setting />
      </Route>
      <Route path="/editor">
        <NewPost />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;