import {
    getElement
} from './utils';

class Player {
    constructor(id, x, y, parentElement) {
        this.playerSize = getElement(parentElement).clientWidth * 0.035;

        this.id = id;
        this.x = x - (this.playerSize / 2);
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
                                 border: 1px solid cyan;`;

        const player = document.createElement('div');
        player.setAttribute('id', this.id);
        parent.appendChild(player);
        player.style.cssText = playerstyles;
        player.innerHTML = this.addSVG();

    }

    action(action, boundaries) {

        switch (action) {
            case 'left':
            case 'right':
                this.move(action, boundaries);
                break;
            case 'space':
                this.shoot();
                break;
        }
    }

    move(direction, boundaries) {

        if (direction === 'left' && this.x > boundaries.left) {
            this.x -= 10;
            getElement(this.id).style.left = this.x + 'px';
        }
        if (direction === 'right' && this.x < boundaries.right) {
            this.x += 10;
            getElement(this.id).style.left = this.x + 'px';
        }

    }

    addSVG() {
        const playerSVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="-19.483 0 259.968 160.131" enable-background="new -19.483 0 259.968 160.131"
	 xml:space="preserve" class="player">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M120.499,0.527c0,6.534,0,13.067,0,19.602
	c0,0.61,0.229,0.396,0.75,0.396c0.375,0,0.75,0,1.125,0c0.767,0,1.532,0,2.299,0c1.695,0,3.391,0,5.086,0c3.313,0,6.626,0,9.938,0
	c0.508,0,0.799-0.224,0.799,0.375c0,0.375,0,0.75,0,1.125c0,0.75,0,1.5,0,2.25c0,1.545,0,3.089,0,4.634c0,3.233,0,6.468,0,9.701
	c0,6.637,0,13.273,0,19.91c0,0.4,0,0.8,0,1.2c0,0.508-0.224,0.8,0.375,0.8c0.75,0,1.5,0,2.25,0c1.717,0,3.434,0,5.15,0
	c3.316,0,6.632,0,9.947,0c6.633,0,13.264,0,19.896,0c12.689,0,25.379,0,38.068,0c0.781,0,1.564,0,2.348,0c0.391,0,0.781,0,1.173,0
	c0.526,0,0.782-0.222,0.782,0.396c0,1.716,0,3.431,0,5.146c0,3.299,0,6.597,0,9.895c0,1.521,0,3.042,0,4.563
	c1.733,0,3.467,0,5.199,0c3.334,0,6.666,0,9.999,0c1.489,0,2.978,0,4.466,0c0.542,0,0.334,0.293,0.334,0.749c0,0.375,0,0.75,0,1.125
	c0,0.875,0,1.75,0,2.625c0,3.089,0,6.179,0,9.268c0,6.507,0,13.014,0,19.521c0,13.192,0,26.386,0,39.578c0,1.583,0,3.166,0,4.749
	c0,0.792,0,1.583,0,2.375c-0.913,0-1.826,0-2.739,0c-3.286,0-6.573,0-9.859,0c-6.665,0-13.331,0-19.997,0
	c-26.598,0-53.193,0-79.791,0c-26.596,0-53.192,0-79.789,0c-13.265,0-26.53,0-39.795,0c-6.666,0-13.332,0-19.998,0
	c-1.6,0-3.2,0-4.799,0c-0.8,0-1.6,0-2.4,0c-0.507,0-0.8,0.224-0.8-0.375c0-0.499,0-0.999,0-1.499c0-3.277,0-6.555,0-9.832
	c0-13.193,0-26.386,0-39.579c0-6.635,0-13.271,0-19.905c0-1.6,0-3.2,0-4.8c0-0.777,0-1.556,0-2.333c0-0.333,0-0.667,0-1
	c0-0.742,0.013-0.666,0.75-0.666c3.228,0,6.456,0,9.684,0c1.588,0,3.176,0,4.765,0c0.8,0,1.6,0,2.4,0c0.4,0,0.8,0,1.2,0
	c0.267,0,0.533,0,0.8,0c0.392,0.134,0.525,0.009,0.4-0.375c0-3.243,0-6.486,0-9.729c0-3.187,0-6.373,0-9.561
	c0-0.541,0.293-0.333,0.75-0.333c0.375,0,0.75,0,1.125,0c0.75,0,1.5,0,2.25,0c1.667,0,3.333,0,5,0c12.734,0,25.469,0,38.204,0
	c6.596,0,13.193,0,19.789,0c3.298,0,6.597,0,9.895,0c0.771,0,1.542,0,2.313,0c0.484,0,0.667,0.192,0.667-0.375
	c0-0.375,0-0.75,0-1.125c0-1.541,0-3.083,0-4.624c0-6.402,0-12.804,0-19.206c0-3.298,0-6.597,0-9.895c0-1.479,0-2.958,0-4.438
	c0-0.552,0.336-0.333,0.8-0.333c0.4,0,0.8,0,1.2,0c0.933,0,1.866,0,2.8,0c4.566,0,9.132,0,13.698,0c0.5,0,1,0,1.5,0
	c0-0.652,0-1.304,0-1.956c0-1.174,0-2.348,0-3.521c0-2.316,0-4.633,0-6.949c0-2.273,0-4.547,0-6.82c0-0.25,0-0.5,0-0.75
	c0.261,0,0.521,0,0.782,0c0.652,0,1.304,0,1.957,0c1.174,0,2.347,0,3.521,0C111.341,0.527,115.92,0.527,120.499,0.527"/>
    </svg>`;
        return playerSVG;
    }

}

export default Player;