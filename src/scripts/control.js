import World from './world';

class MainControl {
    constructor(){
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
            invadersMovDirection: 'right'
        };
        
    }

    initiate(invR, invC) {
        this.world = new World(invR, invC);
        console.log(this.world.invadersGrid);
        this.attachListeners(this);
        this.invaderMove(1000);
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

        this.world.colisionCheck();

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
        document.addEventListener('keydown', function (event) {
            let key = keyMap[event.keyCode];
            control.state.pressedKeys[key] = true;
        }, false);

        document.addEventListener('keyup', function (event) {
            let key = keyMap[event.keyCode];
            control.state.pressedKeys[key] = false;
        }, false);
    }

    invaderMove(seconds) {
       let control = this;
       let x = setInterval(function() {
            console.log('inv move, inv grid',control.world.invadersGrid);
            control.state.invadersMovDirection = control.world.moveInvaders(control.state.invadersMovDirection);
            // mover os invaders e passar this.state.worldBoundaries
            
        }, seconds);
    }
   

}

export default MainControl;