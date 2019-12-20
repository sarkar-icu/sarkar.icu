window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('more-info-container').style.display = "none";
  document.getElementById('more-info').addEventListener('click', function () {
    document.getElementById('more-info').style.display = "none";
    document.getElementById('more-info-container').style.display = "block";
  })
});
