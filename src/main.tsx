import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Character } from './pages/character.tsx'
import { Characters } from './pages/characters.tsx'

import { Provider } from 'react-redux'
import { store } from './state/store.ts'

const router = createBrowserRouter([

  //make an intro page with animations, a pokedex and maybe add google auth? 
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '/characters/:characterId',
    element: <Character />
  }

])




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ React.StrictMode >
)
