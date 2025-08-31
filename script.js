document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    
    function clearCanvas() {
        const context = canvas.getContext('2d');
        if (!context) {
            console.error('Failed to get canvas context');
            return;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Your wireframe logic here
});