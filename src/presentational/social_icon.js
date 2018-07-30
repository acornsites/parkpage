import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faTwitter, faKeybase } from '@fortawesome/free-brands-svg-icons'


class Social extends Component {
    injectSocial(base, token) {
        return base.replace('{name}', token)
    }

    socialFromType(type) {
        const types = {
            linkedin: {
                base: "https://linkedin.com/in/{name}",
                name: "LinkedIn",
                icon: <FontAwesomeIcon icon={faLinkedin}/>
            },
            facebook: {
                base: "https://facebook.com/{name}",
                name: "Facebook",
                icon: <FontAwesomeIcon icon={faFacebook}/>
            },
            twitter: {
                base: "https://twitter.com/{name}",
                name: "Twitter",
                icon: <FontAwesomeIcon icon={faTwitter}/>
            },
            keybase: {
                base: "https://keybase.com/{name}",
                name: "Keybase",
                icon: <FontAwesomeIcon icon={faKeybase}/>
            },
            github: {
                base: "https://github.com/{name}",
                name: "GitHub",
                icon: <FontAwesomeIcon icon={faGithub}/>
            }
        }
        return types[type]
    }

    render() {
        let social = this.socialFromType(this.props.type)
        if (social === null || social === undefined) return "";
        return(
                <a className="is-text-primary social-icon" href={this.injectSocial(social.base, this.props.username)}>{social.icon}</a>
        );
    }
}

export default Social;