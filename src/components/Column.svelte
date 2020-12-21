<script>
    import { createEventDispatcher } from "svelte";
    import { v4 as uuid } from "uuid";
    import Task from "$components/Task.svelte";
    import Button from "$components/Button.svelte";

    export let id;
    export let title;
    export let tasks = [];

    const dispath = createEventDispatcher();

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

        dispath('taskAdded', {
            column: id,
            task: task
        });
    }

    function cancel() {
        addingTask = false;
    }
</script>

<div class="w-64 h-full bg-gray-100">
    <div class="p-4 flex flex-row justify-between font-bold">
        <div>{title} ({tasks.length})</div>
        <button on:click={addTask}>+</button>
    </div>
    <div class="px-4 flex flex-col space-y-3">
        {#if addingTask}
            <div class="flex flex-col space-y-3">
                <input 
                    bind:value={newTaskTitle} 
                    class="rounded p-2"
                    placeholder="Give it a title..." />
                <div class="flex flex-row space-x-3">
                    <Button class="flex-1 bg-green-500 text-black" on:click={add}>Add</Button>
                    <Button class="flex-1 bg-yellow-300 text-black" on:click={cancel}>Cancel</Button>
                </div>
            </div>
        {/if}
        {#each tasks as task}
            <Task on:taskSelected column={id} {task} />
        {/each}
    </div>
</div>