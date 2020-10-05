import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterAction'

class DecreaseCounter extends Component {
    render() {
        return (
            <div onClick={e => {
                this.props.dispatch(decreaseCounter())
            }}>
                <button>-</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(decreaseCounter, dispatch)
    }
}

export default connect(mapDispatchToProps)(DecreaseCounter);