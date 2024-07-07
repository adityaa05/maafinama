document.addEventListener('DOMContentLoaded', function() {
    var coverPage = document.getElementById('cover-page');
    var mainContent = document.getElementById('main-content');
    var enterBtn = document.getElementById('enter-btn');
  
    enterBtn.addEventListener('click', function() {
      coverPage.style.display = 'none';
      mainContent.style.display = 'block';
    });
  });