document.addEventListener('DOMContentLoaded', () => {
    const backendResponseElement = document.getElementById('backendResponse');
    
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        backendResponseElement.textContent = `Backend says: ${data.message}`;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
  