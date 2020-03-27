import {
    getElement,
    offsetElement
} from './utils';

class Invader {
    constructor(id, row, col, worldElement, totalCols, firstRows) {
        this.size = getElement(worldElement).clientWidth * 0.040;
        const SPACING = 5;
        this.initialXPos = (getElement(worldElement).clientWidth / 2) - ((totalCols * (this.size + SPACING)) / 2) - ((this.size + SPACING));

        this.id = id;
        this.width = this.size;
        this.height = this.size;
        this.top = row * this.size + SPACING;
        // if(col === 0) {
        //     this.left = this.initialXPos;

        // // } else if(col === 1) {
        // //     this.prevPos = this.initialXPos + this.invadersSize + SPACING;
        // //     this.left = this.prevPos;
        // } else {
        let prevPos = this.initialXPos + (col * (this.size + SPACING));
        this.left = prevPos + this.size + SPACING;
        // }
        this.rightEdgePos = this.left + this.size;
        this.worldElement = worldElement;
        this.row = row;
        this.firstRows = firstRows;
        this.initiate();
    }

    initiate() {
        const world = getElement(this.worldElement);
        const invadertyles = `position: absolute;
                                 width: ${this.width+'px'};
                                 height: ${this.height+'px'};
                                 box-sizing: border-box;
                                 top:${this.top+'px'};
                                 left:${this.left+'px'};
                                 overflow: hidden;
                                 border: 1px solid olive;`;

        const invader = document.createElement('div');
        invader.setAttribute('id', 'inv' + this.id);
        invader.setAttribute('class', 'invader');
        world.appendChild(invader);
        invader.style.cssText = invadertyles;
        invader.innerHTML = this.decideInvaderType();

        this.x = offsetElement(getElement('inv' + this.id)).left;
        this.y = offsetElement(getElement('inv' + this.id)).top;

    }

    decideInvaderType() {
        if(this.row < this.firstRows) {
            return this.addInvaderSVG1();
        } else {
            return this.addInvaderSVG2();
        }
    }

    addInvaderSVG1() {
        const svg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 219.973 160.063" enable-background="new 0 0 219.973 160.063"
        xml:space="preserve">
   <g class="step1">
       <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M59.993,15.041c0-3,0-5.999,0-8.999c0-1.533,0-3.066,0-4.599
           c0-0.356,0-0.712,0-1.067c0-0.552-0.338-0.333-0.801-0.333c-0.933,0-1.866,0-2.799,0c-3.334,0-6.666,0-9.999,0
           c-1.577,0-3.155,0-4.732,0c-0.333,0-0.667,0-1,0c-0.485,0-0.667-0.192-0.667,0.375c0,0.875,0,1.749,0,2.624
           c0,2.968,0,5.936,0,8.904c0,1.523,0,3.047,0,4.57c0,0.73,0,1.46,0,2.19c0,0.333,0,0.667,0,1c0,0.572,0.643,0.333,1.125,0.333
           c3.215,0,6.429,0,9.643,0c1.539,0,3.077,0,4.615,0c0.77,0,1.538,0,2.307,0c0.385,0,0.77,0,1.154,0c0.256,0,0.513,0,0.77,0
           c0.381,0.128,0.51,0.003,0.385-0.375C59.993,18.124,59.993,16.582,59.993,15.041"/>
       <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M164.979,20.04c3.231,0,6.463,0,9.695,0c1.545,0,3.091,0,4.637,0
           c0.489,0,0.666,0.192,0.666-0.381c0-0.381,0-0.762,0-1.143c0-0.889,0-1.777,0-2.666c0-3.137,0-6.272,0-9.409
           c0-1.577,0-3.154,0-4.732c0-0.333,0-0.666,0-1c0-0.484,0.192-0.666-0.375-0.666c-0.875,0-1.75,0-2.625,0c-3.082,0-6.165,0-9.248,0
           c-1.416,0-2.833,0-4.25,0c-0.766,0-1.533,0-2.299,0c-0.4,0-0.801,0-1.2,0c0,0.5,0,1,0,1.5c0,6.166,0,12.331,0,18.497
           C161.647,20.04,163.313,20.04,164.979,20.04"/>
       <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M199.976,20.04c0,13.065,0,26.13,0,39.195
           c0,0.533,0.227,0.8-0.4,0.8c-0.4,0-0.8,0-1.199,0c-0.801,0-1.601,0-2.4,0c-1.732,0-3.466,0-5.199,0c-3.333,0-6.666,0-9.999,0
           c-0.518,0-0.8,0.225-0.8-0.385c0-0.384,0-0.769,0-1.153c0-0.77,0-1.538,0-2.308c0-1.666,0-3.333,0-4.999c0-3.254,0-6.508,0-9.761
           c0-0.354,0-0.706,0-1.059c0-0.541-0.293-0.333-0.75-0.333c-0.75,0-1.5,0-2.25,0c-1.666,0-3.332,0-4.999,0c-3.083,0-6.166,0-9.249,0
           c-0.783,0-1.566,0-2.35,0c-0.614,0-0.399-0.226-0.399-0.75c0-0.375,0-0.75,0-1.125c0-1.555,0-3.108,0-4.663
           c0-3.076,0-6.153,0-9.229c0-0.769,0-1.538,0-2.308c0-0.385,0-0.769,0-1.153c0-0.503,0.217-0.77-0.375-0.77
           c-1.667,0-3.333,0-4.999,0c-2.986,0-5.972,0-8.957,0c-1.489,0-2.979,0-4.467,0c-0.4,0-0.8,0-1.199,0c0,0.375,0,0.75,0,1.125
           c0,0.884,0,1.769,0,2.652c0,3.186,0,6.37,0,9.555c0,1.453,0,2.905,0,4.358c0,0.77,0,1.538,0,2.308c-0.875,0-1.75,0-2.625,0
           c-2.992,0-5.982,0-8.975,0c-6.258,0-12.515,0-18.772,0c-6.274,0-12.548,0-18.822,0c-3.155,0-6.311,0-9.466,0c-0.333,0-0.666,0-1,0
           c-0.541,0-0.333-0.293-0.333-0.75c0-0.75,0-1.5,0-2.25c0-1.563,0-3.128,0-4.691c0-3.182,0-6.363,0-9.545c0-0.698,0-1.396,0-2.095
           c0-0.507,0.194-0.667-0.399-0.667c-0.4,0-0.801,0-1.2,0c-1.733,0-3.466,0-5.2,0c-3.332,0-6.665,0-9.998,0c-0.8,0-1.6,0-2.4,0
           c-0.508,0-0.799-0.224-0.799,0.375c0,0.375,0,0.75,0,1.125c0,1.551,0,3.103,0,4.653c0,3.076,0,6.153,0,9.229
           c0,1.538,0,3.077,0,4.615c-1.556,0-3.111,0-4.666,0c-3.244,0-6.488,0-9.732,0c-1.533,0-3.066,0-4.6,0c-0.333,0-0.666,0-1,0
           c0,0.375,0,0.75,0,1.125c0,0.847,0,1.693,0,2.541c0,3.11,0,6.222,0,9.332c0,1.436,0,2.871,0,4.308c0,0.769,0,1.538,0,2.307
           c0,0.598-0.24,0.385-0.75,0.385c-0.5,0-1,0-1.5,0c-3.207,0-6.416,0-9.623,0c-1.417,0-2.834,0-4.25,0c-0.736,0-1.472,0-2.208,0
           c-0.333,0-0.667,0-1,0c-0.742,0-0.667-0.013-0.667-0.75c0-12.957,0-25.913,0-38.87c0-0.599-0.291-0.375-0.799-0.375
           c-0.4,0-0.801,0-1.2,0c-0.8,0-1.6,0-2.399,0c-1.645,0-3.289,0-4.934,0c-3.221,0-6.443,0-9.665,0c-0.333,0-0.667,0-1,0
           c0,0.375,0,0.75,0,1.125c0,0.736,0,1.472,0,2.208c0,1.581,0,3.162,0,4.743c0,3.308,0,6.614,0,9.922c0,13.331,0,26.663,0,39.995
           c0,6.538,0,13.077,0,19.616c0,0.683,0,1.365,0,2.048c0,0.541,0.293,0.333,0.75,0.333c0.375,0,0.75,0,1.125,0
           c1.667,0,3.333,0,4.999,0c2.959,0,5.916,0,8.874,0c0.75,0,1.5,0,2.25,0c0.399,0,0.8,0,1.2,0c0.508,0,0.799-0.224,0.799,0.375
           c0,1.541,0,3.083,0,4.624c0,3.03,0,6.06,0,9.09c0,1.47,0,2.939,0,4.409c0,0.375,0,0.749,0,1.124c0,0.588,0.251,0.375,0.75,0.375
           c0.884,0,1.768,0,2.65,0c3.074,0,6.148,0,9.224,0c1.417,0,2.833,0,4.249,0c0.775,0,1.551,0,2.325,0c0.508,0,0.8-0.224,0.8,0.375
           c0,0.5,0,1,0,1.5c0,2.958,0,5.916,0,8.874c0,2.972,0,5.943,0,8.916c0,0.55,0.329,0.333,0.791,0.333c0.396,0,0.792,0,1.188,0
           c0.792,0,1.584,0,2.375,0c1.715,0,3.43,0,5.146,0c3.277,0,6.555,0,9.832,0c0.484,0,0.667,0.192,0.667-0.375c0-0.375,0-0.75,0-1.125
           c0-0.722,0-1.444,0-2.166c0-1.556,0-3.111,0-4.666c0-2.889,0-5.777,0-8.666c0-0.75,0-1.5,0-2.25c0-0.457-0.209-0.75,0.333-0.75
           c0.333,0,0.667,0,1,0c1.622,0,3.243,0,4.866,0c25.514,0,51.026,0,76.54,0c2.972,0,5.944,0,8.915,0c1.512,0,3.022,0,4.533,0
           c0.767,0,1.533,0,2.3,0c0.375,0,0.75,0,1.125,0c0.375-0.125,0.5,0,0.375,0.375c0,0.25,0,0.5,0,0.75c0,6.068,0,12.138,0,18.206
           c0,0.484-0.192,0.667,0.375,0.667c0.375,0,0.749,0,1.124,0c0.768,0,1.533,0,2.301,0c1.666,0,3.332,0,4.999,0
           c3.066,0,6.132,0,9.198,0c0.4,0,0.801,0,1.2,0c0.508,0,0.8,0.224,0.8-0.375c0-0.75,0-1.5,0-2.25c0-1.541,0-3.083,0-4.624
           c0-2.958,0-5.916,0-8.874c0-0.736,0-1.472,0-2.208c0-0.333,0-0.667,0-1c0-0.484-0.192-0.667,0.375-0.667c1.67,0,3.34,0,5.01,0
           c3.232,0,6.467,0,9.701,0c1.525,0,3.053,0,4.578,0c0.541,0,0.334-0.293,0.334-0.749c0-0.375,0-0.75,0-1.125
           c0-0.819,0-1.639,0-2.458c0-2.979,0-5.959,0-8.938c0-1.442,0-2.885,0-4.327c0-0.8,0-1.6,0-2.399c0.896,0,1.794,0,2.691,0
           c3.076,0,6.153,0,9.23,0c1.559,0,3.117,0,4.676,0c0.758,0,1.517,0,2.274,0c0.375,0,0.75,0,1.125,0c0-0.444,0-0.889,0-1.333
           c0-3,0-5.999,0-8.999c0-12.554,0-25.108,0-37.662c0-6.457,0-12.915,0-19.372c0-3.105,0-6.211,0-9.316c0-0.77,0-1.538,0-2.308
           c0-0.333,0-0.667,0-1c-0.399,0-0.8,0-1.2,0c-1.732,0-3.466,0-5.199,0C209.04,20.04,204.508,20.04,199.976,20.04 M141.982,60.035
           c2.999,0,5.999,0,8.999,0c1.467,0,2.933,0,4.399,0c0.783,0,1.566,0,2.35,0c0.375,0,0.75,0,1.125,0c0.25,0,0.5,0,0.75,0
           c0.375-0.125,0.5,0,0.375,0.375c0,5.985,0,11.971,0,17.956c0,0.333,0,0.667,0,1c0,0.484,0.192,0.667-0.375,0.667
           c-0.75,0-1.5,0-2.25,0c-1.667,0-3.333,0-4.999,0c-2.958,0-5.916,0-8.874,0c-0.767,0-1.533,0-2.3,0c-0.4,0-0.8,0-1.199,0
           c0-0.4,0-0.8,0-1.2c0-1.732,0-3.466,0-5.199c0-3.333,0-6.666,0-9.999c0-0.934,0-1.866,0-2.8c0-0.533-0.227-0.8,0.399-0.8
           C140.916,60.035,141.449,60.035,141.982,60.035 M79.99,80.033c-6.333,0-12.665,0-18.997,0c-0.334,0-0.667,0-1,0
           c0-0.375,0-0.75,0-1.125c0-0.736,0-1.473,0-2.208c0-1.556,0-3.11,0-4.666c0-2.889,0-5.777,0-8.666c0-0.736,0-1.472,0-2.208
           c0-0.375,0-0.75,0-1.125c0.399,0,0.799,0,1.199,0c1.733,0,3.467,0,5.199,0c3.333,0,6.666,0,9.999,0c0.8,0,1.6,0,2.399,0
           c0.4,0,0.801,0,1.2,0c0,0.4,0,0.8,0,1.2c0,1.732,0,3.466,0,5.199c0,3.333,0,6.666,0,9.999C79.99,77.634,79.99,78.833,79.99,80.033"
           />
       <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M27.997,140.025c-1.516,0-3.03,0-4.545,0
           c-0.707,0-1.414,0-2.121,0c-0.334,0-0.667,0-1,0c-0.573,0-0.334,0.643-0.334,1.125c0,3.233,0,6.467,0,9.699
           c0,1.534,0,3.068,0,4.603c0,0.762,0,1.523,0,2.285c0,0.381,0,0.762,0,1.143c0,0.484-0.241,1.143,0.334,1.143
           c2.972,0,5.943,0,8.916,0c3.207,0,6.415,0,9.623,0c0.375,0,0.75,0,1.125,0c0-0.375,0-0.75,0-1.125c0-0.735,0-1.472,0-2.208
           c0-1.555,0-3.11,0-4.666c0-2.958,0-5.916,0-8.874c0-0.708,0-1.416,0-2.124c0-0.334,0-0.667,0-1c-0.391,0-0.782,0-1.174,0
           c-1.695,0-3.391,0-5.086,0C31.822,140.025,29.909,140.025,27.997,140.025"/>
       <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M179.978,145.024c0,3,0,5.999,0,8.999c0,1.444,0,2.889,0,4.333
           c0,0.333,0,0.667,0,1c0,0.507-0.193,0.666,0.4,0.666c0.933,0,1.866,0,2.799,0c3.334,0,6.666,0,10,0c1.6,0,3.199,0,4.799,0
           c0.4,0,0.8,0,1.199,0c0.508,0,0.801,0.224,0.801-0.375c0-0.875,0-1.749,0-2.624c0-3,0-5.999,0-8.999c0-1.6,0-3.199,0-4.8
           c0-0.8,0-1.6,0-2.399c0-0.533,0.227-0.8-0.4-0.8c-0.533,0-1.066,0-1.6,0c-3.333,0-6.666,0-9.999,0c-1.6,0-3.2,0-4.8,0
           c-0.799,0-1.6,0-2.399,0c-0.508,0-0.8-0.224-0.8,0.375c0,0.5,0,1,0,1.5C179.978,142.941,179.978,143.983,179.978,145.024"/>
   </g>
   <g class="step2">
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M60.007,15.065c0-3.204,0-6.407,0-9.61c0-1.529,0-3.059,0-4.588
		c0-0.247,0.18-0.714-0.178-0.783c-0.809-0.155-1.77-0.017-2.593-0.017c-3.298,0-6.597,0-9.895,0c-1.573,0-3.147,0-4.722,0
		c-0.618,0-1.243,0.029-1.859-0.021c-0.618-0.05-0.787,0.047-0.758,0.674c0.153,3.175,0.006,6.394,0.006,9.573
		c0,1.562,0,3.124,0,4.685c0,1.554-0.141,3.182,0.013,4.728c0.073,0.738,2.244,0.359,2.735,0.359c1.732,0,3.465,0,5.197,0
		c3.213,0,6.436-0.152,9.647-0.062c1.114,0.031,2.526,0.578,2.468-0.956C60.02,17.719,60.007,16.396,60.007,15.065"/>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M164.994,20.064c3.221,0,6.44,0,9.66,0c1.529,0,3.059,0,4.588,0
		c0.355,0,0.75,0.18,0.75-0.333c0-0.814,0-1.628,0-2.442c0-3.205,0-6.41,0-9.615c0-1.507,0-3.015,0-4.522
		c0-0.437,0.361-2.888-0.149-3.101c-0.341-0.143-0.821-0.04-1.177-0.005c-0.607,0.06-1.229,0.021-1.84,0.021
		c-1.715,0-3.43,0-5.145,0c-1.79,0-3.574-0.011-5.361-0.06c-1.649-0.045-3.307-0.098-4.955-0.021
		c-0.392,0.018-0.922-0.012-1.283,0.172c-0.526,0.267-0.137,3.095-0.114,3.63c0.161,3.752,0.027,7.538,0.027,11.294
		c0,0.915,0,1.831,0,2.746c0,0.444-0.272,1.933,0.231,2.19c0.416,0.212,1.24,0.046,1.678,0.046
		C162.933,20.064,163.964,20.064,164.994,20.064"/>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M216.988,80.057c-3.215,0-6.432,0-9.646,0
		c-1.538,0-3.076,0-4.614,0c-0.779,0-1.558,0-2.337,0c-0.545,0.185-0.468-0.459-0.43-0.792c0.162-1.39,0.029-2.864,0.029-4.264
		c0-1.704,0-3.408,0-5.112c0-3.276,0-6.553,0-9.829c-3.333,0-6.666,0-9.999,0c-2.786,0-5.65-0.191-8.429,0.029
		c-0.846,0.067-1.723,0.259-1.632-0.839c0.124-1.493,0.062-3.004,0.062-4.502c0-3.24,0-6.481,0-9.721
		c0-1.309-0.062-2.634,0.031-3.94c0.019-0.271,0.102-0.805-0.133-1.014c-0.344-0.305-1.711-0.009-2.159-0.009
		c-3.257,0-6.515,0-9.772,0c-2.307,0-4.68,0.189-6.982,0.056c-1.194-0.069-0.977-0.465-0.947-1.56
		c0.043-1.672-0.034-3.35-0.034-5.022c0-3.202,0-6.403,0-9.605c0-0.767,0-1.533,0-2.3c0-0.272,0.183-1.226-0.022-1.467
		c-0.304-0.354-1.521-0.142-1.929-0.122c-0.882,0.043-1.767,0.022-2.648,0.022c-3.236,0-6.473,0-9.709,0c-1.507,0-3.013,0-4.521,0
		c-0.221,0-0.887-0.116-1.068,0.102c-0.307,0.363-0.1,1.395-0.1,1.818c0,3.237,0.04,6.478-0.01,9.715
		c-0.023,1.532-0.083,3.063-0.086,4.595c-0.001,0.763,0.012,1.526,0.051,2.289c0.019,0.368,0.313,1.196-0.137,1.388
		c-0.648,0.276-1.524,0.167-2.208,0.138c-1.104-0.048-2.203-0.047-3.308-0.047c-3.297,0-6.594,0-9.891,0
		c-13.201,0-26.402,0-39.604,0c-1.435,0-2.925-0.127-4.353,0.012c-0.854,0.083-0.449-2.858-0.449-3.431c0-3.27,0-6.54,0-9.81
		c0-1.496,0.021-2.981,0.087-4.475c0.037-0.844,0.412-2.19-0.67-2.315c-1.705-0.197-3.5,0.021-5.215,0.021c-3.295,0-6.59,0-9.885,0
		c-1.24,0-2.48-0.023-3.718-0.038c-0.505-0.006-0.638,0.104-0.637,0.61c0.003,0.823,0.04,1.645,0.04,2.469c0,3.209,0,6.419,0,9.629
		c0,1.545,0,3.091,0,4.636c0,0.656-0.017,1.314,0.021,1.97c0.041,0.71-0.264,0.749-0.906,0.704
		c-3.163-0.224-6.421,0.018-9.594,0.018c-1.586,0-3.172,0-4.758,0c-0.793,0-1.586,0-2.379,0c-0.56,0-1.861-0.253-2.336,0.065
		c-0.201,0.135-0.047,0.918-0.047,1.101c0,0.711,0,1.422,0,2.133c0,1.595,0,3.19,0,4.785c0,3.305,0,6.609,0,9.914c0,0.4,0,0.8,0,1.2
		c0,0.508,0.225,0.8-0.375,0.8c-0.733,0-1.468,0-2.201,0c-1.663,0-3.325,0-4.988,0c-3.258,0-6.517,0-9.775,0
		c-0.714,0-1.434-0.083-2.146-0.062c-0.512,0.015-0.556,0.252-0.557,0.723c-0.002,1.301,0.046,2.608,0.046,3.912
		c0,3.216,0,6.431,0,9.647c0,1.541,0,3.083,0,4.624c0,0.309,0.198,1.231-0.329,1.187c-0.791-0.067-1.59-0.033-2.383-0.033
		c-3.271,0-6.543,0-9.813,0c-1.501,0-3.006,0.032-4.506-0.049c-0.618-0.034-2.771-0.461-2.944,0.35
		C-0.28,81.84,0.015,83.493,0.015,85c0,13.158,0,26.316,0,39.475c0,3.325,0,6.651,0,9.977c0,1.47,0.119,2.996-0.037,4.457
		c-0.033,0.303-0.195,0.991,0.193,1.132c0.42,0.153,0.949,0.071,1.384,0.038c2.947-0.232,5.986-0.029,8.942-0.029
		c1.455,0,2.906,0.055,4.361,0.086c1.516,0.033,3.082,0.125,4.59-0.067c0.723-0.091,0.615-0.441,0.645-1.175
		c0.061-1.514-0.081-3.039-0.081-4.555c0-6.596,0-13.19,0-19.785c0-3.299,0-6.597,0-9.895c0-1.342,0.034-2.687-0.044-4.023
		c-0.066-1.105,2.633-0.581,3.386-0.581c3.197,0,6.396,0,9.593,0c1.538,0,3.076,0,4.613,0c0.705,0,1.411,0,2.116,0
		c0.542,0,0.333,0.293,0.333,0.75c0,0.507,0,1.014,0,1.521c0,6.6,0,13.199,0,19.8c0,3.323,0,6.646,0,9.97c0,1.592,0,3.184,0,4.775
		c0,0.794,0,1.588,0,2.383c0,0.575-0.07,0.863,0.543,0.807c1.459-0.133,2.984-0.01,4.449-0.01c1.681,0,3.361,0,5.043,0
		c3.21,0,6.42,0,9.629,0c0.542,0,0.334-0.293,0.334-0.75c0-0.373,0-0.746,0-1.119c0-0.752,0-1.504,0-2.256c0-1.719,0-3.438,0-5.156
		c0-3.082,0.24-6.273-0.021-9.344c-0.085-1.007-0.092-1.545,1.045-1.46c1.382,0.104,2.758,0.087,4.146,0.087
		c3.317,0,6.635,0,9.952,0c6.636,0,13.271,0,19.906,0c13.27,0,26.54,0,39.811,0c6.629,0,13.259,0,19.889,0c1.508,0,3.016,0,4.522,0
		c0.839,0,0.738-0.065,0.738,0.77c0,0.916,0,1.832,0,2.748c0,3.285,0,6.57,0,9.855c0,1.566,0,3.131,0,4.697c0,0.386,0,0.772,0,1.158
		c0,0.504-0.217,0.77,0.375,0.77c0.92,0,1.839,0,2.759,0c3.281,0,6.563,0,9.845,0c1.478,0,2.952-0.029,4.43-0.053
		c0.714-0.012,1.43-0.005,2.141,0.064c0.642,0.063,0.448-0.737,0.448-1.146c0-3.264,0-6.527,0-9.792c0-6.585,0-13.169,0-19.753
		c0-1.584,0-3.168,0-4.752c0-0.791,0-1.583,0-2.375c0-0.365,0-0.729,0-1.094c0-0.522-0.246-1.095,0.372-1.095
		c3.183,0,6.364,0,9.546,0c2.641,0,5.29,0.067,7.928-0.05c0.588-0.025,1.547-0.167,2.068,0.188c0.305,0.207,0.059,1.049,0.051,1.357
		c-0.023,0.898,0.01,1.796,0.025,2.693c0.117,6.559,0.008,13.13,0.008,19.689c0,3.311,0,6.621,0,9.933c0,1.581,0,3.163,0,4.745
		c0,0.373-0.107,0.879,0.006,1.242c0.146,0.477,1.506,0.185,1.893,0.189c3.255,0.041,6.512,0.008,9.766,0.008
		c1.544,0,3.088,0,4.631,0c0.469,0,3.594,0.273,3.684-0.152c0.245-1.151,0.02-2.588,0.02-3.766c0-1.316,0-2.633,0-3.949
		c0-2.642,0-5.283,0-7.926c0-5.305,0-10.607,0-15.912c0-5.303,0-10.607,0-15.91c0-2.648,0-5.297,0-7.944c0-1.245,0-2.489,0-3.733
		c0-0.233,0-0.466,0-0.7c-0.375,0-0.75,0-1.125,0C218.238,80.057,217.613,80.057,216.988,80.057 M139.998,65.059
		c0-1.542,0-3.083,0-4.624c0-0.748,2.945-0.375,3.541-0.375c3.316,0,6.633,0,9.949,0c1.52,0,3.043-0.027,4.563,0.013
		c0.416,0.011,1.504-0.222,1.83,0.055c0.328,0.278,0.114,1.424,0.114,1.783c0,3.208-0.015,6.417,0.002,9.625
		c0.009,1.578,0.038,3.155,0.052,4.732c0.004,0.486,0.282,3.473-0.121,3.636c-1.081,0.436-2.67,0.217-3.803,0.216
		c-4.26-0.002-8.518-0.064-12.777-0.064c-0.754,0-1.509-0.014-2.262-0.001c-0.612,0.011-1.139,0.191-1.121-0.592
		c0.035-1.459,0.033-2.919,0.033-4.379C139.998,71.743,139.998,68.4,139.998,65.059 M60.007,77.057c0-3.241,0-6.481,0-9.722
		c0-1.55,0-3.101,0-4.651c0-0.75,0-1.5,0-2.25c0-0.643,0.758-0.375,1.195-0.375c3.268,0,6.535,0,9.802,0c1.565,0,3.131,0,4.696,0
		c0.783,0,1.564,0,2.348,0c0.438,0,1.492-0.209,1.86,0.127c0.294,0.269,0.072,1.083,0.06,1.405c-0.029,0.766-0.01,1.532,0.01,2.298
		c0.043,1.695,0.026,3.391,0.026,5.085c0,3.298,0,6.596,0,9.894c0,0.22,0.224,1.264-0.177,1.231
		c-0.715-0.057-1.438-0.044-2.16-0.044c-1.701,0-3.401,0-5.102,0c-3.271,0-6.541,0-9.812,0c-0.915,0-1.831,0-2.747,0
		C60.007,79.057,60.007,78.057,60.007,77.057"/>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M60.007,145.049c0,3.273,0,6.547,0,9.82c0,1.477,0,2.951,0,4.428
		c0,0.396-0.172,0.75,0.375,0.75c0.889,0,1.777,0,2.666,0c6.648,0,13.299,0,19.947,0c3.25,0,6.501,0,9.751,0c1.563,0,3.127,0,4.69,0
		c0.701,0,1.426-0.055,2.124,0.012c0.673,0.063,0.44-0.718,0.44-1.212c0-3.3,0-6.601,0-9.9c0-1.524,0-3.05,0-4.575
		c0-0.736,0-1.475,0-2.211c0-0.415,0.234-1.807-0.126-2.076c-0.339-0.254-1.418-0.035-1.793-0.035c-1.06,0-2.12,0-3.179,0
		c-2.12,0-4.24,0-6.359,0c-4.239,0-8.479,0-12.718,0c-4.145,0-8.288,0-12.433,0c-0.385,0-3.184-0.344-3.402,0.13
		c-0.239,0.519,0.016,1.202,0.016,1.745C60.007,142.965,60.007,144.007,60.007,145.049"/>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#00FF00" d="M154.996,140.049c-6.611,0-13.221,0-19.831,0
		c-3.228,0-6.454,0-9.681,0c-1.481,0-2.963,0-4.443,0c-0.291,0-0.74-0.133-0.984,0.086c-0.293,0.265-0.051,1.588-0.055,1.979
		c-0.033,3.301-0.002,6.604-0.002,9.904c0,1.486,0,2.973,0,4.46c0,0.733,0,1.468,0,2.202c0,0.344,0,0.689,0,1.033
		c0,0.573,0.643,0.334,1.125,0.334c6.545,0,13.09,0,19.636,0c4.274,0,8.548,0,12.821,0c1.875,0,3.745,0.007,5.615,0.067
		c0.689,0.022,0.857-0.225,0.896-0.905c0.047-0.836-0.099-1.676-0.099-2.514c0-4.396,0-8.793,0-13.189
		c0-0.698,0.493-2.971-0.093-3.451c-0.362-0.297-1.223-0.047-1.643-0.014C157.186,140.129,156.073,140.049,154.996,140.049"/>
</g>
   </svg>`;
        return svg;
    }

    addInvaderSVG2() {
        const svg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 240.973 160.063" xml:space="preserve">
      <g class="step1">
      <path fill="#00FF00" d="M117.824,119.985c-3.333,0-6.665,0-9.998,0c-1.725,0-3.45,0-5.175,0c-0.75,0-1.5,0-2.25,0
      c-0.567,0-0.375,0.182-0.375,0.666c0,0.334,0,0.667,0,1c0,5.985,0,11.971,0,17.956c0,0.608,0.484,0.375,1,0.375c0.334,0,0.667,0,1,0
      c0.782,0,1.565,0,2.348,0c1.565,0,3.13,0,4.695,0c3.318,0,6.637,0,9.955,0c6.604,0,13.207,0,19.811,0c0.264,0,0.527,0,0.792,0
      c0.396,0.132,0.527,0,0.396-0.396c0-0.396,0-0.79,0-1.186c0-0.791,0-1.581,0-2.372c0-1.581,0-3.162,0-4.743c0-3.268,0-6.534,0-9.801
      c0-0.5,0-1,0-1.5c-0.333,0-0.667,0-1,0C131.956,119.985,124.891,119.985,117.824,119.985z"/>
  <path fill="#00FF00" d="M179.996,139.982h20.399c0.762,0,1.523,0,2.285,0c3.212,0,6.424,0,9.637,0c1.689,0,3.38,0,5.07,0
      c0.75,0,1.5,0,2.25,0c0.567,0,0.375-0.182,0.375-0.666c0-0.334,0-0.667,0-1.001c0-2.999,0-5.998,0-8.998c0-2.985,0-5.972,0-8.957
      c0-0.608-0.485-0.375-1.001-0.375c-0.333,0-0.666,0-0.999,0c-0.789,0-1.579,0-2.368,0c-1.579,0-3.157,0-4.736,0
      c-3.257,0-6.513,0-9.769,0c-0.482,0-1.125,0.24-1.125-0.333c0-0.334,0-0.667,0-1c0-0.73,0-1.46,0-2.19c0-1.523,0-3.048,0-4.571
      c0-3.079,0-6.157,0-9.236c0-0.89,0-1.778,0-2.667c0.733,0,1.467,0,2.2,0c1.6,0,3.199,0,4.799,0c6.666,0,13.331,0,19.997,0
      c3.333,0,6.666,0,9.999,0c0.875,0,1.75,0,2.625,0c0.599,0,0.375-0.292,0.375-0.8c0-0.4,0-0.8,0-1.2c0-1.6,0-3.199,0-4.799
      c0-13.258,0-26.516,0-39.774c0-3.289,0-6.578,0-9.867c0-0.921,0-1.842,0-2.763c0-0.462,0.217-0.789-0.333-0.789
      c-0.334,0-0.667,0-1,0c-1.542,0-3.083,0-4.625,0c-6.578,0-13.156,0-19.734,0c-3.102,0-6.203,0-9.304,0c-1.541,0-3.083,0-4.624,0
      c-0.588,0-0.375-0.25-0.375-0.75c0-0.375,0-0.75,0-1.125c0-0.708,0-1.416,0-2.125c0-3.063,0-6.126,0-9.188c0-1.645,0-3.29,0-4.935
      c0-0.375,0-0.75,0-1.125c0-0.457,0.208-0.749-0.334-0.749c-0.687,0-1.374,0-2.062,0c-6.597,0-13.193,0-19.79,0
      c-3.298,0-6.596,0-9.894,0c-1.715,0-3.431,0-5.146,0c-0.791,0-1.583,0-2.375,0c-0.619,0-0.396-0.263-0.396-0.791
      c0-0.395,0-0.79,0-1.186c0-3.294,0-6.588,0-9.883c0-1.713,0-3.426,0-5.139c0-0.75,0-1.5,0-2.25c0-0.521,0.214-0.75-0.396-0.75
      c-0.396,0-0.792,0-1.188,0c-6.597,0-13.192,0-19.789,0c-13.04,0-26.08,0-39.121,0c-5.999,0-11.998,0-17.997,0c-0.5,0-1,0-1.5,0
      c0,0.333,0,0.667,0,1c0,0.728,0,1.456,0,2.184c0,1.579,0,3.158,0,4.736c0,3.276,0,6.552,0,9.828c0,0.5,0,1,0,1.5
      c0,0.524,0.215,0.75-0.399,0.75c-0.801,0-1.601,0-2.4,0c-1.6,0-3.199,0-4.799,0c-3.333,0-6.666,0-9.998,0
      c-6.217,0-12.433,0-18.648,0c-0.875,0-1.75,0-2.625,0c-0.375,0-0.75,0-1.125,0c0,0.333,0,0.666,0,0.999c0,1.518,0,3.035,0,4.553
      c0,3.289,0,6.578,0,9.866c0,0.901,0,1.803,0,2.704c0,0.375,0,0.75,0,1.125c0,0.524,0.215,0.75-0.4,0.75c-1.532,0-3.065,0-4.599,0
      c-2.999,0-5.999,0-8.999,0c-6.479,0-12.956,0-19.435,0c-1.688,0-3.375,0-5.062,0c-0.375,0-0.75,0-1.125,0
      c-0.597,0-0.375,0.283-0.375,0.789c0,0.79,0,1.579,0,2.368c0,3.289,0,6.578,0,9.867c0,13.025,0,26.05,0,39.074
      c0,1.71,0,3.421,0,5.131c0,0.789,0,1.579,0,2.368c0,0.616,0.258,0.395,0.782,0.395c0.392,0,0.782,0,1.174,0c3.261,0,6.521,0,9.781,0
      c6.572,0,13.145,0,19.716,0c1.716,0,3.431,0,5.146,0c0.757,0,1.514,0,2.271,0c0.375,0,0.75,0,1.125,0c0,0.333,0,0.667,0,1
      c0,3.111,0,6.222,0,9.332c0,3.096,0,6.19,0,9.285c0.127,0.386-0.005,0.513-0.396,0.381c-0.264,0-0.526,0-0.79,0
      c-0.396,0-0.791,0-1.187,0c-0.79,0-1.581,0-2.372,0c-1.581,0-3.162,0-4.743,0c-3.253,0-6.507,0-9.76,0c-0.25,0-0.5,0-0.75,0
      c0,0.267,0,0.533,0,0.8c0,0.4,0,0.8,0,1.2c0,0.8,0,1.6,0,2.399c0,1.6,0,3.199,0,4.799c0,3.333,0,6.666,0,9.999
      c0,0.758-0.1,0.8,0.667,0.8c0.333,0,0.666,0,0.999,0c0.717,0,1.435,0,2.151,0c1.395,0,2.788,0,4.182,0c3.217,0,6.434,0,9.65,0
      c0.521,0,1.043,0,1.565,0c0.505,0,1.157,0.05,3.036,0.05l17.552-0.05c-0.567,0,0.192-0.182,0.192-0.666c0-0.712,0-1.423,0-2.134
      c0-3.193,0-6.386,0-9.579c0-1.65,0-3.302,0-4.952c0-0.762,0-1.523,0-2.285c0-0.604,0.282-0.381,0.796-0.381c0.397,0,0.795,0,1.193,0
      c6.63,0,13.26,0,19.89,0c3.315,0,6.63,0,9.945,0c1.724,0,3.447,0,5.171,0c0.75,0,1.5,0,2.25,0c0.506,0,0.749,0.213,0.749-0.381
      c0-0.381,0-0.762,0-1.143c0-3.202,0-6.404,0-9.605c0-1.695,0-3.392,0-5.087c0-0.761,0-1.521,0-2.282c0-0.375,0-0.75,0-1.125
      c0-0.567,0.183-0.375,0.667-0.375c13.109,0,26.22,0,39.329,0c0,3.556,0,7.11,0,10.666c0,1.807,0,3.612,0,5.419
      c0,0.913,0,1.826,0,2.739c0,0.392,0,0.782,0,1.174c0.397,0,0.796,0,1.193,0c0.796,0,1.592,0,2.387,0c1.592,0,3.183,0,4.773,0
      c3.315,0,6.63,0,9.945,0c6.606,0,13.214,0,19.82,0c0.5,0,1,0,1.5,0c0.567,0,0.375,0.182,0.375,0.666c0,0.699,0,1.397,0,2.096
      c0,1.523,0,3.047,0,4.57c0,3.079,0,6.158,0,9.237c0,0.889,0,1.777,0,2.666L179.996,139.982z M100.026,78.323c0,0.444,0,0.89,0,1.334
      c0,0.541-0.293,0.333-0.749,0.333c-0.75,0-1.5,0-2.25,0c-1.591,0-3.183,0-4.773,0c-3.314,0-6.63,0-9.944,0
      c-6.631,0-13.261,0-19.891,0c-0.53,0-1.061,0-1.591,0c-0.524,0-0.796,0.225-0.796-0.392c0-0.782,0-1.564,0-2.348
      c0-1.564,0-3.13,0-4.694c0-3.188,0-6.376,0-9.564c0-1,0-2,0-3c0.846,0,1.691,0,2.538,0c1.903,0,3.807,0,5.711,0
      c3.458,0,6.916,0,10.374,0c3.568,0,7.138,0,10.706,0c1.86,0,3.72,0,5.579,0c0.913,0,1.826,0,2.739,0c0.521,0,1.043,0,1.564,0
      c0.505,0,0.782-0.22,0.782,0.375C100.026,66.353,100.026,72.338,100.026,78.323z M180.017,78.323c0,0.444,0,0.89,0,1.334
      c0,0.541-0.293,0.333-0.75,0.333c-0.75,0-1.499,0-2.249,0c-1.591,0-3.183,0-4.773,0c-3.315,0-6.63,0-9.945,0
      c-6.63,0-13.26,0-19.89,0c-0.53,0-1.061,0-1.591,0c-0.524,0-0.796,0.225-0.796-0.392c0-0.782,0-1.564,0-2.348
      c0-1.564,0-3.13,0-4.694c0-3.188,0-6.376,0-9.564c0-1,0-2,0-3c0.848,0,1.696,0,2.545,0c1.65,0,3.302,0,4.953,0
      c3.458,0,6.916,0,10.374,0c3.681,0,7.36,0,11.041,0c1.979,0,3.957,0,5.937,0c0.923,0,1.847,0,2.77,0c0.528,0,1.056,0,1.584,0
      c0.506,0,0.791-0.222,0.791,0.375C180.017,66.353,180.017,72.338,180.017,78.323z"/>
  <rect y="140.032" fill="#00FF00" width="39.995" height="19.598"/>
  <rect x="200.057" y="140.032" fill="#00FF00" width="39.995" height="19.598"/>
      </g>
      <g class="step2">
	<path fill="#00FF00" d="M117.491,119.985c-3.333,0-6.665,0-9.998,0c-1.725,0-3.45,0-5.175,0c-0.75,0-1.5,0-2.25,0
		c-0.567,0-0.375,0.182-0.375,0.666c0,0.334,0,0.667,0,1c0,5.985,0,11.971,0,17.956c0,0.608,0.484,0.375,1,0.375
		c0.334,0,0.667,0,1,0c0.782,0,1.565,0,2.348,0c1.565,0,3.13,0,4.695,0c3.318,0,6.637,0,9.955,0c6.603,0,13.207,0,19.81,0
		c0.264,0,0.527,0,0.793,0c0.395,0.132,0.527,0,0.395-0.396c0-0.396,0-0.79,0-1.186c0-0.791,0-1.581,0-2.372
		c0-1.581,0-3.162,0-4.743c0-3.268,0-6.534,0-9.801c0-0.5,0-1,0-1.5c-0.332,0-0.666,0-1,0
		C131.622,119.985,124.558,119.985,117.491,119.985z"/>
	<path fill="#00FF00" d="M239.677,97.987c0-1.6,0-3.199,0-4.799c0-13.258,0-26.516,0-39.774c0-3.289,0-6.578,0-9.867
		c0-0.921,0-1.842,0-2.763c0-0.462,0.217-0.789-0.334-0.789c-0.334,0-0.666,0-1,0c-1.541,0-3.082,0-4.625,0
		c-6.578,0-13.156,0-19.734,0c-3.102,0-6.203,0-9.303,0c-1.541,0-3.084,0-4.625,0c-0.588,0-0.375-0.25-0.375-0.75
		c0-0.375,0-0.75,0-1.125c0-0.708,0-1.416,0-2.125c0-3.063,0-6.126,0-9.188c0-1.645,0-3.29,0-4.935c0-0.375,0-0.75,0-1.125
		c0-0.457,0.209-0.749-0.334-0.749c-0.686,0-1.373,0-2.061,0c-6.598,0-13.193,0-19.791,0c-3.297,0-6.596,0-9.893,0
		c-1.715,0-3.432,0-5.146,0c-0.791,0-1.582,0-2.375,0c-0.619,0-0.395-0.263-0.395-0.791c0-0.395,0-0.79,0-1.186
		c0-3.294,0-6.588,0-9.883c0-1.713,0-3.426,0-5.139c0-0.75,0-1.5,0-2.25c0-0.521,0.213-0.75-0.396-0.75c-0.396,0-0.791,0-1.188,0
		c-6.596,0-13.191,0-19.789,0c-13.039,0-26.08,0-39.121,0c-5.999,0-11.998,0-17.997,0c-0.5,0-1,0-1.5,0c0,0.333,0,0.667,0,1
		c0,0.728,0,1.456,0,2.184c0,1.579,0,3.158,0,4.736c0,3.276,0,6.552,0,9.828c0,0.5,0,1,0,1.5c0,0.524,0.215,0.75-0.399,0.75
		c-0.801,0-1.601,0-2.4,0c-1.6,0-3.199,0-4.799,0c-3.333,0-6.666,0-9.998,0c-6.217,0-12.433,0-18.648,0c-0.875,0-1.75,0-2.625,0
		c-0.375,0-0.75,0-1.125,0c0,0.333,0,0.666,0,0.999c0,1.518,0,3.035,0,4.553c0,3.289,0,6.578,0,9.866c0,0.901,0,1.803,0,2.704
		c0,0.375,0,0.75,0,1.125c0,0.524,0.215,0.75-0.4,0.75c-1.532,0-3.065,0-4.599,0c-2.999,0-5.999,0-8.999,0
		c-6.479,0-12.956,0-19.435,0c-1.688,0-3.375,0-5.062,0c-0.375,0-0.75,0-1.125,0c-0.597,0-0.375,0.283-0.375,0.789
		c0,0.79,0,1.579,0,2.368c0,3.289,0,6.578,0,9.867c0,13.025,0,26.05,0,39.074c0,1.71,0,3.421,0,5.131c0,0.789,0,1.579,0,2.368
		c0,0.616,0.258,0.395,0.782,0.395c0.392,0,0.782,0,1.174,0c3.261,0,6.521,0,9.781,0c6.572,0,13.145,0,19.716,0
		c1.716,0,3.431,0,5.146,0c0.757,0,1.514,0,2.271,0c0.375,0,0.75,0,1.125,0c0,0.333,0,0.667,0,1c0,3.111,0,6.222,0,9.332
		c0,3.096,0,6.19,0,9.285c0.127,0.386-0.005,0.513-0.396,0.381c-0.264,0-0.526,0-0.79,0c-0.396,0-0.791,0-1.187,0
		c-0.79,0-1.581,0-2.372,0c-1.581,0-3.162,0-4.743,0c-3.253,0-6.507,0-9.76,0c-0.25,0-0.5,0-0.75,0c0,0.267,0,0.533,0,0.8
		c0,0.4,0,0.8,0,1.2c0,0.8,0,1.6,0,2.399c0,1.6,0,3.199,0,4.799c0,3.333,0,6.666,0,9.999c0,0.758-0.1,0.8,0.667,0.8
		c0.333,0,0.666,0,0.999,0c0.717,0,1.435,0,2.151,0c1.395,0,2.788,0,4.182,0c3.217,0,6.434,0,9.65,0c0.521,0,1.043,0,1.565,0
		c0.505,0,0.782-0.22,0.782,0.375c0,0.75,0,1.5,0,2.25c0,1.583,0,3.166,0,4.749c0,2.985,0,5.972,0,8.957c0,0.848,0,1.694,0,2.542
		c0,0.375,0,0.75,0,1.125c0.4,0,0.8,0,1.2,0c1.6,0,3.199,0,4.799,0c6.666,0,13.332,0,19.998,0c3.333,0,6.666,0,9.999,0
		c0.933,0,1.866,0,2.799,0c0.4,0,0.801,0,1.2,0c0-0.333,0-0.667,0-1c0-1.444,0-2.889,0-4.333c0-2.889,0-5.777,0-8.666
		c0-1.625,0-3.249,0-4.874c0-0.375,0-0.75,0-1.125c-0.396,0-0.791,0-1.186,0c-0.791,0-1.581,0-2.372,0c-3.294,0-6.588,0-9.882,0
		c-1.686,0-3.372,0-5.058,0c-0.375,0-0.75,0-1.125,0c-0.567,0-0.375-0.182-0.375-0.666c0-0.712,0-1.423,0-2.134
		c0-3.193,0-6.386,0-9.579c0-1.65,0-3.302,0-4.952c0-0.762,0-1.523,0-2.285c0-0.604,0.282-0.381,0.796-0.381
		c0.397,0,0.795,0,1.193,0c6.63,0,13.26,0,19.89,0c3.315,0,6.63,0,9.945,0c1.724,0,3.447,0,5.171,0c0.75,0,1.5,0,2.25,0
		c0.506,0,0.749,0.213,0.749-0.381c0-0.381,0-0.762,0-1.143c0-3.202,0-6.404,0-9.605c0-1.695,0-3.392,0-5.087
		c0-0.761,0-1.521,0-2.282c0-0.375,0-0.75,0-1.125c0-0.567,0.183-0.375,0.667-0.375c13.109,0,26.219,0,39.329,0
		c0,3.556,0,7.11,0,10.666c0,1.807,0,3.612,0,5.419c0,0.913,0,1.826,0,2.739c0,0.392,0,0.782,0,1.174c0.398,0,0.797,0,1.193,0
		c0.797,0,1.592,0,2.387,0c1.592,0,3.184,0,4.773,0c3.316,0,6.631,0,9.945,0c6.607,0,13.215,0,19.82,0c0.5,0,1,0,1.5,0
		c0.568,0,0.375,0.182,0.375,0.666c0,0.699,0,1.397,0,2.096c0,1.523,0,3.047,0,4.57c0,3.079,0,6.158,0,9.237
		c0,0.889,0,1.777,0,2.666c0,0.458,0.211,0.762-0.332,0.762c-0.344,0-0.688,0-1.031,0c-1.434,0-2.867,0-4.303,0
		c-2.984,0-5.971,0-8.957,0c-1.541,0-3.082,0-4.623,0c-0.525,0-0.75-0.215-0.75,0.4c0,0.399,0,0.8,0,1.199c0,0.8,0,1.6,0,2.4
		c0,3.333,0,6.666,0,9.999c0,1.732,0,3.466,0,5.199c0,0.531-0.227,0.8,0.396,0.8c0.398,0,0.797,0,1.193,0c0.797,0,1.592,0,2.387,0
		c3.316,0,6.631,0,9.945,0c6.631,0,13.26,0,19.891,0c1.686,0,3.371,0,5.057,0c0.375,0,0.75,0,1.125,0c0-0.381,0-0.762,0-1.143
		c0-0.763,0-1.524,0-2.286c0-3.219,0-6.438,0-9.657c0-1.679,0-3.358,0-5.037c0-0.375,0-0.75,0-1.125c0-0.506-0.213-0.75,0.381-0.75
		c0.762,0,1.523,0,2.285,0c3.213,0,6.424,0,9.637,0c1.689,0,3.381,0,5.07,0c0.75,0,1.5,0,2.25,0c0.568,0,0.375-0.182,0.375-0.666
		c0-0.334,0-0.667,0-1.001c0-2.999,0-5.998,0-8.998c0-2.985,0-5.972,0-8.957c0-0.608-0.484-0.375-1-0.375c-0.334,0-0.666,0-1,0
		c-0.789,0-1.578,0-2.367,0c-1.58,0-3.158,0-4.736,0c-3.258,0-6.514,0-9.77,0c-0.482,0-1.125,0.24-1.125-0.333c0-0.334,0-0.667,0-1
		c0-0.73,0-1.46,0-2.19c0-1.523,0-3.048,0-4.571c0-3.079,0-6.157,0-9.236c0-0.89,0-1.778,0-2.667c0.734,0,1.467,0,2.201,0
		c1.6,0,3.199,0,4.799,0c6.666,0,13.33,0,19.996,0c3.334,0,6.666,0,10,0c0.875,0,1.75,0,2.625,0c0.598,0,0.375-0.292,0.375-0.8
		C239.677,98.787,239.677,98.388,239.677,97.987z M99.693,78.323c0,0.444,0,0.89,0,1.334c0,0.541-0.293,0.333-0.749,0.333
		c-0.75,0-1.5,0-2.25,0c-1.591,0-3.183,0-4.773,0c-3.314,0-6.63,0-9.944,0c-6.631,0-13.261,0-19.891,0c-0.53,0-1.061,0-1.591,0
		c-0.524,0-0.796,0.225-0.796-0.392c0-0.782,0-1.564,0-2.348c0-1.564,0-3.13,0-4.694c0-3.188,0-6.376,0-9.564c0-1,0-2,0-3
		c0.846,0,1.691,0,2.538,0c1.903,0,3.807,0,5.711,0c3.458,0,6.916,0,10.374,0c3.568,0,7.138,0,10.706,0c1.86,0,3.72,0,5.579,0
		c0.913,0,1.826,0,2.739,0c0.521,0,1.043,0,1.564,0c0.505,0,0.782-0.22,0.782,0.375C99.693,66.353,99.693,72.338,99.693,78.323z
		 M179.683,78.323c0,0.444,0,0.89,0,1.334c0,0.541-0.293,0.333-0.75,0.333c-0.75,0-1.498,0-2.248,0c-1.592,0-3.184,0-4.773,0
		c-3.316,0-6.631,0-9.945,0c-6.631,0-13.26,0-19.891,0c-0.529,0-1.061,0-1.59,0c-0.525,0-0.797,0.225-0.797-0.392
		c0-0.782,0-1.564,0-2.348c0-1.564,0-3.13,0-4.694c0-3.188,0-6.376,0-9.564c0-1,0-2,0-3c0.848,0,1.697,0,2.545,0
		c1.65,0,3.303,0,4.953,0c3.459,0,6.916,0,10.375,0c3.68,0,7.359,0,11.041,0c1.979,0,3.957,0,5.936,0c0.924,0,1.848,0,2.77,0
		c0.529,0,1.057,0,1.584,0c0.506,0,0.791-0.222,0.791,0.375C179.683,66.353,179.683,72.338,179.683,78.323z"/>
</g>
      </svg>`;
           return svg;
    }

}

export default Invader;