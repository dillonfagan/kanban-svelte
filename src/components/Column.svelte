<script>
    import { createEventDispatcher } from "svelte";
    import { drag } from "$data/drag";
    import TaskAdder from "$components/TaskAdder.svelte";
    import Task from "$components/Task.svelte";

    export let id;
    export let title;
    export let tasks = [];

    const dispatch = createEventDispatcher();

    let addingTask = false;

    function add(event) {
        addingTask = false;
        const { task } = event.detail;
        dispatch('taskAdded', {
            column: id,
            task: task
        });
    }

    function drop(event) {
        dispatch('taskDropped', {
            column: id,
            previousColumn: $drag.column,
            task: $drag.task
        });

        $drag = {};
    }
</script>

<div class="w-64 h-full bg-gray-100">
    <div class="p-4 flex flex-row justify-between font-bold">
        <div>{title} ({tasks.length})</div>
        <button on:click={() => addingTask = true}>+</button>
    </div>
    <div
        on:drop={drop}
        on:dragenter|preventDefault={() => {}} 
        on:dragover|preventDefault={() => {}}
        class="px-4 h-full flex flex-col space-y-3">
        {#if addingTask}
            <TaskAdder on:add={add} on:cancel={() => addingTask = false} />
        {/if}
        {#each tasks as task}
            <Task on:taskSelected column={id} {task} />
        {/each}
    </div>
</div>