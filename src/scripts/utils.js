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
