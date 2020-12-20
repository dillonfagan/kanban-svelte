<script>
    export let task;
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
</aside>