// get references to the list and preferences form
const list = document.getElementById('list-items');
const preferencesForm = document.getElementById('preferences-form');

// get the stored preferences from local storage or set default values
const storedTheme = localStorage.getItem('theme');
const storedListStyle = localStorage.getItem('list-style');
const theme = storedTheme || 'light';
const listStyle = storedListStyle || 'bullet';

// set the initial preferences on the form
const themeSelect = preferencesForm.elements['theme'];
const listStyleSelect = preferencesForm.elements['list-style'];
themeSelect.value = theme;
listStyleSelect.value = listStyle;

// set the initial theme and list style
setTheme(theme);
setListStyle(listStyle);


// add event listeners to the preferences form
preferencesForm.addEventListener('change', e => {
  if (e.target.name === 'theme') {
    setTheme(e.target.value);
  } else if (e.target.name === 'list-style') {
    setListStyle(e.target.value);
  }
});

// function to set the theme
function setTheme(theme) {
  // update the stored theme preference
  localStorage.setItem('theme', theme);
  
  // update the body class to apply the selected theme
  document.body.className = theme;
}

// function to set the list style
function setListStyle(listStyle) {
  // update the stored list style preference
  localStorage.setItem('list-style', listStyle);
  
  // update the list class to apply the selected list style
  list.className = listStyle;
}

