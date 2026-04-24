import { Link, Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { Suspense, useContext, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/SideBar'

export enum Theme {
  LIGHT = 'light',
  DARK = "dark"
}

const App = () => {
  const {theme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      
      <Navbar/>
      <div className='content-page'>
        <Sidebar/> 
        <AppRouter/>
      </div>
    </div>
  )
}

export default App