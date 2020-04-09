import World from './world';
import {shouldInvaderShot, getElement} from './utils';

class MainControl {
    constructor(){
        this.interval = undefined;
        this.initiate(5,11);

        this.state = {
            pressedKeys: {
                left: false,
                right: false,
                up: false,
                down: false,
                space: false
              },
            worldBoundaries: {
                left: 0,
                right: this.world.docWidth
            },
            shooting: false,
            invadersMovDirection: 'right',
            invadersShotAmount: 0,
            invadersSpeed: 0
        };

        
        
    }

    initiate(invR, invC) {
        this.world = new World(invR, invC);
        this.attachListeners(this);
        this.invaderMove(1000);
    }

    update(progress) {

        if (this.state.pressedKeys.left) {
            if (this.world.player) {
                this.world.player.action('left', this.state.worldBoundaries);
            }
        }
        if (this.state.pressedKeys.right) {
            if (this.world.player) {
            this.world.player.action('right', this.state.worldBoundaries);
            }
        }
        if (this.state.pressedKeys.space) {
            this.state.shooting = true;
        }

        if (this.state.shooting) {
            this.state.shooting = this.world.shoot();
        }

        this.state.invadersShotAmount  = this.world.moveInvaderShot();

        if (this.state.invadersSpeed != this.world.invadersSpeed) {
            this.state.invadersSpeed = this.world.invadersSpeed;
            this.updatedInvadersSpeed(this.state.invadersSpeed);
        };

        if (this.world.playerLives === 0) {
            // game over
            // this.removeListeners(this);

            this.showGameOver();
        };

        if (this.world.isGameOver) {
            this.showGameOver();
        }

        if (this.world.isGameWin) {
            this.showGameWin();
        }

        this.updatePanel();

    }

    // Listeners
    attachListeners(control) {
        let keyMap = {
            68: 'right',
            65: 'left',
            87: 'up',
            83: 'down',
            37: 'left',
            39: 'right',
            32: 'space'

        };
        document.addEventListener('keydown', function _listener(event) {
            let key = keyMap[event.keyCode];
            control.state.pressedKeys[key] = true;
        }, false);

        document.addEventListener('keyup', function _listener(event) {
            let key = keyMap[event.keyCode];
            control.state.pressedKeys[key] = false;
        }, false);
    }

    invaderMove(seconds) {
        let control = this;
        this.interval = setInterval(function() {
                control.state.invadersMovDirection = control.world.moveInvaders(control.state.invadersMovDirection);
                // mover os invaders e passar this.state.worldBoundaries
                if (control.state.invadersShotAmount < 2) {
                    if (shouldInvaderShot()) {
                        control.state.invadersShotAmount = control.world.addInvaderShot(control.state.invadersShotAmount);
                    }
                }
                
            }, seconds);
    }

    updatedInvadersSpeed(newSpeed) {
        clearInterval(this.interval);
        this.invaderMove(1000 - newSpeed);

    }


    showGameOver() {
        clearInterval(this.interval);
        const gameoverPanel = getElement('gameover');
        gameoverPanel.style.display = 'flex';   
    }

    showGameWin() {
        clearInterval(this.interval);
        const gameoverPanel = getElement('gamewin');
        gameoverPanel.style.display = 'flex';
        
    }

    updatePanel() {
        const playerLives = getElement('playerlives');
        playerLives.innerHTML = this.world.playerLives;
    }
   

}

export default MainControl;