import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Switch } from "wouter";
import Pokedex from './pages/Pokedex'
// import FullStatsSummary from './pages/FullStatsSummary'
import Error404 from './pages/Error404';
import { ChosenProvider } from './contexts/ChosenContext';
import Tournament from './pages/Tournament';

function App() {
  

  return (
    <>
      <Header />
      <main>
        <ChosenProvider>
          <Switch>
            <Route path='/' component={Pokedex}></Route>
            <Route path='/tournament' component={Tournament}></Route>
            <Route component={Error404} />
          </Switch>
        </ChosenProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
