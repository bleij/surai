var darkThemeEnabled = false;

function toggleTheme() {
  var themeStyle = document.getElementById('theme-style');

  if (darkThemeEnabled) {
    themeStyle.href = 'css/light-theme.css';
  } else {
    themeStyle.href = 'css/dark-theme.css';
  }

  darkThemeEnabled = !darkThemeEnabled;
}
