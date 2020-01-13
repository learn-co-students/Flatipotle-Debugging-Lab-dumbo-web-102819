import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  state= {
    orders: []
  }

  addOrder = (order) => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  handleDeleteOrder = (arrayIndex) => {
    let tempOrder = this.state.orders;
    tempOrder.splice(arrayIndex, 1) //arrayIndex is the starting index of the array
    //1 is the amt of objects we want to remove

    this.setState({
      orders: tempOrder
    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => {
      return <Order key={idx} {...order} arrayIndex={idx} handleDeleteClick={this.handleDeleteOrder} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
