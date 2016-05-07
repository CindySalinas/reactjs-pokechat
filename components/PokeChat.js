/*
 * Module dependencies
 */
import React from 'react';
import PokeMessage from './PokeMessage';
/*
 *Component
*/
export default class PokeChat extends React.Component{
	render(){
		var id = 0;
		return <ul className="pokechat">
			{
				this.props.messages.map((message) => {
					return <PokeMessage key={message.id} message={message} />
				})
			}
		</ul>
	}
}

PokeChat.defaultProps = {
	messages: []
};