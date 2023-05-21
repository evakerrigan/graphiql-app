import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Docs } from './components/Docs/Docs';
import { Code } from './components/Code/Code';
import { Output } from './components/Output/Output';
import { Footer } from './components/Footer/Footer';
import { DocumentNode, gql } from '@apollo/client';
import { useState } from 'react';

function App() {

  const [queryGraphql, setQueryGraphql] = useState<DocumentNode | undefined>(undefined);

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Docs />
        <Code setQueryGraphql={setQueryGraphql} />
        { queryGraphql ? <Output queryGraphql={queryGraphql} /> : <div>Ничего нет</div> }
      </div>
      <Footer />
    </div>
  )
}

// t('hi, {name}', {name: 'ivan55'})

export default App
