$(function() {
  // Choose a random organization.
  var organizations = [
  {
    // American Civil Liberties Union
    "disclaimer": "<a href='http://aclu.org' target='_blank'>ACLU</a> will contact you about future campaigns. <a href='https://www.aclu.org/american-civil-liberties-union-privacy-statement' target='_blank'>Privacy policy</a>",
    "tag": "reset-the-net-aclu",
    "weight": 2
  },
  {
    // OpenMedia
    "disclaimer": "<a href='http://openmedia.org' target='_blank'>OpenMedia</a> will contact you about future campaigns. <a href='https://openmedia.ca/privacy' target='_blank'>Privacy policy</a>",
    "tag": "reset-the-net-openmedia",
    "weight": 0
  },
  {
    // Demand Progress
    "disclaimer": "<a href='http://demandprogress.org/' target='_blank'>Demand Progress</a> will contact you about future campaigns. <a href='http://www.demandprogress.org/privacy/' target='_blank'>Privacy policy</a>",
    "tag": "reset-the-net-demand-progress",
    "weight": 0
  },
  {
    // Fight for the Future
    "disclaimer": "<a href='http://www.fightforthefuture.org/'>Fight for the Future</a> and <a href='http://www.thecenterforrights.org/'>Center for Rights</a> will contact you about future campaigns. <a href='http://www.fightforthefuture.org/privacy/'>Privacy Policy</a>",
    "tag": "reset-the-net",
    "weight": 98
  },
  {
    // Free Press
    "disclaimer": "<a href='http://www.freepress.net/' target='_blank'>Free Press</a> will contact you about future campaigns. <a href='https://www.freepress.net/privacy-copyright' target='_blank'>Privacy policy</a>",
    "tag": "reset-the-net-freepress",
    "weight": 0
  }
  ];

  function getScore(weight) {
    return weight * Math.random();
  }

  function getOrganization() {
    return organizations.sort(function(a, b) {
      return getScore(b.weight) - getScore(a.weight);
    })[0];
  }

  // Update!
  var organization = getOrganization();
  $('input[name=tag]').val(organization.tag);
  $('.disclaimer p').html(organization.disclaimer);
});


$(document).ready(function(){
   var $form = $('form');
   $form.submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
      $('#thank-you-message').append("<p> Thanks for signing up! </p>");
      $form.remove();
      $('.disclaimer').remove();
      },'json');
      return false;
   });
});
