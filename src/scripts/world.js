import Invader from './invader';
import {getElement} from './utils';
import Player from './player';

class World {
    constructor(invR, invC, element = 'world'){
        this.element = element;
        this.invGroupEl = 'invadersGroup';
        this.invR = invR;
        this.invC = invC;
        this.totalInvaders = invR*invC;
        this.addWorld();
        this.docWidth = getElement(this.element).clientWidth;
        this.docHeight = getElement(this.element).clientHeight;
        this.centerStageX = this.docWidth /2;
        this.playerStageY = this.docHeight - 10;
        this.invadersGrid = this.generateInvaders(this.invR, this.invC);
        this.player = new Player('player', this.centerStageX, this.playerStageY, this.element);
    }

    addWorld() {
        const body  = document.getElementsByTagName('body');
        const worldStyles = `position: absolute;
                                 width: calc(100vw );
                                 height: calc(100vh );
                                 box-sizing: border-box;
                                 top:0;
                                 left:0;
                                 overflow: hidden;
                                 background: black;`;
        if(body.length > 0){
            const world = document.createElement('div');
            world.setAttribute('id', this.element);
            body[0].appendChild(world);
            world.style.cssText = worldStyles;
        }
    }

    generateInvaders(rows, cols) {
        let arr = new Array(rows);
        
        for(let r=0; r<rows; r++) {
          arr[r] = [];

            for(let c=0; c<cols; c++) {
                arr[r].push( new Invader(`${r+''+c}`, r, c, this.element, this.invC));
            }
        }
        return arr;
      }


      

}

export default World;