fetch('../Other/LightwebHistory.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('fileContent').textContent = data;
  })
 