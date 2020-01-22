import React from 'react';

import './App.css';
import { Header } from './shared/Header.js';
import { Login } from "./login";
import { Map } from "./map";
import { Profile } from "./profile";
import { Signup } from "./signup";


const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  signup: setPage => <Signup setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />
}

function App() {
  const [page, setPage] = React.useState("login");

  return (
    <>
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </>
  )
}

export default App;
