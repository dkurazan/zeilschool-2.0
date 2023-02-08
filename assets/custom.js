window.addEventListener('DOMContentLoaded', function() {
  console.log('dom loaded');
})

window.addEventListener('load', function() {
  instaApp();
  weatherApp();
  // newsletterSubscribe();
})

// window.addEventListener('DOMNodeInserted', function(event) {
//   const instaApp = document.querySelector('.instagram-grid-container');
//   if (instaApp) {
//     console.log('try to change style');
//     instaApp.style.setProperty('display', 'flex', 'important');
//   }
//   console.log(instaApp);
// })

function instaApp() {
  const instaApp = document.querySelector('.instagram-grid-container');
  if (instaApp) {
    instaApp.setAttribute('style', 'display:flex !important');
  }
}

function weatherApp() {

  const weatherBlock = document.querySelector('.weather-section__data');

  if (weatherBlock) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.22&longitude=4.93&timezone=CET&hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m,cloudcover')
    .then(res => res.json())
    .then(data => {
      const now = new Date();
      const today = now.toDateString();
      let day = {};
      let morning = {};
      data.hourly.time.forEach((e, i) => {
        let check = new Date(e);
        let date = check.toDateString();
        if (date === today) {
          let time = check.getHours();
          if (time === 9) {
            morning.temp = data.hourly.apparent_temperature[time];
            morning.clouds = data.hourly.cloudcover[time];
            morning.windspeed = data.hourly.windspeed_10m[time];
            morning.winddirection = data.hourly.winddirection_10m[time];
          } else if (time === 13 ) {
            day.temp = data.hourly.apparent_temperature[time];
            day.clouds = data.hourly.cloudcover[time];
            day.windspeed = data.hourly.windspeed_10m[time];
            day.winddirection = data.hourly.winddirection_10m[time];
          }
        }
      });
      
      [morning, day].forEach((e, i) => {

        let index = i > 0 ? 'day' : 'morning';
        let block = document.querySelector(`.weather-section__${index}`);
  
        block.querySelector('.weather-temperature').textContent = e.temp;
        block.querySelector('.weather-section__wind-speed').textContent = e.windspeed;
        let cloudy = block.querySelector('.weather-section__cloudy');
        let sunny = block.querySelector('.weather-section__sunny')
        if ( e.clouds > 50 ) {
          cloudy.classList.add('active');
          sunny.classList.remove('active');
        } else {
          sunny.classList.add('active');
          cloudy.classList.remove('active');
        }
        block.querySelector('.weather-section__wind-arrow').style.transform = `rotate(${e.winddirection}deg)`
      })
      weatherBlock.style.visibility = 'visible';
    })
    .catch(err => console.log(err))
  }
  
}

function newsletterSubscribe() {
  const form = document.querySelector('.newsletter-form');

  if (form) {
    form.addEventListener('submit', function(event){
      event.preventDefault();
      let contact_email = form.querySelector('.field__email').value;
      var action  = '/contact?';
          action += encodeURIComponent('form_type') +'='+ encodeURIComponent('contact');
          action += '&'+ encodeURIComponent('utf8') +'='+ encodeURIComponent('✓');
          action += '&'+ encodeURIComponent('contact[email]') +'='+ encodeURIComponent(contact_email);

      $.ajax({
        type: "POST",
        async: true,
        url: action,
        error: function(jqXHR, textStatus, errorThrown) {
            //  Request Failed. 
        },
        success: function(response) {
            // Assume Success. 'response' is the complete HTML page of the 
            // contact success form, so likely won't be helpful
            console.log('sent');
        }
      })
    })
  }
}

// testPages();

// function testPages() {
//   $.ajax({
//     url: '/pages/filter',
//     success: function(data) {
//       // Clear the pages div
//       // $('#pages').empty();
      
//       // Loop through the retrieved pages
//       $.each(data.pages, function(index, page) {
//         // Check if the page belongs to the selected category
//         console.log(page);
//       });
//     }
//   });
// }
