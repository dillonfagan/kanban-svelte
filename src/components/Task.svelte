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

    function drag() {
        console.log('Dragging...');
    }

    function drop() {
        console.log('Dropped.');
    }
</script>

<div
    draggable="true"
    on:click={select}
    on:dragstart={drag}
    on:dragend={drop}
    class="bg-white rounded box-border border-2 border-gray-200 hover:border-black text-gray-600 hover:text-black hover:shadow p-2 select-none cursor-move">
    <div class="font-bold">{task.title}</div>
</div>