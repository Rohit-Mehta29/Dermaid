document.getElementById('photo').addEventListener('change', function(event) {
  const image = document.getElementById('uploadedImage');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';
});

document.getElementById('gallery').addEventListener('change', function(event) {
  const image = document.getElementById('uploadedImage');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.display = 'block';
});

document.getElementById('dermAidForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log('Form Data:', Object.fromEntries(formData.entries()));
  alert('Form submitted successfully!');
  window.location.href = 'results.html';
});
