const synth = new Tone.AMSynth();
const reverb = new Tone.Reverb(1).toDestination();
let slider;

let notes = {

  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'g': 'G5',
  'h': 'A5',
  'j': 'B5',
  'k': 'C6'

}

function setup() {
  createCanvas(400, 400);
  synth.toDestination();
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(20, height - 50);
  slider.input(() => {
    setReverb();
  });
  
  synth.chain(reverb, Tone.Destination);

  
  

}

function draw() {
  background(255,100,100);
}

function keyPressed() {
  let whatNote = notes[key]
  synth.harmonicity.value = 0.5;
  synth.triggerAttackRelease(whatNote, "4n");
}


function setReverb() {
  
  let sliderValue = slider.value();
  reverb.wet.value = sliderValue;
}
