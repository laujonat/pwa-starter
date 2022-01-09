import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

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

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
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

  constructor() {
    super();
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

  async copyPageUrl() {
    try {
      await navigator.clipboard.writeText(location.href);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <div>
        <div id="welcomeBar">
          <fluent-card id="welcomeCard">
            <h2>${this.message}</h2>
            ${'share' in navigator
              ? html`<fluent-button appearance="primary" @click="${this.share}"
                  >Share this Starter!</fluent-button
                >`
              : null}
             ${'clipboard' in navigator
              ? html`<fluent-button appearance="accent" @click="${this.copyPageUrl}"
                  >Copy URL</fluent-button
                >`
              : null}
            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <fluent-anchor
                href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started
                appearance="hypertext"
                >Documentation on Github</fluent-anchor
              >.
            </p>
          </fluent-card>
          <fluent-anchor href="/about" appearance="accent">Navigate to About</fluent-anchor>
          <pwa-install css="fluent-button">Install PWA Starter</pwa-install>
        </div>

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-home": AppHome,
  }
}