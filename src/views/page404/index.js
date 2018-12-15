import React from 'react'
import { connect } from 'react-redux'

class Page404 extends React.Component{
	render(){
		return(
			<div>
				404
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps, null)(Page404)