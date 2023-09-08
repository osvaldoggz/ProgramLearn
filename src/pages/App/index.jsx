import react from 'react';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import NavBar from '../../Components/NavBar/index';
import Home from '../Home/index';
import Login from '../Login';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/iniciar-sesion', element: <Login/>}
  ])

  return routes;
}
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
