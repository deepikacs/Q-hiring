import React, { Component } from 'react';
import App from '../App';
import { connect } from 'react-redux';
import AlertFunction from '../../Actions/AlertAction';

const AlertHandler = ({ message, error }) =>{
    return(
        <div>
             {message && <div>{message}</div>}
             {error && <div>{error}</div>}
        </div>
    )
}

class AlertWrapper extends Component {
    render() {
        const { message, error } = this.props;
        return (
            <div>
                <AlertHandler erro={error} message={message} />
                <App />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { message, error } = state.AlertReducer;
    return { message, error }
  };


// export default AlertWrapper;
export default connect(mapStateToProps, {})(AlertWrapper);