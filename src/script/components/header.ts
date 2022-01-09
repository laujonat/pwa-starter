import { Router } from "@vaadin/router";
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Super Clipboard';

  @property() enableBack: boolean = false;

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 6em;
      }

      header h1 {
        margin: 0 auto;
        font-size: 20px;
        font-weight: bold;
        white-space: nowrap;
      }

      nav fluent-anchor {
        margin-left: 10px;
      }

      #header-logo {
        display: flex;
        align-items: center;
      }

      #back-button-block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 11em;
        margin: 20px 0;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav fluent-anchor::part(control) {
          color: initial;
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

  logoTemplate() {
    return html`
      <div @click="${() => this.goBack()}" id="header-logo">
        <img src="https://img.icons8.com/color/50/000000/clipboard.png" alt="Simple Edit app icon" />
        <h2>${this.title}</h2>
        </fluent-anchor>`;
  }

  render() {
    return html`
      <header>
        <div id="back-button-block">
          <div>
            ${this.enableBack ? html`<fluent-anchor appearance="accent" href="/home">
              Back
            </fluent-anchor>` : this.logoTemplate()}
          </div>
        </div>
      </header>
    `;
  }
}
