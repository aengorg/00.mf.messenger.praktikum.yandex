type Element = any;

export abstract class Component {
  private isRendered = false;
  protected domElement: Element = null;
  protected abstract render(props?: any): string;

  create(props?: any, element?: HTMLElement) {
    const html = this.render(props);

    if (element) {
      element.innerHTML = html;
      this.domElement = element.childNodes[0];
    } else {
      element = document.createElement('div');
      element.innerHTML = html;
      this.domElement = element;
    }

    if (!this.isRendered) {
      this.isRendered = true;
      this.onFirstRender();
    }

    this.onRender();

    return this.domElement.outerHTML;
  }

  update() {
    this.create(this.domElement.parentNode);
  }

  getSlot(tag: string = 'default') {
    return this.domElement.querySelector(`[slot="${tag}"]`);
  }

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
