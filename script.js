window.addEventListener('load', ()=>{
    const canvas = document.getElementById('whiteboard-canvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    canvas.height = window.innerHeight*0.8;
    canvas.width = window.innerWidth*0.8 ;

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x : evt.clientX - rect.left,
            y : evt.clientY - rect.top
        }
    }

    function startPosition(e){
        painting = true;
        const pos = getMousePos(canvas,e);
        ctx.beginPath();
        ctx.moveTo(pos.x,pos.y);
    }
    function finishedPosition() {
        painting = false;
    }
    function draw(e){
        if(!painting) return;
        const pos = getMousePos(canvas,e);
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.stokeStyle = 'black';

        ctx.lineTo(pos.x,pos.y);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove',draw);

});