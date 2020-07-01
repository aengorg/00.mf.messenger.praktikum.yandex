type Element = any;

export abstract class Component {
  private isRendered = false;
  protected domElement: Element = null;
  protected abstract render(props?: any): string;

  create(props?: any, element?: HTMLElement) {
    if (!element) element = document.createElement('div');

    const html = this.render(props);
    element.innerHTML = html;
    this.domElement = element.childNodes[0];

    if (!this.isRendered) {
      this.isRendered = true;
      this.onFirstRender();
    }

    this.onRender();

    console.log(this.domElement);
    return this.domElement.outerHTML;
  }

  update() {
    this.create(this.domElement.parentNode);
  }

  getSlot = (tag: string = 'default') => {
    return this.domElement.querySelector(`[slot="${tag}"]`);
  };

  protected triggerEvent<D>(eventName: string, detail?: D) {
    this.domElement.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        detail,
      })
    );

    return false;
  }

  protected onFirstRender() {}
  protected onRender() {}
}
