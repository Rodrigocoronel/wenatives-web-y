import React from 'react';

import { Link } from "react-router-dom";

export default class HomePage extends React.Component{

	constructor(props){
		super(props)

		this.state = {

		}
	}

	render(){

		console.log(this.props)

		return(
			<div>
				Site under Construction
				<Link to="/site">HomePage</Link>
			</div>
		)
	}
}
