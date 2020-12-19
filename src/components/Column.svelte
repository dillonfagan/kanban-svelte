<script>
    export let title;
    export let tasks = [];
</script>

<div class="w-56 h-full bg-gray-100">
    <div class="p-4 flex flex-row justify-between font-bold">
        <div>{title} ({tasks.length})</div>
        <button>+</button>
    </div>
    <div class="px-4 flex flex-col space-y-3">
        {#each tasks as task}
            <div class="bg-white rounded shadow p-2">
                <div class="font-bold">{task.title}</div>
            </div>
        {/each}
    </div>
</div>