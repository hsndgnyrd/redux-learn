import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseByTwoCounter } from '../redux/actions/counterAction'
import { bindActionCreators } from 'redux'

class DecreaseByTwoCounter extends Component {
    render() {
        return (
            <div onClick={e => {
                this.props.dispatch(decreaseByTwoCounter())
            }}>
                <button>-2</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(decreaseByTwoCounter, dispatch)
    }
}

export default connect(mapDispatchToProps)(DecreaseByTwoCounter);