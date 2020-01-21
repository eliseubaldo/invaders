import {getElement} from './utils';

class Shot {
    constructor(id, x, y, parentElement, originWidth){
        this.size = getElement(parentElement).clientWidth * 0.015;
        this.originWidth = originWidth;
        this.id = id;
        this.x = x ;
        this.y = y ;
        this.parentElement = parentElement;
        this.width = this.size;
        this.height = this.size;
        this.initiate();
    }

    initiate() {
        const parent = getElement(this.parentElement);
        const shotstyles = `position: absolute;
                                 width: ${this.width+'px'};
                                 height: ${this.height+'px'};
                                 box-sizing: border-box;
                                 top:${this.y - this.size +'px'};
                                 left:${this.x + (this.originWidth / 2 - this.size / 2) +'px'};
                                 overflow: hidden;
                                 border: 1px solid green;
                                 background: yellow;`;
        
        const shot = document.createElement('div');
        shot.setAttribute('id', this.id);
        parent.appendChild(shot);
        shot.style.cssText = shotstyles;
        
    }

    action(action, boundaries) {

        switch(action){
            case 'left':
            case 'right':
               this.move(action, boundaries);
            break;
            case 'space':
                this.shoot();
            break;
        }
    }

    move(direction, boundaries){
        
        if(direction === 'left' && this.x > boundaries.left) {
            this.x -= 10;
            getElement(this.id).style.left = this.x+'px';
        }
        if(direction === 'right' && this.x < boundaries.right) {
            this.x += 10;
            getElement(this.id).style.left = this.x+'px';
        }
        
    }

}

export default Shot;