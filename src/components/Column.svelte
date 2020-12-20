<script>
    import { createEventDispatcher } from "svelte";
    import Task from "$components/Task.svelte";

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

        let task = { title: newTaskTitle };

        const detail = {
            column: id,
            task: task
        }

        console.log(detail);
        dispath('taskAdded', detail);
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
                    <button class="addingTask bg-green-500" on:click={add}>Add</button>
                    <button class="addingTask bg-yellow-300" on:click={cancel}>Cancel</button>
                </div>
            </div>
        {/if}
        {#each tasks as task}
            <Task {task} />
        {/each}
    </div>
</div>

<style>
    button.addingTask {
        @apply flex-1;
        @apply rounded;
        @apply p-2;
    }
</style>