import logo from './logo.svg';
import './App.css';

function Header() {
    return (

        <>  <h2>i am header component</h2>
            <Title/>
        </>
    )
}

function Footer() {
    return (

        <>
            <h2>I am footer component</h2>
            <Title/>
        </>
    )
}

function Content() {
    return (

        <>
            <h2>I am content component</h2>
            <Title/>
        </>
    )
}

function Title() {
    return (
        <p>Lorem ipsum dolor sit amet.</p>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Footer/>
            <Content/>
        </div>
    );
}

export default App;
