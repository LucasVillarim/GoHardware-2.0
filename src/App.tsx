import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
