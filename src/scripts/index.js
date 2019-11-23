import '../styles/index.scss';
import MainControl from './control';


let control = new MainControl();

let lastRender = 0;
window.requestAnimationFrame(loop);

  
function loop(timestamp) {
    let progress = timestamp - lastRender;
    
    control.update(progress);
    control.draw();
    
    lastRender = timestamp;
    window.requestAnimationFrame(loop);
}