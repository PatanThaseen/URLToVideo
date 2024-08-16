document.getElementById('downloadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:8000/download', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const result = await response.json();
        console.log('Response:', result);
    } else {
        console.log('Error:', response.statusText);
    }
});
