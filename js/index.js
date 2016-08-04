window.onload = function() { init(); };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1qEids1AmUGjCfeh6I42gdCv0F-1Lbi49gEVfY50c3Y0&output=html';

function init() {
  window.Tabletop.init({
    key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true });
}

function showInfo(data, tabletop) {
  var ul = document.createElement('ul');

  for (var i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    console.log(data);
    li.innerHTML = data[i].label;
    if (data[i].level === '0') {
      li.classList.add('main');
    }
    ul.appendChild(li);
  }
  document.getElementsByClassName('container')[0].appendChild(ul);
  document.getElementById('title').innerHTML = tabletop.googleSheetName;
}
