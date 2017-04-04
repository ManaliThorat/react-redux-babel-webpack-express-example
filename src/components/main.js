import React, { Component } from 'react';
import ListView from '../containers/list_view';

class Main extends Component {
    render() {
        return(
            <div className="col-md-10 col-md-offset-1 main">
                <ListView />
            </div>
        )
    }
}

export default Main;
