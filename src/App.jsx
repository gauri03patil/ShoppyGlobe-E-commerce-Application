import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Footer from "./components/Footer";
import "./index.css"


function App() {
 return(
  <Provider store= {appStore}>
   <Header/>
   <Outlet/>
   <Footer/>
  </Provider>
 )
}

export default App;

