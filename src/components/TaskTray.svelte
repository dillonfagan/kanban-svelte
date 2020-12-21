<script>
    import { createEventDispatcher } from "svelte";

    export let task;

    const dispatch = createEventDispatcher();

    function save() {
        dispatch('taskUpdated', task);
    }

    function close() {
        dispatch('trayClosed', task);
    }
</script>

<aside class="h-screen w-96 p-4 flex flex-col fixed top-0 right-0 bg-gray-400">
    <div class="font-bold text-xl">{task.title}</div>
    <div class="py-4 flex flex-col space-y-1">
        <label for="title" class="text-sm">Title</label>
        <input
            id="title"
            bind:value={task.title} 
            class="p-2 rounded" />
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