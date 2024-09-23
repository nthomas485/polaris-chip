import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://www.dexerto.com/cdn-cgi/image/width=1200,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/15/Pokemon-TCG-Charmander.jpg";
    this.name = "Charmander";
    // this.background = "linear-gradient(#ffbfba,#ff978f,#ff756b,#ff594c,#ff756b,#ff978f)";
    this.backgroundColor = "";
    this.move1 = "Ember";
    this.move2 = "Scratch";
    this.moveDamage1 = "30";
    this.moveDamage2 = "10";
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .squirtle button{
  background-color: #89CFF0
}

.squirtle{
  background: linear-gradient(#d9e4ec,#adc1d1,#7d99af,#557792,#7d99af,#adc1d1);
}

.squirtle button:hover{
  background-color: navy;
}

div.card{
  width: 100%;
  height: 100%;
  top: 0%;
  margin: 0px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  position: absolute;
  left: 0%;
}

div.charmander{
  position: relative;
  background: //linear-gradient(#ffbfba, #ff978f, #ff756b, #ff594c, #ff756b, #ff978f);
  width: 310px;
  height: 480px;
  margin: 0px;
  padding: 5px 10px 5px 10px;
  border: 10px solid gold;
  border-radius: 20px;
}

img{
  padding: 0px;
  margin: 0px 0px 5px 20px;
  border: 5px silver outset;
  box-shadow: 3px 3px 10px;
  width: 250px;
  height: 150px;
}

button {
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  padding: 10px 25px;
  background-color: orange;
  text-align: center;
  margin: 70px 0px 5px 85px;
}

button:hover{
  background-color: maroon;
}

div.move-name {
  background: transparent;
  text-indent: 100px;
}

div.move-damage{
  background: transparent;
  text-indent: 250px;
  height: 40px;
  margin-top: -105px;
  font-size: 26px;
    
}

@media screen and (min-width: 500px) and (max-width: 800px){
  button{
    display: none;
  }
}

@media screen and (max-width: 500px){
  div.charmander {
    width: 150px;
    height: auto;
  }
  .art{
    width: 150px;
    height: auto;
  }
  
  div.move-name{
    display: none;
  }
  
  div.move-damage{
    display: none;
  }
}

    `}

  render() {
    return html`
    <div class="charmander">
    <div class="card">
    <h2 class="name">${this.name}</h2>
    <img class="art" src=${this.image}>
    
      <div class="move-name">
           <br>
      <h2> ${this.move1}</h2>
      <h2> ${this.move2}</h2>
  </div>
      <div class="move-damage"> 
        <p> ${this.moveDamage1} </p>
        <p> ${this.moveDamage2}</p>
  </div>
         <div class="button">
           <button>
     <a href="https://nintendo.com" class="button">Details</a>
     </button>
    </div>
  </div>
  </div>
    `;


  }

  static get properties() {
    return {
      title: { type: String },
      name: { type: String },
      image: { type: String },
      move1: { type: String },
      move2: { type: String },
      moveDamage1: { type: String },
      moveDamage2: { type: String },
      backgroundColor: { type: String },

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
