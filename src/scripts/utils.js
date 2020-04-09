import playerShot from '../sounds/playershot.wav';
import invaderexplodes from '../sounds/explodes.wav';
import invadershot from '../sounds/virusshot.wav';
import playerexplodes from '../sounds/playerexplodes.wav';


export function getElement(name) {
    return document.getElementById(name);
  }

export function offsetElement(el) {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

export function collisionCheck(objA, objB) {
  if(objA.x < objB.x + objB.width && 
    objA.x + objA.width > objB.x && 
    objA.y < objB.y + objB.height && 
    objA.y + objA.height > objB.y) {
    return true;  
    } else return false;
}

export function shouldInvaderShot() {
  const rnd = Math.random() * 10;
  return rnd < 5;
}

export function getRandomInvader(invaderGrid) {
  const rndRow = Math.floor(Math.random() * invaderGrid.length);
  const rndCol = Math.floor(Math.random() * invaderGrid[rndRow].length);
  return invaderGrid[rndRow][rndCol];
}

export function playsound(soundname) {
  let sound;
  switch (soundname) {
    case 'playershot':
      sound = new Audio(playerShot);
      sound.play();
    break;
    case 'invadershot':
      sound = new Audio(invadershot);
      sound.play();
    break;
    case 'invaderexplodes':
      sound = new Audio(invaderexplodes);
      sound.play();
    break;
    case 'playerexplodes':
      sound = new Audio(playerexplodes);
      sound.play();
    break;

  
    default:  
      break;
  }
}