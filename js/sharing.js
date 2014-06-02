window.onload = function() {
  $('#share-facebook').click(function(){
    FB.ui({
      method: 'share',
      href: 'https://pack.resetthenet.org',
    }, function(response){});
  });
};
