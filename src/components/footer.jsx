import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <footer className="footer">
                    <p>It is footer {this.props.data}</p>
                </footer>
            </React.Fragment>
         );
    }
}
 
export default Footer;