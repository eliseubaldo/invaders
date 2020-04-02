import Invader from './invader';
import {getElement} from './utils';
import Player from './player';
import Shot from './shot';
import {collisionCheck, getRandomInvader} from './utils';

class World {
    constructor(invR, invC, element = 'world') {
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
        this.invadersPace = 40;
        this.shooting = false;
        this.invaderShot = [];
        this.invaderShotAcc = 0;
        this.playerLives = 2;
        this.invadersDown = 0;
        this.invadersSpeed = 0;
        this.invadersThirds = [Math.floor(this.totalInvaders * 0.3), Math.floor(this.totalInvaders * 0.6), Math.floor(this.totalInvaders * 0.9)];
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
        const firstRows = Math.floor((rows/2) + 1);
        for(let r=0; r<rows; r++) {
          arr[r] = [];

            for(let c=0; c<cols; c++) {
                arr[r].push( new Invader(`${r+''+c}`, r, c, this.element, this.invC, firstRows));
            }
        }
        return arr;
      }

    moveInvaders(direction) {
        let movingDirection;
        if (direction === 'right') {
            let bigger = 0;
            for (let i = 0; i < this.invadersGrid.length; i++) {
                for (let b = 0; b < this.invadersGrid[i].length; b++) {
                    if (this.invadersGrid[i][b].rightEdgePos > bigger) bigger = this.invadersGrid[i][b].rightEdgePos;
                }
            }

            if (bigger + this.invadersPace > this.docWidth) {
                movingDirection = 'left';
                this.updateInvadersGrid('left');
            } else {
                this.updateInvadersGrid('right');
                movingDirection = 'right';
            }
            console.log('biger:',bigger);
        }

        if (direction === 'left') {
            let smaller = this.invadersGrid[0][0].left;
            for (let i = 0; i < this.invadersGrid.length; i++) {
                for (let b = 0; b < this.invadersGrid[i].length; b++) {
                    if (this.invadersGrid[i][b].left < smaller) smaller = this.invadersGrid[i][b].left;
                }
            }

            if (smaller - this.invadersPace < 0) {
                movingDirection = 'right';
                this.updateInvadersGrid('right');
            } else {
                this.updateInvadersGrid('left');
                movingDirection = 'left';
            }
            console.log('smaller:',smaller);
        }

        this.updateInvadersView();
        return movingDirection;
    }

    updateInvadersGrid(direction) {
        if(direction === 'right') {
            for (let i = 0; i < this.invadersGrid.length; i++) {
                for (let b = 0; b < this.invadersGrid[i].length; b++) {
                    this.invadersGrid[i][b].left += this.invadersPace;
                    this.invadersGrid[i][b].rightEdgePos += this.invadersPace;
                    this.invadersGrid[i][b].x += this.invadersPace;
                }
            }
        }

        if(direction === 'left') {
            for (let i = 0; i < this.invadersGrid.length; i++) {
                for (let b = 0; b < this.invadersGrid[i].length; b++) {
                    this.invadersGrid[i][b].left -= this.invadersPace;
                    this.invadersGrid[i][b].rightEdgePos -= this.invadersPace;
                    this.invadersGrid[i][b].x -= this.invadersPace;
                }
            }
        }
    }

    updateInvadersView() {
        for (let i = 0; i < this.invadersGrid.length; i++) {
            for (let b = 0; b < this.invadersGrid[i].length; b++) {        
                const invader = getElement('inv' + this.invadersGrid[i][b].id);
                invader.style.left = this.invadersGrid[i][b].left + 'px';
            }
        }
    }

    shoot() {
        // se nao estiver atirando, adiciona o tiro e move.
        if(!this.shooting) {
            console.log('atirando');
            this.addPlayerShot();
            this.shooting = true;
        } else {
            // se o tiro foi adicionado,move-lo ate o fim ou colisao e retornar falso ao final
            this.movePlayerShot();
            //this.shooting = false;
        }
        
        return this.shooting;
        
    }
    
    addPlayerShot() {
        this.playerShot = new Shot('playershot', this.player.x, this.player.y, this.element, this.player.playerSize);
    }

    movePlayerShot() {
        this.playerShot.y -= 5;
        const playerShot = getElement('playershot');
        playerShot.style.top = this.playerShot.y + 'px';
        
        if (this.playerShot.y < 0) {
            playerShot.remove();
            this.playerShot = undefined;
            this.shooting = false;
        }
        this.colisionCheck();
    }
    
    addInvaderShot(currentAmount) {
        const rndInv = getRandomInvader(this.invadersGrid);
        console.log('rnd inv:',rndInv);
        if (currentAmount < 2) {
            this.invaderShot.push(new Shot('iShot'+ this.invaderShotAcc, rndInv.x, rndInv.y, this.element, this.player.playerSize));
            this.invaderShotAcc ++;
            return ++currentAmount;
        } else {
            return currentAmount;
        }
    }

    moveInvaderShot() {
        this.invaderShot.forEach((shot, index) => {
            shot.y += 5;
            const shotEl = getElement(shot.id);
            shotEl.style.top = shot.y + 'px';
            
            if (shot.y > 1000) {
                this.invaderShot.splice(index,1);
                shotEl.remove();
                return this.invaderShot.length;
                //this.shooting = false;
            }
            this.colisionCheck();
        });
        return this.invaderShot.length;
    }


    colisionCheck() {
        // playershot
        if(this.playerShot) {
            this.invadersGrid.forEach((row, ia)=> {
                    row.forEach((col, ib)=> {
                        if (this.playerShot) {
                            if(collisionCheck(this.playerShot, col)) {
                                console.log('collision to:', col);
                                const playerShot = getElement('playershot');
                                if (playerShot) { playerShot.remove(); };
                                this.playerShot = undefined;
                                this.shooting = false;
                                const invader = getElement('inv' + col.id);
                                invader.remove();
                                this.removeInvaderFromGrid(ia, ib);
                                this.updateInvadersSpeed();
                            }
                        }
                    });
            });
        }

        if (this.invaderShot.length > 0) {
            this.invaderShot.forEach(shot => {
                if(collisionCheck(this.player, shot)) {
                   this.updatePlayerStatus();

                }
            });
        }
        
        
    }

    updatePlayerStatus() {
        const player = getElement('player');
         if (player) { player.remove(); };
         this.playerLives --;
         if (this.playerLives > 0) {
            this.player = new Player('player', this.centerStageX, this.playerStageY, this.element);
         } else {
             console.log('GAME OVER');
         }
    }

    removeInvaderFromGrid(indexRow, indexCol) {
        this.invadersGrid[indexRow].splice(indexCol,1);
        if (this.invadersGrid[indexRow].length === 0) {
            this.invadersGrid.splice(indexRow,1);
        }

    }

    updateInvadersSpeed() {
        this.invadersDown ++;
        console.log(this.invadersDown,this.invadersThirds[0], this.invadersThirds[1], this.invadersThirds[2] );
        if (this.invadersDown >= this.invadersThirds[0]) {
            this.invadersSpeed = 200;
        } 
        if (this.invadersDown >= this.invadersThirds[1]) {
            this.invadersSpeed = 450;
        }
        if (this.invadersDown >= this.invadersThirds[2]) {
            this.invadersSpeed = 651;
        }

    }


      

}

export default World;