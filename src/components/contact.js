import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';


class Contact extends Component {
    render() {
        return(
            <div className="cntct">
                You can contact me via {' '}
                <Obfuscate
                email="_@chip.bz"
                headers={{
                    subject: `Inquiry about ${window.location.href}`
                }}
                />  
            </div>
        );
    }
}

export default Contact;