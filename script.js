document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    
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