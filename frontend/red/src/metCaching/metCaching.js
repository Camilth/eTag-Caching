import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";

export class metCaching extends LitElement {
    static styles = [cardCss]

    static properties = {
        cachedData: { type: String }
    };

    constructor() {
        super();
        this.cachedData = this.getCachedData();
    }

    getCachedData(){
        return "test"
    }

  render() {
    return html`
      <section>
          <h1>Met Caching</h1>
          <button>Test</button>
          <p>${this.cachedData}</p>
      </section>
    `
  }
}

window.customElements.define('met-caching', metCaching)
