import { Link, Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense, useContext, useState } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'

export enum Theme {
  LIGHT = 'light',
  DARK = "dark"
}

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>SetTheme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={"/about"} element={<AboutPageAsync/>}></Route>
            <Route path={"/"} element={<MainPageAsync/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App