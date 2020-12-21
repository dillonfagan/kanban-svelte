<script>
    import { createEventDispatcher } from "svelte";

    export let columns;
    export let column;
    export let task;

    const dispatch = createEventDispatcher();

    function save() {
        dispatch('taskUpdated', {
            column: column,
            task: task
        });
    }

    function close() {
        dispatch('trayClosed', null);
    }
</script>

<aside class="h-screen w-96 p-4 flex flex-col space-y-4 fixed top-0 right-0 bg-gray-400">
    <div class="font-bold text-xl">{task.title || "Task"}</div>
    <div class="flex flex-col space-y-1">
        <label for="title" class="text-sm">Title</label>
        <input
            id="title"
            bind:value={task.title} 
            class="p-2 rounded" />
    </div>
    <div class="flex flex-col space-y-1">
        <label for="status" class="text-sm">Status</label>
        <select id="status" bind:value={column} class="p-2 rounded">
            {#each columns as column, id}
                <option value={id}>{column.title}</option>
            {/each}
        </select>
    </div>
    <div class="flex flex-row space-x-3">
        <button on:click={save} class="bg-black text-white">Save</button>
        <button on:click={close} class="bg-yellow-300">Cancel</button>
    </div>
</aside>

<style>
    button {
        @apply flex-1;
        @apply rounded;
        @apply p-2;
    }
</style>