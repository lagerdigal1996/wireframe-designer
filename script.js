document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    
    function clearCanvas() {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Your wireframe logic here
});