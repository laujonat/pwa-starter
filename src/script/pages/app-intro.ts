import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-intro")
export class AppIntro extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      svg {
        width: 20em;
        height: 100%;
      }
      #getting-started-grid {
        /* display: grid; */
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 6em;
        color: #e2e2e2;
      }
      .getting-started-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 4em;
      }
      .getting-started-item p {
        font-size: 24px;
        font-weight: bold;
        width: 24em;
      }
      #lastItem {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .getting-started-item a {
        text-decoration: none;
        color: black;
        background: var(--sl-color-primary-600);
        padding: 6px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        border-radius: 4px;
        width: 8em;
        height: 2em;
        font-size: 18px;
      }
      @media (prefers-color-scheme: light) {
        .getting-started-item a {
          color: white;
        }
      }
      @media (max-width: 800px) {
        .getting-started-item {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .getting-started-item p {
          width: initial;
          text-align: center;
        }
      }
      @media (horizontal-viewport-segments: 2) {
        #getting-started-grid {
          display: grid;
          grid-template-columns: 50% 50%;
          grid-gap: 18px;
          margin: auto;
          height: 85vh;
          /* margin-left: 16px; */
          /* margin-right: 16px; */
        }
        .getting-started-item {
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
        .getting-started-item p {
          width: 18em;
        }
        #lastItem {
          align-items: center;
        }
      }
      @media (vertical-viewport-segments: 2) {
        .getting-started-item {
          height: 34vh;
        }
      }
    `,
  ];

  render() {
    return html`
      <div id="getting-started-grid">
        <img src="https://img.icons8.com/color/50/000000/clipboard.png" alt="Simple Edit app icon" />
        <div class="getting-started-item">
          <p>
          PWA Clipboard manager for syncing clippings between devices
          </p>
        </div>
        <div class="getting-started-item" id="lastItem">
          <fluent-anchor href="/home" appearance="accent">Start</fluent-anchor>
        </div>
      </div>
    `;
  }
}