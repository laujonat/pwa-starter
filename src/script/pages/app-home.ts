import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';
import '../components/clipboard-list'
@customElement('app-home')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fluent-card {
        margin-bottom: 12px;
      }

      #welcomeCard {
        margin: 20px;
        padding: 18px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
      }

      #layout {
        border: 1px solid purple;
        height: 96vh;
        width: auto;
        display: flex;
        flex-direction: column;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      @media (min-width: 1024px) {
        #welcomeCard {
          width: 54%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }
      }

      @media(prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #4e4e4e;
          color: white;
          border: none;
        }
      }
    `;
  }

  handleClick(event:  Event & {
    target: HTMLButtonElement
  }) {
    const target = event.target as HTMLButtonElement;
    if (target) {
      console.log('target', target.value);
    }
  }

  constructor() {
    super();
    navigator.serviceWorker.addEventListener('message', message => {
      console.log("Message on Client", message)
    });
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder Clipboard Sandbox',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/laujonat/pwa-starter',
      });
    }
  }

  async postMessage(message: string) {
    let text = await navigator.clipboard.readText();
    console.log('text to send', text)
    if(navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'MESSAGE_IDENTIFIER',
        msg: text
      });
    }
  }

  async copyPageUrl() {
    try {
      await navigator.clipboard.writeText(location.href);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  async getClipboardContents() {
    try {
      const clipboardItems = await navigator.clipboard.read();
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          console.log(blob)
          await this.postMessage(URL.createObjectURL(blob));
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <div id="layout">
        <div id="welcomeCard">
          <h2>${this.message}</h2>
          <fluent-anchor href="/about" appearance="accent">About</fluent-anchor>
          ${'share' in navigator
            ? html`<fluent-button appearance="primary" @click="${() => this.share()}">Share</fluent-button>`
            : null}
          ${'clipboard' in navigator
            ? html`<fluent-button appearance="primary" @click="${() => this.getClipboardContents()}">Clipboard Contents</fluent-button>`
            : null}
        </div>
        <fluent-button appearance="accent" @click="${this.copyPageUrl}">Copy URL</fluent-button>
        <app-clipboard-list></app-clipboard-list>
        <pwa-install css="fluent-button">Install PWA Starter</pwa-install>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-home": AppHome,
  }
}