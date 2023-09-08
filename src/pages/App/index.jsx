import react from 'react';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import NavBar from '../../Components/NavBar/index';
import Home from '../Home/index';
import Login from '../Login/index';
import Content from '../Content/index';
import Our from '../Our/index';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/iniciar-sesion', element: <Login/>},
    {path: '/contenido', element: <Content/>},
    {path: '/nosotros', element: <Our/>},
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
