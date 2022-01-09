import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-clipboard-list')
export class AppClipboardList extends LitElement {
  @property({ type: String }) title = 'Super Clipboard';

  @property() enableBack: boolean = false;

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: any) {
    if (changedProperties.has('enableBack')) {
      console.log('enableBack', this.enableBack);
    }
  }

  render() {
    return html`
      <header>
        <div id="back-button-block">
          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-clipboard-list": AppClipboardList,
  }
}