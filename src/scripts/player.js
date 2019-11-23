import {getElement} from './utils';

class Player {
    constructor(id, x, y, parentElement){
        this.playerSize = getElement(parentElement).clientWidth * 0.035;

        this.id = id;
        this.x = x - (this.playerSize /2);
        this.y = y - this.playerSize;
        this.parentElement = parentElement;
        this.width = this.playerSize;
        this.height = this.playerSize;
        this.initiate();
    }

    initiate() {
        const parent = getElement(this.parentElement);
        const playerstyles = `position: absolute;
                                 width: ${this.width+'px'};
                                 height: ${this.height+'px'};
                                 box-sizing: border-box;
                                 top:${this.y+'px'};
                                 left:${this.x+'px'};
                                 overflow: hidden;
                                 border: 1px solid cyan;
                                 background: grey;`;
        
        const player = document.createElement('div');
        player.setAttribute('id', this.id);
        parent.appendChild(player);
        player.style.cssText = playerstyles;
        
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

export default Player;