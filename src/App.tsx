import About from './components/About';
import SignIn from './components/SignIn';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './components/Home';

const App = () => {
  return (
    <div>
      <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  );
};

export default App;