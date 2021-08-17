export abstract class Component<State = any> {
  private el: HTMLDivElement;

  protected state: State = {} as State;

  protected events: Record<"string", () => void> = {} as Record<
    "string",
    () => void
  >;

  constructor(el: HTMLDivElement) {
    this.el = el;
    setTimeout(() => {
      this.el.innerHTML = this.render();
      this.subscribeToEvents();
    }, 0);
  }

  abstract render(): string;

  setState(patch: Partial<State>): void {
    this.state = { ...this.state, ...patch };
    this.el.innerHTML = this.render();
    this.subscribeToEvents();
  }

  subscribeToEvents(): void {
    // eslint-disable-next-line guard-for-in
    for (const key in this.events) {
      const [eventName, selector] = key.split("@");
      [...this.el.querySelectorAll(`${selector}`)].forEach((elem) => {
        // @ts-ignore
        elem.addEventListener(`${eventName}`, this.events[key]);
      });
    }
  }
}
