<script>
    import { createEventDispatcher } from "svelte";

    export let column;
    export let task;

    const dispatch = createEventDispatcher();

    function select() {
        dispatch('taskSelected', {
            column: column,
            task: task
        });
    }
</script>

<div
    on:click={select}
    class="bg-white rounded shadow-sm hover:shadow-md p-2 select-none cursor-move">
    <div class="font-bold">{task.title}</div>
</div>