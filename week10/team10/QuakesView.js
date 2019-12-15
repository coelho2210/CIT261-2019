
    




//For this project we will use the Model-View-Controller (MVC) architecture. 
//It provides a nice separation of concerns and will help us stay organized.
// This is a simple application and so we will probably only need one model, one view, and one controller. 
//Create three more files in your project called:


//Quake.js
//QuakesView.js
//QuakesController.js

    
   // Now let's move on to the View. 
   //The view should get sent some data, 
   //then format it and display it in the current page
    
    
    // Quake View handler
    export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    }
    renderQuake(quake, element) {
      const quakeProperties = Object.entries(quake.properties);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    }
  }