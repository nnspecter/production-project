import { Link, Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { Suspense, useContext, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'helpers/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

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
            <Route path={"/about"} element={<AboutPage/>}></Route>
            <Route path={"/"} element={<MainPage/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App