import World from './world';

class MainControl {
    constructor(){
        this.initiate(5,11);

        this.state = {
            pressedKeys: {
                left: false,
                right: false,
                up: false,
                down: false
              }
        };
        
    }

    initiate(invR, invC) {
        this.world = new World(invR, invC);
        console.log(this.world.invadersGrid);
        this.attachListeners(this);
       
    }

    update(progress) {
        if (this.state.pressedKeys.left) {
            this.world.player.action('left');
            console.log(this.world.player);
            // state.x -= progress
          }
        
      }
      
    draw() {
    // Draw the state of the world
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
   

}

export default MainControl;