
//For this project we will use the Model-View-Controller (MVC) architecture. 
//It provides a nice separation of concerns and will help us stay organized.
// This is a simple application and so we will probably only need one model, one view, and one controller. 
//Create three more files in your project called:


//Quake.js
//QuakesView.js
//QuakesController.js


import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    // use this as a place to grab the element identified by this.parent, do the initial call of this.intiPos(), and display some quakes by calling this.getQuakesByRadius()
    console.log("hello");
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        
        // if we get the location back then set the latitude and longitude into this.position
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {
    //set a loading message in case it takes long to get the quakes
    this.parentElement.innerHTML = 'Loading...';
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(this.position, 100 );

    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details. The listener should call this.getQuakeDetails on the targeted element
    
  }
  async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided, then send them to the view to be displayed
    const quake = this.quakes.getQuakeById(quakeId);
  }
}