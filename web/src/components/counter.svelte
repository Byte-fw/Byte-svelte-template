<script lang="ts">
    import { fetchNui } from "@/utils/nui/fetchNui";
    import { nuiEvent } from "@/utils/nui/nuiEvent";
    import { store } from "@utils/store/store.svelte";

    const count = store(0);

    $effect(() => {
        fetchNui("getCount", count.value);
    });

    nuiEvent<number>("setCount", newCount => (count.value = newCount));
</script>

<button onclick={() => count.value++}>{count.value}</button>

<style>
    button {
        width: 10vh;
        height: 10vh;
        font-size: 6vh;
    }
</style>
