import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";

export class zonderCaching extends LitElement {
    static styles = [cardCss]

  render() {
    return html`
      <section>
          <h1>Zonder Caching</h1>
          <button>Test</button>
      </section>
    `
  }
}

window.customElements.define('zonder-caching', zonderCaching)
