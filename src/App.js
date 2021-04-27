import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/search'>
            <SearchPage />
          </Route>

        </Switch>

        <Footer />

      </Router>
      

      {/* HOME */}
        {/* HEADER  */}

        {/* BANNER */}

        {/* CARDS */}

        {/* FOOTER */}
      {/* HOME */}

      {/* SEARCHPAGE */}
        {/* HEADER  */}

        {/* ... */}

    </div>
  );
}

export default App;
