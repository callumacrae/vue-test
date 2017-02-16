/**
 * Trigger event on the mounted elements.
 *
 * @param {string|Event} event Name of event to fire, or event object.
 */
export function trigger(event) {
  Array.from(this._el).forEach((el) => {
    if (!(event instanceof Event)) {
      event = new Event(event);
    }

    el.dispatchEvent(event);
  });
}
