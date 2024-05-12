document.addEventListener('DOMContentLoaded', function() {
  // I made this so the description of products won't be too long
    var descriptionItems = document.getElementsByClassName('product-descriptionlimit');
    var maxLength = 60; // Change this value to set the character limit
  
    for (var i = 0; i < descriptionItems.length; i++) {
      var item = descriptionItems[i];
      var originalText = item.innerHTML;
  
      if (originalText.length > maxLength) {
        var truncatedText = originalText.substring(0, maxLength) + '...';
        item.innerHTML = truncatedText;
      }
    }
});