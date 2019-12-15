



//For this project we will use the Model-View-Controller (MVC) architecture. 
//It provides a nice separation of concerns and will help us stay organized.
// This is a simple application and so we will probably only need one model, one view, and one controller. 
//Create three more files in your project called:


//Quake.js
//QuakesView.js
//QuakesController.js


//Let's begin by building the model: Quake.js. 
//We will use a class to represent our model. 



import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return ;
  }
}