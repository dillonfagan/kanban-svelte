<script>
    import { createEventDispatcher } from "svelte";

    export let task;

    const dispatch = createEventDispatcher();

    let selected = false;

    function select() {
        selected = true;
        dispatch('taskSelected', task);
    }
</script>

<div
    on:click={select}
    class:selected
    class="bg-white rounded shadow-sm hover:shadow-md p-2 select-none cursor-move">
    <div class="font-bold">{task.title}</div>
</div>

<style>
    .selected {
        @apply bg-yellow-300;
    }
</style>