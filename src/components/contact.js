import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';
import config from '../config';


class Contact extends Component {
    render() {
        return(
            <div className="cntct">
                If you have a project and are interested in this domain, you can contact me via {' '}
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