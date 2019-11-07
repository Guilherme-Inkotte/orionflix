import React from 'react';
import GlobalStyles from './styles/global'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Switch>
          <Route />
        </Switch>
      </main>
    </>
  );
}

export default App;
