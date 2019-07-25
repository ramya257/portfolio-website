import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const divStyle={
width:'50rem',
height:'30rem',
align:'center',
display:'inline-block'
};

class App extends React.Component{


render (){
    return (
        <div className="App">
        <div className="card card bg-light mb-3" style={divStyle}>
        <div className="card-header">Hi ! I am V.Ramya</div>
        <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    )
}

}

ReactDOM.render(<App />, document.getElementById('root'));

