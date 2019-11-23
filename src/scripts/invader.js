import {getElement, offsetElement} from './utils';

class Invader {
    constructor(id, row, col, worldElement, totalCols){
        this.invadersSize = getElement(worldElement).clientWidth * 0.040;
        const SPACING = 5;
        this.initialXPos = (getElement(worldElement).clientWidth / 2) - ((totalCols * (this.invadersSize + SPACING)) / 2 ) - ((this.invadersSize + SPACING));
         
        this.id = id;
        this.width = this.invadersSize;
        this.height = this.invadersSize;
        this.top = row * this.invadersSize + SPACING;
        // if(col === 0) {
        //     this.left = this.initialXPos;

        // // } else if(col === 1) {
        // //     this.prevPos = this.initialXPos + this.invadersSize + SPACING;
        // //     this.left = this.prevPos;
        // } else {
            let prevPos = this.initialXPos + (col * (this.invadersSize + SPACING));
            this.left = prevPos + this.invadersSize + SPACING;
        // }
        this.worldElement = worldElement;
        this.initiate();
    }

    initiate() {
        const world = getElement(this.worldElement);
        const invadertyles = `position: absolute;
                                 width: ${this.width+'px'};
                                 height: ${this.height+'px'};
                                 box-sizing: border-box;
                                 top:${this.top+'px'};
                                 left:${this.left+'px'};
                                 overflow: hidden;
                                 border: 1px solid green;
                                 background: pink;`;
        
        const invader = document.createElement('div');
        invader.setAttribute('id', 'inv' + this.id);
        world.appendChild(invader);
        invader.style.cssText = invadertyles;

        this.x = offsetElement(getElement('inv' + this.id)).left;
        this.y = offsetElement(getElement('inv' + this.id)).top;
        
    }

    move(direction, boundaries){
        //loopar na rray e pegar o invader com xPos maior que todos
        //loopar na array e pegar o invader com yPos maior que todos
        // boundaries para movimento serao esses valores


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

export default Invader;