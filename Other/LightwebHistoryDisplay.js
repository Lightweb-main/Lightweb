fetch('../Other/LightwebHistory.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('fileContent').textContent = data;
  })
  .catch(err => {
    document.getElementById('fileContent').textContent = 'Error loading file.';
    console.error(err);
  });