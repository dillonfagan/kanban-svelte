<script>
    import Task from "$components/Task.svelte";

    export let title;
    export let tasks = [];

    function addTask() {
        let task = { title: "New task" };
        tasks = [task, ...tasks];
    }
</script>

<div class="w-64 h-full bg-gray-100">
    <div class="p-4 flex flex-row justify-between font-bold">
        <div>{title} ({tasks.length})</div>
        <button on:click={addTask}>+</button>
    </div>
    <div class="px-4 flex flex-col space-y-3">
        {#each tasks as task}
            <Task {task} />
        {/each}
    </div>
</div>