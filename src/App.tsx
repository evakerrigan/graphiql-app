import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Docs } from './components/Docs/Docs';
import { Code } from './components/Code/Code';
import { Output } from './components/Output/Output';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Docs />
        <Code />
        <Output />
      </div>
      <Footer />
    </div>
  )
}

export default App
