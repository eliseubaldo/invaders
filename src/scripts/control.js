import World from './world';
import {shouldInvaderShot} from './utils';

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
            invadersShotAmount: 0
        };

        
        
    }

    initiate(invR, invC) {
        this.world = new World(invR, invC);
        console.log(this.world.invadersGrid);
        this.attachListeners(this);
        this.invaderMove(1000);
        console.log('inernval:', this.interval);
    }

    update(progress) {

        if (this.state.pressedKeys.left) {
            this.world.player.action('left', this.state.worldBoundaries);
        }
        if (this.state.pressedKeys.right) {
            this.world.player.action('right', this.state.worldBoundaries);
        }
        if (this.state.pressedKeys.space) {
            this.state.shooting = true;
        }

        if (this.state.shooting) {
            this.state.shooting = this.world.shoot();
        }

        this.state.invadersShotAmount  = this.world.moveInvaderShot();

        if (this.world.playerLives === 0) {
            // game over
            // this.removeListeners(this);

            this.showGameOver();
        };

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
        console.log('isso:', this);
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


    showGameOver() {
        this.terminate();     
    }

    terminate() {
        clearInterval(this.interval);
        
    }
   

}

export default MainControl;