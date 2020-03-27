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
  console.log('the grid:', invaderGrid);
  const rndRow = Math.floor(Math.random() * invaderGrid.length);
  const rndCol = Math.floor(Math.random() * invaderGrid[rndRow].length);
  return invaderGrid[rndRow][rndCol];
}