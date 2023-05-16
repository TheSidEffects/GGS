window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var mainPage = document.getElementById('main-page');

    setTimeout(function() {
      loader.style.display = 'none';
      mainPage.style.display = 'block';
    }, 2000);
  });