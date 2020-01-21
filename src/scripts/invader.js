import {getElement, offsetElement} from './utils';

class Invader {
    constructor(id, row, col, worldElement, totalCols){
        this.size = getElement(worldElement).clientWidth * 0.040;
        const SPACING = 5;
        this.initialXPos = (getElement(worldElement).clientWidth / 2) - ((totalCols * (this.size + SPACING)) / 2 ) - ((this.size + SPACING));
         
        this.id = id;
        this.width = this.size;
        this.height = this.size;
        this.top = row * this.size + SPACING;
        // if(col === 0) {
        //     this.left = this.initialXPos;

        // // } else if(col === 1) {
        // //     this.prevPos = this.initialXPos + this.invadersSize + SPACING;
        // //     this.left = this.prevPos;
        // } else {
            let prevPos = this.initialXPos + (col * (this.size + SPACING));
            this.left = prevPos + this.size + SPACING;
        // }
        this.rightEdgePos = this.left + this.size; 
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

}

export default Invader;