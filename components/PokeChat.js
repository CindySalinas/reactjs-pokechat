/*
 * Module dependencies
 */
import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import PokeMessage from './PokeMessage';
/*
 *Component
*/
export default class PokeChat extends React.Component{
	render(){
		var id = 0;
		return <ul className="pokechat">
			<ReactCssTransitionGroup transitionName="message-animation"  transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				{
					this.props.messages.map((message) => {
						return <PokeMessage key={message.id} message={message} />
					})
				}
			</ReactCssTransitionGroup>
		</ul>
	}
}

PokeChat.defaultProps = {
	messages: []
};