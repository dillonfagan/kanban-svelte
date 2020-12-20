<script>
    import Task from "$components/Task.svelte";

    export let title;
    export let tasks = [];

    let addingTask = false;
    let newTaskTitle;

    function addTask() {
        newTaskTitle = "";
        addingTask = true;
    }

    function add() {
        addingTask = false;

        let task = { title: newTaskTitle };
        tasks = [task, ...tasks];
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
            <div>
                <input bind:value={newTaskTitle} placeholder="Give it a title..." />
                <div>
                    <button on:click={add}>Add</button>
                    <button on:click={cancel}>Cancel</button>
                </div>
            </div>
        {/if}
        {#each tasks as task}
            <Task {task} />
        {/each}
    </div>
</div>