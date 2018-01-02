// Use $(window).load() on live site instead of document ready. This is for the purpose of running locally only
$(document).ready(function() {
  $(".panorama").panorama_viewer({
    repeat: true
  });
});
