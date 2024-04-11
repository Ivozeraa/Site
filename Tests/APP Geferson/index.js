window.onload = function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const clearbttn = document.getElementById('clearBttn');

    let isDrawning = false;
    let lastX = 0
    let lastY = 0

    function draw(e){
        if(!isDrawning) return;
        ctx.strokeStyle = colorPicker.value;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsety);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsety];
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawning = true
        [lastX, lastY] = [e.offsetX, e.offsetY]
    })

    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => isDrawning = false)
    canvas.addEventListener('mouseout', () => isDrawning = false)

    clearbttn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    })
}