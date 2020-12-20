<script>
    export let task;

    let selected = false;
</script>

<div 
    on:click={() => selected = !selected}
    class:selected
    class="bg-white rounded shadow-sm hover:shadow-md p-2 select-none cursor-move">
    <div class="font-bold">{task.title}</div>
</div>

<style>
    .selected {
        @apply bg-yellow-300;
    }
</style>