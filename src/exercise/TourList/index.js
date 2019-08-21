import React, {Component} from 'react';
import Tour from '../Tour/Tour'
import TourList from "../../exercise/TourList";

class Index extends Component {
    render() {
        return (
            <div>

                <h4>Hello from tourlist</h4>
            <TourList/>

            </div>
        );
    }
}

export default Index;