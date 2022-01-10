import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import "./clipboard-item"

@customElement('app-clipboard-list')
export class AppClipboardList extends LitElement {
  static styles = css`
  `;
  @state() saved: Array<any> = [];

  @property({attribute: false})
  listItems = [
    { text: '----', completed: true },
    { text: '----', completed: false }
  ];
  constructor() {
    super();
    navigator.serviceWorker.addEventListener("message", (event) => {
      console.log("client received: ", event)
    });
  }
  async firstUpdated(): Promise<void> {
    navigator.serviceWorker.addEventListener("message", (event) => {
      console.log("client received: ", event)
    });
  }

  render() {
    const items = this.listItems;
    return html`
      <h2>To Do</h2>
      <ul>
        ${items.map((item) =>
          html`
            <app-clipboard-item item=${item.text}></app-clipboard-item>`
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-clipboard-list": AppClipboardList
  }
}