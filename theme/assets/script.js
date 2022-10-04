(function ($) {
  'use strict';

  // data background
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // collapse
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });

  // match height
  $('.match-height').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });
  
})(jQuery);

document.getElementById('find').addEventListener('click', apiRequest)

async function apiRequest(){
    // const randomNum =  Math.floor(Math.random()* 3)
    const alienName = Math.floor(Math.random()* 26) //use num random generate and plug in number to api
    try{
        const response = await fetch(`https://simple-foodspro-api.herokuapp.com/api/${alienName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name1').innerText = data.recipeName
        document.getElementById('name2').src = data.place
        document.getElementById('name3').innerText = data.type
        document.getElementById('name4').innerText = data.food
        document.getElementById('name5').innerText = data.macros
      
       

      }catch(error){
        console.log(error)
    }
    
}

