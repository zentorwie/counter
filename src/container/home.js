import React from 'react'
import { connect } from 'react-redux'
import { socketIncCounter, getCounter } from '../action-creators'
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
    this.state = {
      active: false
    }
  }

  componentDidMount () {
    this.props.dispatch(getCounter())
    // setInterval(() => this.props.dispatch(getCounter()), 5000)
    // setInterval(() => this.props.dispatch({ type: GET_COUNTER_REQUEST }), 5000)
  }

  onIncButtonClick () {
    // this.props.dispatch(incCounter())
    // this.props.dispatch({ type: INC_COUNTER_REQUEST })
    this.props.dispatch(socketIncCounter())
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
