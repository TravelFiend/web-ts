export class UserForm {
  constructor(public parent: Element){};

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseover:h1': this.onHeaderHover
    };
  };

  onButtonClick(): void {
    console.log('Button clicked');
  };

  onHeaderHover(): void {
    console.log('h1 was hovered');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me!</button>
      </div>
    `
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for(let key in eventsMap){
      const [eventName, selector] = key.split(':');

      fragment.querySelectorAll(selector).forEach(el => {
        el.addEventListener(eventName, eventsMap[key]);
      });
    };
  };

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  };
};
