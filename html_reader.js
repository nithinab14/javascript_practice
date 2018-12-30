function readHTMLFile() {
  var file = document.currentScript.getAttribute('fileName');
  var allText = null;
  if (file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if(rawFile.readyState === 4)
      {
        if(rawFile.status === 200 || rawFile.status == 0) {
          allText = rawFile.responseText;
        }
      }
    }
    rawFile.send(null);
  }
  document.write(allText);
}

readHTMLFile();
