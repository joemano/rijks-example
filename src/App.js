import React, { Component } from 'react';
import axios from 'axios';
// import Counter from './Counter.js';
// import Header from './Header.js'
import Art from './Art.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      art: [],
      isLoading: true
    }
  }

  componentDidMount() {
    console.log('i be mounted');
    axios({
      method: 'GET',
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      responseType: 'json',
      params: {
        key: 'F9z3jtlN',
        format: 'json'
      }
    }).then((response)=>{
      this.setState({art: response.data.artObjects, isLoading: false});

    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <p>it's loadin boi</p> : this.state.art.map((artObject) => {
          return(
            <Art key={artObject.id} image={artObject.webImage.url} title={artObject.title}/>
          );
        })}
        {/* <Header />
        <Counter /> */}
      </div>
    );
  }
}

export default App;
