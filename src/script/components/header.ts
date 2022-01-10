import { Router } from "@vaadin/router";
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Super Clipboard';

  @property() enableBack: boolean = false;

  static get styles() {
    return css`
      :host {
        position: fixed;
        left: calc(env(titlebar-area-x, 0) - 6px);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        -webkit-app-region: drag;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: env(titlebar-area-height, 33px);
        width: emv(titlebar-area-width);
      }
      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }
      a ion-icon {
        display: block;
      }
      a {
        height: calc(env(titlebar-area-height, 33px) - 6px);
        background: var(--accent-fill-rest);
        border-radius: 6px;
        -webkit-app-region: no-drag;
        app-region: no-drag;
        pointer-events: all;
        cursor: pointer;
        width: 5em;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: env(titlebar-area-height, 33px);
        -webkit-app-region: no-drag;
        app-region: no-drag;
        pointer-events: all;
        cursor: pointer;
      }
      #info img {
        width: 22px;
      }
      #info h1 {
        font-size: 14px;
        margin-left: 10px;
        font-weight: bold;
      }
      @media (max-width: 800px) {
        :host,
        header {
          height: 3.6em;
        }
        #info h1 {
          font-size: 20px;
        }
      }
      @media (prefers-color-scheme: light) {
        header {
          color: black;
        }
      }
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

  goBack() {
    Router.go("/home");
  }

  render() {
    return html`
       <header>
        <div @click="${() => this.goBack()}" id="info">
          <img src="https://img.icons8.com/color/50/000000/clipboard.png" alt="Simple Edit app icon" />
          <h1>Super Copy</h1>
        </div>
      </header>
    `;
  }
}
