import React, { Component } from 'react';
import social from '../config/social';
import SocialIcon from '../presentational/social_icon';


class Social extends Component {

    render() {
        return(
            <div className="social">
                {social.map(contact => {
                    return (
                        <SocialIcon
                            type={contact.type}
                            username={contact.username}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Social;