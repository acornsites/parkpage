import React, { Component } from 'react';


class Social extends Component {
    constructor(props) {
        super(props)
    }

    injectSocial(base, token) {
        return base.replace('{name}', token)
    }

    socialFromType(type) {
        const types = {
            linkedin: {
                base: "https://linkedin.com/in/{name}",
                name: "LinkedIn"
            },
            facebook: {
                base: "https://facebook.com/{name}",
                name: "Facebook"
            },
            twitter: {
                base: "https://twitter.com/{name}",
                name: "Twitter"
            },
            keybase: {
                base: "https://keybase.com/{name}",
                name: "Keybase"
            },
            github: {
                base: "https://github.com/{name}",
                name: "GitHub"
            }
        }
        return types[type]
    }

    render() {
        let social = this.socialFromType(this.props.type)
        if (social === null || social === undefined) return "";
        return(
            <div className="social-icon">
                <a href={this.injectSocial(social.base, this.props.username)}>{social.name}</a>
            </div>
        );
    }
}

export default Social;