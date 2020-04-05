import {getElement} from './utils';

class Shot {
    constructor(id, x, y, parentElement, originWidth){
        this.size = getElement(parentElement).clientWidth * 0.015;
        this.originWidth = originWidth;
        this.id = id;
        this.x = x ;
        this.y = y ;
        this.parentElement = parentElement;
        this.width = this.size;
        this.height = this.size;
        this.initiate();
    }

    initiate() {
        const parent = getElement(this.parentElement);
        const shotstyles = `position: absolute;
                                 width: ${this.width+'px'};
                                 height: ${this.height+'px'};
                                 box-sizing: border-box;
                                 top:${this.y + 'px'};
                                 left:${this.x + (this.originWidth / 2 - this.size / 2) +'px'};
                                 overflow: hidden;
                                 // border: 1px solid green;`;
                                 
        const shot = document.createElement('div');
        shot.setAttribute('id', this.id);
        parent.appendChild(shot);
        shot.style.cssText = shotstyles;
        if (this.id === 'playershot') {
            shot.innerHTML = this.addplayerShotSVG();
        } else {
            shot.innerHTML = this.addinvaderShotSVG();
        }
        
    }

    addplayerShotSVG() {
        const SVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="0 0 20.113 47.327" enable-background="new 0 0 20.113 47.327"
	 xml:space="preserve" class="shot">
     <g>
     <path fill="#4678AD" d="M10.057,0C4.503,0,0,14.206,0,19.76v19.65h0.007c0.072,2.279,4.54,7.918,10.05,7.918
         s9.979-5.639,10.051-7.918h0.006V19.76C20.113,14.205,15.611,0,10.057,0z"/>
 </g>
    </svg>`;
        return SVG;
    }

    addinvaderShotSVG() {
        const SVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 89.167 70" enable-background="new 0 0 89.167 70" xml:space="preserve">
   <path fill="#EC148E" stroke="#3FFF42" stroke-width="5" d="M9.359,24.091l25.157-2.804c0.302-0.412,0.603-0.804,0.909-1.179
       c0.797-0.979,1.917-2.251,3.511-3.422c1.45-1.065,2.845-1.729,4.125-2.12l5.357-8.343l2.133,7.836
       c0.514,0.023,1.022,0.084,1.523,0.184l5.379-5.123l0.02,4.227l4.354-1.919l-1.726,4.427l22.459-7.963l-17.789,19.42l14.935,6.686
       l-24.076,5.692c-0.198,0.307-0.409,0.607-0.631,0.899l-0.77,1.854l-0.665-0.244c-1.462,1.406-2.891,2.178-3.862,2.645l-0.254,0.121
       c-0.354,0.17-0.84,0.401-1,0.498c-0.064,0.042-0.158,0.104-0.258,0.167c-0.786,0.508-2.101,1.357-3.804,1.996
       c-0.942,0.354-1.903,0.593-2.855,0.711l-13.426,13.78L31.2,45.452l-5.549,1.383l3.208-4.571l-3.479,0.048l2.888-3.232l-2.912-0.268
       l1.943-2.522l-1.063-0.408l1.611-1.583L9.471,28.499l5.47-1.507L9.359,24.091L9.359,24.091z"/>
   </svg>`;
        return SVG;
    }


    

}

export default Shot;