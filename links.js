function saveFile(url){

  // Create a new anchor element

  var link = document.createElement('a');

  link.href = url;

  // Set the download attribute to the filename of the file

  link.setAttribute('download', '');

  // Simulate a click on the anchor element to trigger the download

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}



