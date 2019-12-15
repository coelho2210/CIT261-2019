import QuakesController from './QuakesController.js';
import { getJSON, getLocation } from './utilities.js';

const navElement = document.getElementById('mainNav');
//buildNavigation(navElement);

 const quakeList =document.getElementById('quakeList');
const myController = new QuakesController(quakeList);
myController.init();

