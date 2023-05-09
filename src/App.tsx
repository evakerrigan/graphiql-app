import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Docs } from './components/Docs/Docs';
import { Code } from './components/Code/Code';
import { Output } from './components/Output/Output';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Docs />
        <Code />
        <Output />
      </div>
      <Footer />
    </>
  )
}

export default App
