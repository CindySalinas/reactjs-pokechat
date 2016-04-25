/*
 * Module dependencies
 */
import React from 'react';
/*
 *Component
*/
export default class PokeMessage extends React.Component{
	render(){
		return <li className="pokemessage">
			{this.props.message.text}
		</li>
	}
}