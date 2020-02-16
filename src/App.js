import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import Footer from './components/footer';

class App extends Component {
 
  state = {
    counters: [
      {id: 1, value: 0 },
      {id: 2, value: 0 },
      {id: 3, value: 0 },
      {id: 4, value: 0 },
    ]
  }
  handlerIncrement = counter  => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });

  }
  handlerReset = () => {
    const counter = this.state.counters.map( c => {
      c.value = 0;
      return c;
    });
     this.setState( { counter} );
  }
  HandleDelete = (countId) => {
    const counters = this.state.counters.filter( count => count.id !== countId );
    this.setState( {counters } );
  }
  render(){

    return(
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length} />
        <main className="container">
          <div className="col-lg-12">
              <Counters 
            counters={this.state.counters}
            onReset={this.handlerReset}
            onIncrement={this.handlerIncrement}
            onDelete={this.HandleDelete}
            />
          </div>
        </main>
        <Footer data={this.state.counters.filter(c => c.value > 0).length}/>
      </React.Fragment>
    )
  }
}

export default App;
