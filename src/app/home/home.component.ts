import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#pagepiling').pagepiling();
  });
   //  this.typeText();
   const TypeWriter= function(txtElement, words, wait){
    this.txtElement= txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex =0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting= false;
}
// Type Method
TypeWriter.prototype.type = function() {
    // console.log('ANJITHA FOREVER');

    // Current index of word
    const current = this.wordIndex % this.words.length;
//    Get full text of current word
const fullTxt = this.words[current];


//   Check if deleting
if(this.isDeleting){
    this.txt = fullTxt.substring(0, this.txt.length -1);

}
else {
    this.txt = fullTxt.substring(0, this.txt.length +1);

}

// Insert txt into element
this.txtElement.innerHTML= `<span class="txt">${this.txt}</span>`;

// initial typeSpeed
let typeSpeed = 90;
if(this.isDeleting){
    typeSpeed /= 2;
}

// If word is complete
if(!this.isDeleting && this.txt === fullTxt){
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;


}
//Deletion is completed, no more letter to delete
else if(this.isDeleting && this.txt === ''){

    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 360;
}
setTimeout(() => this.type(), typeSpeed)
}
document.addEventListener('DOMContentLoaded', init);
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWritter
    new TypeWriter(txtElement, words, wait);
}

  
// REQUEST A DEMO
let btn = document.getElementById("show");
let nav = document.getElementById("nav");
let cls = document.getElementById('close');
btn.addEventListener('click', function() {
  nav.classList.toggle('active');
});

cls.addEventListener('click', function(){
  nav.classList.toggle('active');
})

}

}
