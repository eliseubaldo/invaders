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
        if (direction === 'right' && this.x + this.width < boundaries.right) {
            this.x += 10;
            getElement(this.id).style.left = this.x + 'px';
        }

    }

    addSVG() {
        const playerSVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="0 0 100 100" enable-background="new 0 0 100 100"
	 xml:space="preserve" class="player">
     <g class="ship">
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

 <g class="explosion">
<g stroke="null" id="svg_12">
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m2.00083,53.85546c4.2928,0 8.58561,0 12.87876,0c0.27112,0 0.54191,0 0.81303,0c0,0.25675 0,0.51315 0,0.7699c0,0.54191 0,1.08382 0,1.62606c0,1.07252 0,2.14503 0,3.21721c0,0.27386 0,0.54773 0,0.82125c0,0.13693 0,0.27386 0,0.4108c-0.12837,0 -0.25675,0 -0.38512,0c-0.57888,0 -1.1581,0 -1.73698,0c-1.14098,0 -2.28196,0 -3.42295,0c-2.52502,0 -5.05038,0 -7.57574,0c-0.11399,0 -0.22833,0 -0.34233,0c-0.25948,0 -0.22833,-0.01095 -0.22833,-0.2677c0,-0.31254 0,-0.62509 0,-0.93764c0,-0.62509 0,-1.24984 0,-1.87528c-0.00034,-1.25464 -0.00034,-2.50962 -0.00034,-3.76459" id="svg_1"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m77.3036,53.85546c4.42837,0 8.85673,0 13.2851,0c0.13556,0 0.27112,0 0.40669,0c0,0.12837 0,0.2564 0,0.38478c0,0.25675 0,0.51349 0,0.77024c0,0.52787 0,1.0554 0,1.58327c0,1.01808 0,2.03617 0,3.05426c0,0.26325 0,0.5265 0,0.79009c0,0.18041 0.07531,0.26325 -0.13659,0.26325c-0.13693,0 -0.2742,0 -0.4108,0c-0.59326,0 -1.18686,0 -1.78011,0c-1.14064,0 -2.28196,0 -3.42261,0c-2.50996,0 -5.02025,0 -7.53055,0c-0.13659,0 -0.27352,0 -0.41045,0c0,-0.13419 0,-0.2677 0,-0.4019c0,-0.31254 0,-0.62509 0,-0.93764c0,-0.62372 0,-1.24779 0,-1.87151c-0.00068,-1.21185 -0.00068,-2.42334 -0.00068,-3.63485" id="svg_2"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m29.38371,33.31813c0,-2.05363 0,-4.10726 0,-6.1609c0,-0.22833 0,-0.45633 0,-0.68466c0.25675,0 0.51349,0 0.77024,0c0.54191,0 1.08416,0 1.62606,0c1.04136,0 2.08239,0 3.12341,0c0.25195,0 0.50391,0 0.75586,0c0.11399,0 0.22833,0 0.34233,0c0.17356,0 0.22833,-0.06641 0.22833,0.13693c0,0.59291 0,1.18651 0,1.77977c0,1.12695 0,2.25389 0,3.38118c0,0.51589 0,1.03178 0,1.54767c0.59326,0 1.18651,0 1.77977,0c1.14098,0 2.28196,0 3.42295,0c0.50973,0 1.01945,0 1.52884,0c0.18554,0 0.11399,0.1003 0.11399,0.25675c0,0.12837 0,0.25675 0,0.38512c0,0.29954 0,0.59908 0,0.89861c0,1.00781 0,2.01563 0,3.02345c0,0.49741 0,0.99446 0,1.49187c0,0.26359 0,0.5265 0,0.79009c-0.31939,0 -0.63913,0 -0.95852,0c-1.14098,0 -2.28196,0 -3.42295,0c-0.54773,0 -1.09511,0 -1.64284,0c-0.27386,0 -0.54773,0 -0.82125,0c0,-0.29954 0,-0.59908 0,-0.89861c0,-1.1379 0,-2.27614 0,-3.41439c0,-0.54773 0,-1.09511 0,-1.64318c0,-0.25846 0,-0.51726 0,-0.77572c0,-0.17869 -0.076,-0.11434 -0.22833,-0.11434c-0.15199,0 -0.30433,0 -0.45633,0c-1.11257,0 -2.2248,0 -3.33737,0c-0.94175,0.00034 -1.88315,0.00034 -2.82421,0.00034" id="svg_3"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m56.76661,26.47257c2.0995,0 4.19866,0 6.29783,0c0.13659,0 0.27386,0 0.4108,0c0.21019,0 0.13659,0.07737 0.13659,0.25675c0,0.25675 0,0.51315 0,0.7699c0,0.53266 0,1.06498 0,1.59765c0,1.00747 0,2.01563 0,3.02345c0,0.24716 0,0.49432 0,0.74148c0,0.11399 0,0.22833 0,0.34233c0,0.1852 -0.10064,0.11399 -0.25675,0.11399c-0.57032,0 -1.14098,0 -1.7113,0c-1.07628,0 -2.15222,0 -3.22851,0c-0.50699,0 -1.01398,0 -1.52062,0c-0.20129,0 -0.12837,0.08558 -0.12837,0.25675c0,0.12837 0,0.25675 0,0.38512c0,0.28037 0,0.56108 0,0.84144c0,1.11291 0,2.22582 0,3.33839c0,0.52274 0,1.04547 0,1.56787c0,0.11399 0,0.22799 0,0.34233c0,0.18896 -0.11571,0.11399 -0.2742,0.11399c-0.31939,0 -0.63844,0 -0.95818,0c-1.14098,0 -2.28196,0 -3.42295,0c-0.54807,0 -1.09545,0 -1.64318,0c-0.13693,0 -0.27386,0 -0.41045,0c-0.21053,0 -0.13693,-0.07737 -0.13693,-0.25675c0,-0.29954 0,-0.59908 0,-0.89861c0,-1.01261 0,-2.02522 0,-3.03783c0,-0.50391 0,-1.00781 0,-1.51172c0,-0.22799 0,-0.45633 0,-0.68466c0,-0.11399 0,-0.22799 0,-0.34233c0,-0.19615 0.22012,-0.11399 0.38512,-0.11399c1.12661,0 2.25321,0 3.38016,0c0.54773,0 1.09511,0 1.64318,0c0.27352,0 0.54773,0 0.82125,0c0.1294,0 0.25846,0 0.38786,0c0.23894,0 0.22833,0.01095 0.22833,-0.22799c0,-1.04205 0,-2.0841 0,-3.12649c0.00034,-1.16392 0.00034,-2.32749 0.00034,-3.49107" id="svg_4"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m8.84638,40.16402c0,-2.20562 0,-4.41193 0,-6.61756c0,-0.16569 -0.06573,-0.22833 0.12837,-0.22833c0.12837,0 0.25675,0 0.38512,0c0.25675,0 0.51349,0 0.77024,0c0.56108,0 1.12181,0 1.68289,0c1.02698,0 2.05397,0 3.08062,0c0.26633,0 0.53232,0 0.79865,0c0,0.25675 0,0.51349 0,0.77024c0,0.58162 0,1.16324 0,1.74553c0,1.12763 0,2.25526 0,3.3829c0,0.27078 0,0.54157 0,0.812c0,0.20882 0.07874,0.13556 0.25675,0.13556c0.12837,0 0.25675,0 0.38512,0c0.57922,0 1.15878,0 1.73834,0c1.12763,0 2.25526,0 3.3829,0c0.27078,0 0.54157,0 0.812,0c0.17322,0 0.27078,-0.076 0.27078,0.12837c0,0.12837 0,0.25675 0,0.38512c0,0.57717 0,1.15399 0,1.73116c0,1.12763 0,2.2556 0,3.38324c0,0.27044 0,0.54122 0,0.812c0,0.13522 0,0.27044 0,0.406c0.12837,0 0.25675,0 0.38512,0c0.57101,0 1.14201,0 1.71301,0c1.12626,0 2.25218,0 3.37845,0c0.27386,0 0.54773,0 0.82159,0c0.13693,0 0.27386,0 0.4108,0c0.21053,0 0.13693,0.07737 0.13693,0.25675c0,0.55629 0,1.11257 0,1.66851c0,0.99344 0,1.98756 0,2.981c0,0.49432 0,0.98864 0,1.48297c0,0.11434 0,0.22833 0,0.34267c0,0.1852 -0.1003,0.11399 -0.25675,0.11399c-0.29954,0 -0.59908,0 -0.89861,0c-1.0554,0 -2.1108,0 -3.1662,0c-0.49912,0 -0.99823,0 -1.49769,0c-0.25093,0 -0.50186,0 -0.75312,0c-0.1739,0 -0.27386,0.07668 -0.27386,-0.12837c0,-0.17116 0,-0.34233 0,-0.51349c0,-1.11942 0,-2.23849 0,-3.35756c0,-0.54054 0,-1.08108 0,-1.62127c0,-0.2564 0,-0.51247 0,-0.76887c0,-0.11399 0,-0.22799 0,-0.34233c0,-0.19615 -0.21977,-0.11399 -0.38512,-0.11399c-1.10675,0 -2.2135,0 -3.32059,0c-0.54465,0 -1.08929,0 -1.63393,0c-0.27386,0 -0.54773,0 -0.82125,0c-0.13693,0 -0.27386,0 -0.4108,0c-0.0914,0 -0.18246,0 -0.27386,0c0,-0.08558 0,-0.17116 0,-0.25675c0,-1.12387 0,-2.24739 0,-3.3716c0,-0.54773 0,-1.09511 0,-1.64284c0,-0.27386 0,-0.54773 0,-0.82125c0,-0.13693 0,-0.27386 0,-0.4108c0,-0.16124 0.07668,-0.34233 -0.11399,-0.34233c-1.05095,0 -2.10224,0 -3.15319,0c-1.19302,-0.00068 -2.38569,-0.00068 -3.57871,-0.00068" id="svg_5"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m77.3036,33.31813c2.10635,0 4.21304,0 6.31905,0c0.1318,0 0.26359,0 0.39505,0c0.20471,0 0.1318,0.08216 0.1318,0.25675c0,0.25675 0,0.51349 0,0.77024c0,0.53266 0,1.06464 0,1.59731c0,1.01226 0,2.02453 0,3.03646c0,0.26359 0,0.52685 0,0.79009c0,0.1318 0,0.26359 0,0.39505c-0.12837,0 -0.25675,0 -0.38512,0c-0.57511,0 -1.14954,0 -1.72431,0c-1.12798,0 -2.2556,0 -3.38324,0c-0.27078,0 -0.54122,0 -0.812,0c-0.13556,0 -0.27044,0 -0.406,0c-0.20882,0 -0.13556,0.07874 -0.13556,0.25675c0,0.57203 0,1.14406 0,1.71575c0,1.12592 0,2.25184 0,3.37776c0,0.49843 0,0.99686 0,1.49529c-0.56553,0 -1.13106,0 -1.69624,0c-1.12318,0 -2.2467,0 -3.36989,0c-0.54773,0 -1.09511,0 -1.64284,0c-0.21053,0 -0.13693,0.07737 -0.13693,0.25675c0,0.12837 0,0.25675 0,0.38512c0,0.30672 0,0.6138 0,0.92052c0,1.10915 0,2.21795 0,3.32744c0,0.52137 0,1.04307 0,1.56478c0,0.13043 0,0.26085 0,0.39128c-0.12837,0 -0.25675,0 -0.38512,0c-0.29919,0 -0.59873,0 -0.89827,0c-1.0554,0 -2.1108,0 -3.1662,0c-0.52753,0 -1.05506,0 -1.58293,0c-0.23312,0 -0.46591,0 -0.69904,0c-0.1852,0 -0.11399,-0.1003 -0.11399,-0.25675c0,-0.17116 0,-0.34233 0,-0.51349c0,-1.01261 0,-2.02522 0,-3.03783s0,-2.02522 0,-3.03783c1.10778,0 2.21624,0 3.32402,0c1.12798,0 2.25663,0 3.38495,0c0.21019,0 0.13659,-0.07737 0.13659,-0.25675c0,-0.12837 0,-0.25675 0,-0.38512c0,-0.26222 0,-0.52445 0,-0.78667c0,-0.58025 0,-1.16118 0,-1.74143c0,-1.09477 0,-2.18954 0,-3.28465c0,-0.13043 0,-0.26085 0,-0.39128c0.12837,0 0.25675,0 0.38512,0c0.25983,0 0.51931,0 0.7788,0c0.59291,0 1.18651,0 1.77977,0c1.14098,0 2.28196,0 3.42261,0c0.12153,0 0.24374,0 0.36527,0c0.17869,0 0.11399,-0.07634 0.11399,-0.22833c0,-0.24545 0,-0.4909 0,-0.73601c0,-0.51897 0,-1.03725 0,-1.55588c0.00068,-1.44155 0.00068,-2.88344 0.00068,-4.32533" id="svg_6"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m22.53782,60.70102c2.12997,0 4.2596,0 6.38957,0c0.11399,0 0.22833,0 0.34233,0c0.1852,0 0.11399,0.1003 0.11399,0.25675c0,0.25675 0,0.51349 0,0.77024c0,0.53266 0,1.06464 0,1.59731c0,1.04718 0,2.09437 0,3.14189c0,0.24579 0,0.49193 0,0.73738c0,0.11399 0,0.22833 0,0.34233c-0.12837,0 -0.25675,0 -0.38512,0c-0.57409,0 -1.14817,0 -1.7226,0c-1.12592,0 -2.25184,0 -3.37776,0c-0.27078,0 -0.54191,0 -0.81269,0c-0.13693,0 -0.27386,0 -0.4108,0c-0.21019,0 -0.13693,0.07737 -0.13693,0.2564c0,0.56929 0,1.13859 0,1.70788c0,1.10538 0,2.21076 0,3.31648c0,0.52171 0,1.04342 0,1.56478c-0.56553,0 -1.13106,0 -1.69658,0c-1.12318,0 -2.24636,0 -3.3692,0c-0.54773,0 -1.09511,0 -1.64284,0c-0.21053,0 -0.13693,0.07737 -0.13693,0.25675c0,0.12837 0,0.25675 0,0.38512c0,0.28037 0,0.56108 0,0.84144c0,1.02664 0,2.05363 0,3.08027c0,0.48987 0,0.9794 0,1.46928c0,0.23312 0,0.46557 0,0.69869c0,0.1852 -0.1003,0.11399 -0.25675,0.11399c-0.17116,0 -0.34233,0 -0.51349,0c-1.0554,0 -2.1108,0 -3.1662,0c-0.51349,0 -1.02698,0 -1.54048,0c-0.26599,0 -0.53232,0 -0.79865,0c-0.11399,0 -0.22833,0 -0.34233,0c-0.25401,0 -0.22833,-0.00445 -0.22833,-0.2564c0,-1.01774 0,-2.0348 0,-3.0522c0,-1.02698 0,-2.05363 0,-3.08062c0,-0.11399 0,-0.22799 0,-0.34233c0,-0.1852 0.1003,-0.11399 0.25675,-0.11399c0.25675,0 0.51349,0 0.77024,0c0.58538,0 1.17111,0 1.75649,0c1.12626,0 2.25218,0 3.3781,0c0.13693,0 0.27386,0 0.4108,0c0.18246,0 0.27386,0.07771 0.27386,-0.13693c0,-0.27386 0,-0.54773 0,-0.82125c0,-0.59326 0,-1.18651 0,-1.77977c0,-1.14098 0,-2.28196 0,-3.42261c0,-0.13693 0,-0.2742 0,-0.4108c0,-0.1739 -0.07668,-0.27386 0.12837,-0.27386c0.25675,0 0.51349,0 0.77024,0c0.59052,0 1.18104,0 1.77155,0c1.14098,0 2.28196,0 3.42295,0c0.25093,0 0.50186,0 0.75312,0c0,-0.27386 0,-0.54773 0,-0.82125c0,-0.59326 0,-1.18686 0,-1.78011c-0.00068,-1.41519 -0.00068,-2.83003 -0.00068,-4.24488" id="svg_7"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m63.61216,67.54691c0,-2.28196 0,-4.56393 0,-6.8459c2.0995,0 4.19866,0 6.29783,0c0.13693,0 0.2742,0 0.4108,0c0.21019,0 0.13659,0.07737 0.13659,0.25675c0,0.25675 0,0.51349 0,0.77024c0,0.58025 0,1.16084 0,1.74108c0,1.09854 0,2.19707 0,3.29526c0,0.2612 0,0.52171 0,0.78256c0.25675,0 0.51349,0 0.77024,0c0.58093,0 1.16221,0 1.74314,0c1.12592,0 2.25184,0 3.37776,0c0.24203,0 0.4844,0 0.72676,0c0.16534,0 0.22799,-0.06573 0.22799,0.12837c0,0.12837 0,0.2564 0,0.38478c0,0.57682 0,1.15297 0,1.72944c0,1.12592 0,2.25184 0,3.37776c0,0.2564 0,0.51247 0,0.76887c0,0.11399 0,0.22799 0,0.34233c0,0.1852 0.1003,0.11399 0.25675,0.11399c0.57237,0 1.14475,0 1.71746,0c1.12763,0 2.2556,0 3.38324,0c0.27044,0 0.54122,0 0.812,0c0.13522,0 0.27044,0 0.406,0c0.17322,0 0.27078,-0.076 0.27078,0.12837c0,0.55629 0,1.11223 0,1.66851c0,0.99823 0,1.99681 0,2.99503c0,0.49432 0,0.98899 0,1.48331c0,0.11399 0,0.22833 0,0.34233c0,0.16569 0.06538,0.22799 -0.12837,0.22799c-0.29954,0 -0.59908,0 -0.89861,0c-1.09819,0 -2.19638,0 -3.29458,0c-0.52787,0 -1.0554,0 -1.58293,0c-0.23792,0 -0.4755,0 -0.71341,0c-0.16534,0 -0.22799,0.06573 -0.22799,-0.12837c0,-0.17082 0,-0.34198 0,-0.51315c0,-1.11942 0,-2.23849 0,-3.35791c0,-0.5402 0,-1.08073 0,-1.62093c0,-0.2564 0,-0.51247 0,-0.76887c0,-0.11399 0,-0.22799 0,-0.34233c0,-0.19615 -0.22012,-0.11399 -0.38512,-0.11399c-1.11599,0 -2.23233,0 -3.34832,0c-0.54088,0 -1.08245,0 -1.62366,0c-0.27044,0 -0.54122,0 -0.812,0c-0.13522,0 -0.27044,0 -0.406,0c-0.09037,0 -0.18041,0 -0.27078,0c0,-0.08558 0,-0.17116 0,-0.25675c0,-1.12387 0,-2.24739 0,-3.3716c0,-0.54773 0,-1.09545 0,-1.64318c0,-0.27386 0,-0.54773 0,-0.82125c0,-0.13693 0,-0.27386 0,-0.4108c0,-0.16089 0.07702,-0.34198 -0.11365,-0.34198c-1.05095,0 -2.10258,0 -3.15353,0c-1.19268,0 -2.38535,0 -3.57836,0" id="svg_8"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m36.22927,67.54691c2.10635,0 4.2127,0 6.31905,0c0.13145,0 0.26325,0 0.39471,0c0.20471,0 0.1318,0.08216 0.1318,0.2564c0,0.25675 0,0.51349 0,0.77024c0,0.53266 0,1.06464 0,1.59731c0,1.00781 0,2.01563 0,3.02345c0,0.2475 0,0.49432 0,0.74183c0,0.11399 0,0.22799 0,0.34233c0,0.18896 -0.11536,0.11399 -0.27386,0.11399c-0.59326,0 -1.18651,0 -1.78011,0c-1.14098,0 -2.28196,0 -3.42295,0c-0.27386,0 -0.54773,0 -0.82159,0c-0.13693,0 -0.27386,0 -0.4108,0c-0.2143,0 -0.13693,0.0914 -0.13693,0.27386c0,0.59326 0,1.18651 0,1.77977c0,1.14098 0,2.28196 0,3.42295c0,0.26599 0,0.53266 0,0.79865c0,0.11399 0,0.22833 0,0.34233c0,0.16569 0.06573,0.22799 -0.12837,0.22799c-0.55629,0 -1.11257,0 -1.66885,0c-1.0554,0 -2.1108,0 -3.1662,0c-0.49056,0 -0.98111,0 -1.47167,0c-0.13693,0 -0.27386,0 -0.4108,0c0,-0.12837 0,-0.25675 0,-0.38478c0,-0.29954 0,-0.59908 0,-0.89861c0,-1.01261 0,-2.02522 0,-3.03783c0,-0.48474 0,-0.96982 0,-1.45456c0,-0.24271 0,-0.48508 0,-0.72745c0,-0.11399 0,-0.22833 0,-0.34233c0.17116,0 0.34233,0 0.51349,0c1.12934,0 2.25903,0 3.38837,0c0.54773,0 1.09545,0 1.64284,0c0.27386,0 0.54773,0 0.82159,0c0.12153,0 0.24339,0 0.36492,0c0.19923,0 0.11399,-0.24305 0.11399,-0.4108c0,-1.14098 0,-2.28196 0,-3.42261c0.00137,-1.00439 0.00137,-2.0081 0.00137,-3.01215" id="svg_9"/>
   <path stroke="null" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="m49.92071,74.39246c0,-2.28196 0,-4.56359 0,-6.84555c2.0995,0 4.19901,0 6.29817,0c0.13659,0 0.27352,0 0.41045,0c0.21464,0 0.13693,0.0914 0.13693,0.27386c0,0.27386 0,0.54773 0,0.82125c0,0.59291 0,1.18651 0,1.77977c0,1.07252 0,2.14503 0,3.21721c0,0.25093 0,0.5022 0,0.75312c0.27352,0 0.54773,0 0.82125,0c0.59326,0 1.18651,0 1.77977,0c1.14098,0 2.28196,0 3.42295,0c0.27386,0 0.54773,0 0.82125,0c0,0.25675 0,0.51349 0,0.77024c0,0.54191 0,1.08382 0,1.62572c0,0.99823 0,1.99681 0,2.99503c0,0.48474 0,0.96982 0,1.45456c-0.55629,0 -1.11223,0 -1.66851,0c-1.04102,0 -2.08239,0 -3.12341,0c-0.49432,0 -0.98899,0 -1.48331,0c-0.11399,0 -0.22799,0 -0.34233,0c-0.16569,0 -0.22799,0.06573 -0.22799,-0.12837c0,-0.29919 0,-0.59873 0,-0.89827c0,-1.14098 0,-2.28196 0,-3.42295c0,-0.54773 0,-1.09511 0,-1.64284c0,-0.25093 0,-0.5022 0,-0.75312c-0.31973,0 -0.63913,0 -0.95852,0c-1.14098,0 -2.28196,0 -3.42295,0c-0.8209,0.00034 -1.64215,0.00034 -2.46374,0.00034" id="svg_10"/>
  </g>
</g>
    </svg>`;
        return playerSVG;
    }

}

export default Player;