import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';
import config from '../config';


class Contact extends Component {
    render() {
        return(
            <div className="cntct">
                You can contact me via {' '}
                <Obfuscate
                email={config.contact_email}
                headers={{
                    subject: `Inquiry about ${config.domain}`
                }}
                />  
            </div>
        );
    }
}

export default Contact;