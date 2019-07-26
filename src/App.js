import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Welcome to My Website
      </header>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/Home">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"href="/Home" >Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Home">Link</a>
      </li>
    
    
    </ul>
  
  </div>
  </nav>
 

      </div>

  );
}

export default App;
