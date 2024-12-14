import { onDestroy } from "svelte";

interface NUIMessage<T = unknown> {
    action: string;
    data: T;
}

type NUIEventHandler<T = any> = (data: T) => void;

const eventListeners = new Map<string, NUIEventHandler[]>();

const eventListener = (event: MessageEvent<NUIMessage>) => {
    const { action, data } = event.data;
    const handlers = eventListeners.get(action);

    if (handlers) {
        handlers.forEach((handler) => handler(data));
    }
};

window.addEventListener("message", eventListener);

/**
 * A function that creates a listener for a specific NUI event. (Called by client `SendNuiMessage` / `SendNUIMessage`)
 * @param name The message `name` to listen for
 * @param handler The callback function that will be executed when the event is triggered
 **/
export function nuiEvent<T = unknown>(
    action: string,
    handler: NUIEventHandler<T>
) {
    const handlers = eventListeners.get(action) || [];
    handlers.push(handler);
    eventListeners.set(action, handlers);

    onDestroy(() => {
        const handlers = eventListeners.get(action) || [];

        eventListeners.set(
            action,
            handlers.filter((h) => h !== handler)
        );
    });
}