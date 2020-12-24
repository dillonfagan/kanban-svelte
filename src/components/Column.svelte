<script>
    import { createEventDispatcher } from "svelte";
    import { v4 as uuid } from "uuid";
    import { drag } from "$data/drag";
    import Task from "$components/Task.svelte";
    import Button from "$components/Button.svelte";

    export let id;
    export let title;
    export let tasks = [];

    const dispatch = createEventDispatcher();

    let addingTask = false;
    let newTaskTitle;

    function addTask() {
        newTaskTitle = "";
        addingTask = true;
    }

    function add() {
        addingTask = false;

        const task = {
            _id: uuid(),
            title: newTaskTitle
        };

        dispatch('taskAdded', {
            column: id,
            task: task
        });
    }

    function cancel() {
        addingTask = false;
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
        <button on:click={addTask}>+</button>
    </div>
    <div
        on:drop={drop}
        on:dragenter|preventDefault={() => {}} 
        on:dragover|preventDefault={() => {}}
        class="px-4 h-full flex flex-col space-y-3">
        {#if addingTask}
            <div class="flex flex-col space-y-3">
                <input 
                    bind:value={newTaskTitle} 
                    class="rounded p-2"
                    placeholder="Give it a title..." />
                <div class="flex flex-row space-x-3">
                    <Button color="green" class="flex-1" on:click={add}>Add</Button>
                    <Button color="yellow" class="flex-1" on:click={cancel}>Cancel</Button>
                </div>
            </div>
        {/if}
        {#each tasks as task}
            <Task on:taskSelected column={id} {task} />
        {/each}
    </div>
</div>