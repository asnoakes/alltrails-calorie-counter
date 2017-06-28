import React, { Component } from 'react';
import logo from './alltrailslogo.jpg';
import './App.css';
import $ from 'jquery';
import {calorieCalc} from './calorieCalculator.js';



class App extends Component {
  //var slider = {value:0, min:0, max:50, step:5};
  constructor(props){
    super(props);
    this.state = {trailId: "", trail: {}, pace: 0, weight: 0};
    this.onChange=this.onChange.bind(this);
  }

  onChange(event){

    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(name==="trailSelector")
    {
      var trailId = event.target.value;
        console.log(trailId);
        if(trailId===""){
          return null;
        }
        var url='https://demo4532391.mockable.io/api/alltrails/trails/';
        console.log(url.concat(trailId));
        return $.get(url.concat(trailId))
          .then((data) => {
            console.log(data);
            this.setState({ trail: { trail_id:data.trail_id, name:data.name, elevation:data.trailGeoStats.elevation_gain, distance:data.trailGeoStats.distance_total }});
            console.log(this.state.trail);
          });
    }else{
      this.setState({[name]:value});
      console.log(this.state.weight);
      console.log(this.state.pace);
    }
    if(trailId!=="" && this.state.weight>0 && this.state.pace>0){
          calorieCalc(this.state.weight,this.state.pace,this.state.trail.distance,this.state.trail.elevation);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.onSubmit}>
        <label>
        Trail Name: 
        <select name="trailSelector" onChange={this.onChange}>
          <option value="">Select Trail</option>
          <option value="10012626">Lake 22 Trail</option>
          <option value="10006571">Angel's Landing Trail</option>
          <option value="10035772">Runyon Canyon Trail</option>
          <option value="10036159">Donut Falls Trail</option>
          <option value="10207801">Cataract Falls Trail</option>
        </select>
        </label>
        <br/>
        <label>
        Weight (lbs): 
        <input name="weight" type="range" min="0" max="400" step="5" onChange={this.onChange}/>
        {this.state.weight}
        </label><br/>
        <label>
        Pace (mph): 
        <input name="pace" type="range" min="0" max="10" step=".5"  onChange={this.onChange}/>
        {this.state.pace}
        </label><br/>
        </form>

        <text id="trailInfo">
          Please select trail name to view trail information.
        </text>

        <text id="result">
          Please Select Trail Name, your Weight, and your estimated Pace.
        </text>
      </div>
    );
  }
}

export default App;
