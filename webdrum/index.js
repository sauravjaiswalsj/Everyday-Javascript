const item_1 = document.querySelector('#b1');
const item_2 = document.querySelector('#b2');
const item_3 = document.querySelector('#b3');
const item_4 = document.querySelector('#b4');
const item_5 = document.querySelector('#b5');
const item_6 = document.querySelector('#b6');
const item_7 = document.querySelector('#b7');
const item_8 = document.querySelector('#b8');
const item_9 = document.querySelector('#b9');
const play = (e) =>{
    e.currentTime=0; // rewind to start
    e.play();
    console.log(e);
}
const Transition=(e)=>{
    const transition = new Queue();
    transition.enqueue(e.classList.add('playing'));
    setTimeout(()=>{
        transition.dequeue(e.classList.remove('playing'));
    },100);
}
window.addEventListener('keydown', (e)=>{
   const key= e.which || e.keyCode;
   if(key===65){ // A
       const audio = new Audio('sounds/clap.wav');
       play(audio);
        Transition(item_1);
   }
   else if(key===83){  // S
       const audio = new Audio('sounds/boom.wav');
       play(audio);
       Transition(item_2);
   }
   else if(key===68){  //D
       const audio=new Audio('sounds/hihat.wav');
       play(audio);
       Transition(item_3);
   }
   else if(key=== 70){ //F
       const audio = new Audio('sounds/kick.wav');
       play(audio);
      Transition(item_4);
   }
   else if(key=== 71){ //G
    const audio = new Audio('sounds/openhat.wav');
    play(audio);
    Transition(item_5);
} else if(key=== 72){ //H
    const audio = new Audio('sounds/snare.wav');
    play(audio);
    Transition(item_6);
}else if(key=== 74){ // J
    const audio = new Audio('sounds/tink.wav');
    play(audio);
    Transition(item_7);
}
else if(key=== 75){ // K
    const audio = new Audio('sounds/ride.wav');
    play(audio);
    Transition(item_8);
}
else if(key=== 76){ // L
    const audio = new Audio('sounds/tom.wav');
    play(audio);
    Transition(item_9);
}
   else {
       return ;
   }
});

class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(data){
        this.item.unshift(data);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.item.pop();
    }
    isEmpty(){
        return this.item.length === 0;
    }
}


/************************particle js************************ */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":100, "density": {
                "enable": false, "value_area": 00
            }
        }
        , "color": {
            "value": "#ffffff"
        }
        , "shape": {
            "type":"star", "stroke": {
                "width": 0, "color": "#000000"
            }
            , "polygon": {
                "nb_sides": 5
            }
            , "image": {
                "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg", "width": 100, "height": 100
            }
        }
        , "opacity": {
            "value":0.5, "random":false, "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }
        , "size": {
            "value":4, "random":true, "anim": {
                "enable": false, "speed": 40, "size_min": 0.1, "sync": false
            }
        }
        , "line_linked": {
            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":14, "direction":"left", "random":false, "straight":true, "out_mode":"out", "bounce":false, "attract": {
                "enable": false, "rotateX": 600, "rotateY": 1200
            }
        }
    }
    , "interactivity": {
        "detect_on":"canvas", "events": {
            "onhover": {
                "enable": false, "mode": "grab"
            }
            , "onclick": {
                "enable": true, "mode": "repulse"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":200, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            , "repulse": {
                "distance": 200, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":true
}
);