    window.addEventListener('load', function () {
      var loadingPage = document.getElementById('loading-page');
      var mainPage = document.getElementById('main-page');

      var duration = 3500; //
      setTimeout(function () {
        loadingPage.style.display = 'none'; // Hide the loading page
        mainPage.style.display = 'block'; // Show the main page
      }, duration);
    });

    