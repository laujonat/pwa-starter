import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';


@customElement('app-clipboard-item')
export class AppClipboardItem extends LitElement {
  @property({ type: String }) item = 'Super Clipboard';


  static get styles() {
    return css`
    `;
  }
  static get properties() {
    return {
      item: { type: String }
    }
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <fluent-card>
          <p>${this.item}</p>
        </fluent-card>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-clipboard-item": AppClipboardItem,
  }
}