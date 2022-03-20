import './App.css';
import {BrowserRouter} from 'react-router-dom';
import PageLayout from './layouts/PageLayout';

function App() {
  return(
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  )
}

export default App;
