import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateCust from './components/CreateCust/CreateCust';
import EditCust from './components/EditCust/EditCust';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addCustomer' element={<CreateCust />} />
          <Route path='/editCustomer' element={<EditCust />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
