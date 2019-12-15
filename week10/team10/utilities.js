

//We would like our app to be able to return earthquakes within a certain radius of our current location. 
//In order to do that we will need to tap into the Geolocation API. 
//Luckily it is pretty easy to use. 
//Make sure to read through the linked page above for more details, 
//but I'll provide this function. One thing to note is that the Geolocation API 
//does not return a Promise like Fetch does. 
//It would be nice if it did so we could take advantage of the newer promise based features of ES2015 and ES2106.



export function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          //console.log(response.json());
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };