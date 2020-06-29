type Element = any;

export abstract class Component {
  protected domElement: Element = null;
  protected abstract render(props?: any): string;

  renderTo(element: HTMLElement, props?: any) {
    element.innerHTML = this.render(props);
    this.domElement = element.childNodes[0];

    if (!this.isRendered) {
      this.isRendered = true;
      this.onFirstRender();
    }

    this.onRender();
  }

  update() {
    this.renderTo(this.domElement.parentNode);
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

  private isRendered = false;
  protected onFirstRender() {}
  protected onRender() {}
}
