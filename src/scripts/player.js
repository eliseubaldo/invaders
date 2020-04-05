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
        console.log('added Y:', this.y);
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
                                 // border: 1px solid cyan;`;

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
	  viewBox="0 0 100 100" enable-background="new 0 0 100 100"
	 xml:space="preserve" class="player">
     <g>
     <g>
         <path fill="#4678AD" d="M49.805,61.737c-0.995-3.53-9.583-4.2-19.183-1.496c-9.599,2.704-25.194,23.84-24.2,27.37
             c0.995,3.531,9.583,4.199,19.182,1.496C35.203,86.403,50.801,65.268,49.805,61.737z"/>
         <path fill="#4678AD" d="M50.193,61.737c0.995-3.53,9.583-4.2,19.182-1.496s25.195,23.84,24.202,27.37
             c-0.997,3.531-9.585,4.199-19.185,1.496C64.796,86.403,49.198,65.268,50.193,61.737z"/>
         <path fill="#4678AD" d="M69.451,59.438c0,0-12.538-57.276-19.542-57.276c-7.005,0-18.355,57.276-18.355,57.276
             c-2.9,0-5.253,7.42-5.253,10.322v10.265h0.003c0.038,1.19,2.373,4.136,5.25,4.136c0,0,11.944,14.631,18.949,14.631
             c7.004,0,18.948-14.631,18.948-14.631c2.878,0,5.212-2.946,5.25-4.136h0.002V69.761C74.703,66.859,72.352,59.438,69.451,59.438z"
             />
         <path fill="#E0E0E0" d="M50.346,47.633c2.626,0,10.833-5.318,10.833-5.318S53.865,8.903,49.781,8.903
             c-4.086,0-10.707,33.412-10.707,33.412S47.719,47.633,50.346,47.633z"/>
     </g>
     <g>
         <path fill="#005F94" d="M69.731,57.352c-3.36,0-6.084,8.593-6.084,11.954v11.886h0.005c0.043,1.379,2.746,4.789,6.079,4.789
             s6.034-3.41,6.08-4.789h0.002V69.306C75.813,65.944,73.09,57.352,69.731,57.352z"/>
         <path d="M69.731,78.923c-2.182,0-3.952,0.377-3.952,2.559v0.561h0.002c0.031,0.896,1.783,3.11,3.95,3.11
             c2.165,0,3.92-2.215,3.948-3.11h0.005v-0.561C73.685,79.3,71.912,78.923,69.731,78.923z"/>
         <g>
             <path fill="#CE3045" d="M69.774,79.928c0.843,0,2.853,0.265,2.853,1.354c0,1.091-1.734,8.072-2.804,8.072
                 c-1.072,0-2.989-6.892-2.989-8.072C66.834,80.103,68.933,79.928,69.774,79.928z"/>
             <path fill="#FFDD00" d="M69.768,80.825c0.68,0,2.309,0.215,2.309,1.098c0,0.882-1.403,6.533-2.271,6.533
                 c-0.867,0-2.417-5.577-2.417-6.533S69.084,80.825,69.768,80.825z"/>
         </g>
     </g>
     <g>
         <path fill="#005F94" d="M31.173,57.352c-3.36,0-6.083,8.593-6.083,11.954v11.886h0.004c0.044,1.379,2.747,4.789,6.08,4.789
             s6.035-3.41,6.078-4.789h0.005V69.306C37.256,65.944,34.532,57.352,31.173,57.352z"/>
         <path d="M31.173,78.923c-2.183,0-3.953,0.377-3.953,2.559v0.561h0.004c0.028,0.896,1.783,3.11,3.949,3.11
             c2.165,0,3.92-2.215,3.948-3.11h0.003v-0.561C35.125,79.3,33.354,78.923,31.173,78.923z"/>
         <g>
             <path fill="#CE3045" d="M31.216,79.928c0.842,0,2.854,0.265,2.854,1.354c0,1.091-1.736,8.072-2.806,8.072
                 c-1.072,0-2.989-6.892-2.989-8.072C28.275,80.103,30.374,79.928,31.216,79.928z"/>
             <path fill="#FFDD00" d="M31.208,80.825c0.682,0,2.31,0.215,2.31,1.098c0,0.882-1.405,6.533-2.271,6.533
                 c-0.867,0-2.419-5.577-2.419-6.533S30.526,80.825,31.208,80.825z"/>
         </g>
     </g>
 </g>
    </svg>`;
        return playerSVG;
    }

}

export default Player;