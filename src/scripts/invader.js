import {getElement, offsetElement} from './utils';

class Invader {
    constructor(id, row, col, worldElement, totalCols){
        this.invadersSize = getElement(worldElement).clientWidth * 0.040;
        const SPACING = 10;
        this.initialXPos = (getElement(worldElement).clientWidth / 2) - ((totalCols * this.invadersSize) / 2 );
         
        this.id = id;
        this.width = this.invadersSize;
        this.height = this.invadersSize;
        this.top = row * this.invadersSize + SPACING;
        this.left = this.initialXPos + (col * this.invadersSize) + SPACING;
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