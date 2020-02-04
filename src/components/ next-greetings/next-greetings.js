import {LitElement, html} from 'lit-element';

class NextGreetings extends LitElement {
  
  static get properties() {
    return {
      greeting: {type: String},
      name: {type: String}
    }
  }

  render() {
    return html`
      <p>${this.greeting}, ${this.name}!</p>
    `;
  }
}

customElements.define('next-greetings', NextGreetings);