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
    this.image = "";
    this.name = "";
    // (breaks the code) this.background = "linear-gradient(#ffbfba,#ff978f,#ff756b,#ff594c,#ff756b,#ff978f)";
    this.backgroundColor = "";
    this.move1 = "";
    this.move2 = "";
    this.moveDamage1 = "";
    this.moveDamage2 = "";
    this.fancy  = false;
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([name=Charmander]){
        .HP{
          display: inline-block;
          margin-left: 100px;
        }
        .card{
          background: var(--my-card-charmander-background);
        }
      }
      :host([name=Squirtle]) {
        .HP{
          display: inline-block;
          margin-left: 160px;
        }
        .card {
          background: var(--my-card-squirtle-background);
        }
      }
      :host([name=Pikachu]){
        .HP{
          display: inline-block;
          margin-left: 150px;
        }
        .card{
          background: var(--my-card-pikachu-background);
        }
      }
      :host([name=Bulbasaur]){
        .HP{
          display: inline-block;
          margin-left: 130px;
        }
        .card{
          background: var(--my-card-bulbasaur-background)
        }
      }
      :host([name=Mew]){
        .HP{
          display: inline-block;
          margin-left: 190px;
        }
        .card{
          background: var(--my-card-mew-background);
        }
      }

      :host([fancy]){
        display: block;
        background-color: pink;
        border: 2px solic fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      .squirtle button{
  background-color: #89CFF0
      }
    
.card{
  background-color: var(--my-card-background);
}

.squirtle button:hover{
  background-color: navy;
}

div.card{
  width: 100%;
  height: 100%;
  top: 0%;
  margin: 0px;
  //padding: 5px 10px 5px 10px; 
  border-radius: 10px;
  position: absolute;
  left: 0%;
}

div.charmander{
  position: relative;
  //background: linear-gradient(#ffbfba, #ff978f, #ff756b, #ff594c, #ff756b, #ff978f);
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
  margin-top: -84px;
  font-size: 20px;
    
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
  .name{
    margin-left: 16px;
    display: inline-block;
  }
  /*.HP{
    display: inline-block;
    margin-left: 100px;
  }
    */

    `}

  render() {
    return html`
    <div class="charmander">
    <div class="card">
      <h2 class="name">${this.name}</h2>
      <slot class="HP">

      </slot>
    <img class="art" src=${this.image}>
      <div class="move-name">
           <br>
     <h3> <details> 
       <summary>
        ${this.move1}
         </summary> </h3>
          <div class="description1">
            <slot>

            </slot>
          </div>
      </details>
      <h3> <details> 
        <summary> 
        ${this.move2}
        </summary></h3>
        <div class="description2">
          <slot>

          </slot>
        </div>
      </details>
  </div>
      <div class="move-damage"> 
        <p> ${this.moveDamage1} </p>
        <p> ${this.moveDamage2}</p>
  </div>
         <div class="button">
           <button>
     <a href="https://nintendo.com" target="_blank" class="button">Details</a>
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
      fancy: { type: Boolean, reflect: true }

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
