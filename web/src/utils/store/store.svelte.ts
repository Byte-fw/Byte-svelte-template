/**
 * A reactive store similiar to vue's `ref` designed to replace svelte's `writable` in external stores
 * @param initial Initial value of the store
 * @returns A reactive store object
 */
export const store = <T>(initial: T) => {
    let state = $state(initial);

    return {
        get value() {
            return state;
        },
        set value(value: T) {
            state = value;
        }
    }
}