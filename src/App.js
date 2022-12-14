import React from "react";
import {Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>}></Route>
        <Route path='/new-meetups' element={<NewMeetupPage/>}></Route>
        <Route path='/favourites' element={<FavouritesPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
