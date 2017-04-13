import React from 'react'
import { connect } from 'react-redux'
import { incCounter, getCounter } from '../action-creators'
import Counter from '../components/counter'

let mapStateToProps = (state, props) => {
  return {
    counter: state.counter
  }
}

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.onIncButtonClick = this.onIncButtonClick.bind(this)
  }

  componentDidMount () {
    setInterval(() => this.props.dispatch(getCounter()), 1000)
  }

  onIncButtonClick () {
    this.props.dispatch(incCounter())
  }

  render () {
    return (
      <Counter
        counter={this.props.counter}
        onIncButtonClick={this.onIncButtonClick}
      />
    )
  }
}

export default connect(mapStateToProps)(Home)
