import {LitElement, html, css} from 'lit'
import {cardCss} from "../css/card-css.js";
import {addProduct, fetchProducts} from "../services/productService.js";

export class zonderCaching extends LitElement {
    static styles = [cardCss];

    static properties = {
        cachedProducts: { type: Array },
        fetchTime: { type: Number },
    };

    constructor() {
        super();
        this.cachedProducts = [];
    }

    firstUpdated() {
        this.loadProducts();
    }

    async loadProducts() {
        const url = 'http://localhost:5173/api/products';
        const { products} = await fetchProducts(true);
        const entries = performance.getEntriesByName(url);
        if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1];
            this.fetchTime = lastEntry.responseEnd - lastEntry.startTime;
        }

        if (products) {
            this.cachedProducts = products;
        }

        this.fetchTime = this.fetchTime.toFixed(2);
    }

    async addProduct(productName) {
        this.cachedProducts = await addProduct(productName);
    }

    render() {
        return html`
      <section>
          <h1>Zonder Caching</h1>
          <button @click=${() => this.loadProducts()}> [ CALL ]</button> 
          <p>Aantal producten: ${this.cachedProducts.length}</p>
          <p class="time">Calltijd: ${this.fetchTime}ms</p>
      </section>
    `
    }
}

window.customElements.define('zonder-caching', zonderCaching)
