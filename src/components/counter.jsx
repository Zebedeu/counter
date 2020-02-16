import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value
  };

  style = {
    marginLeft: 20
  }
  render(){
  return (
    <div className="col-lg-4 card">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, excepturi ab at doloribus ea veritatis explicabo tempora architecto iste nisi quaerat rerum amet officiis illum animi laboriosam. Provident, odit reiciendis?</p>
      <div className="col-lg-2 ">
          <span className={ this.getBadgeClasses()  }>{this.formatCount()}</span>
          <button 
              onClick={ () => this.props.onIncrement(this.props.counter) } 
              className="btn btn-secondary">
                Comprar
          </button>
          <button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
              Delete
          </button>
        </div>
    </div>
  );

  }
    getBadgeClasses() {
      let classes = "badge  m-2 badge-";
      classes += (this.props.counter.value === 0 ) ? "warning" : "primary";
      return classes;
    }

  formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
