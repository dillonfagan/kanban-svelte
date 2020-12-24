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

        setTimeout(() => {
            this.style.display = 'none';
        }, 0);
    }

    function drop(event) {
        console.log('Dropped.');
        
        setTimeout(() => {
            this.style.display = 'block';
        }, 0);

        dispatch('taskDropped', {
            column: column,
            task: task,
            dropEvent: event
        });
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