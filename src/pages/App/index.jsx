import react from 'react';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import NavBar from '../../Components/NavBar/index';
import Home from '../Home/index';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>}
  ])

  return routes;
}
function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
