import React, { Component } from 'react';
import $ from 'jquery';

export default class APICall extends Component {
	constructor(props) {
		super(props);

		this.state = {trail: []};
	}

	componentDidMount(){
		console.log('this mounted');
		this.APICall();

	}

	APICall() {
		if(this.props.trailId===""){
			return null;
		}
		var trailId = this.props.trailId;
		console.log(trailId);
		var url='https://demo4532391.mockable.io/api/alltrails/trails/';
		console.log(url.concat(trailId));
		return $.get(url.concat(trailId))
			.then((data) => {
				console.log(data);
				this.setState({ trail: { trail_id:data.trail_id, name:data.name, elevation_gain:data.trailGeoStats.elevation_gain, distance_total:data.trailGeoStats.distance_total }});
				console.log(this.state.trail);
			});
	}

	render(){
		var trail = this.state.trail;
		return <div>{trail.elevation_gain}</div>
	}
}