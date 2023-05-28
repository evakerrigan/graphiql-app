import './App.css';
import {Header} from './components/Header/Header';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Docs} from './components/Docs/Docs';
import {Code} from './components/Code/Code';
import {Output} from './components/Output/Output';
import {Footer} from './components/Footer/Footer';
import {DocumentNode} from '@apollo/client';
import {useState} from 'react';

function App() {

    const [queryGraphql, setQueryGraphql] = useState<DocumentNode | undefined>(undefined);
    const [variablesGraphql, setVariablesGraphql] = useState<string | undefined>();

    return (
        <div className="app">
            <Header/>
            <div className="app-content">
                <Sidebar/>
                <Docs/>
                <Code setQueryGraphql={setQueryGraphql} setVariablesGraphql={setVariablesGraphql}/>
                <div className="output">
                    {queryGraphql ? <Output queryGraphql={queryGraphql} variablesGraphql={variablesGraphql}/> :
                        <div>Ничего нет</div>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App
