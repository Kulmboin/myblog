import './App.css';


function Header() {
  return <header>
  <div className='titleWrapper'>
    <h1>Kulmboin Blog</h1>
  </div>
</header>
}


function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
