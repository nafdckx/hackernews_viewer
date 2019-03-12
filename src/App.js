import React, { Component } from 'react';
import './App.css';
import Table from './Table'; 

class App extends Component {
  constructor(props){
 	super(props);
   this.state = {
	 result: null
	};
  this.setResultInState = this.setResultInState.bind(this);
  }

  setResultInState(result){
	this.setState({result});
	}

  componentDidMount(){
 	  fetch('https://hn.algolia.com/api/v1/search?query="redux"')
	  .then(response => response.json())
	  .then(result => this.setResultInState(result))
    .catch(error => error);
  }
  	
  render(){
    if(!this.state.result) {return null;}
    console.log(this.state);
    return (
      <div className="App">
      <h1>Totle number of results : {this.state.result.nbHits}</h1> 
      <Table list={this.state.result.hits}/>
      </div>
    ); 
  }
}

export default App;
