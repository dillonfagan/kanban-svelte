<script>
    let todos = [
        {
            title: "Empty the trash"
        },
        {
            title: "Cook dinner"
        },
        {
            title: "Clean the dishes"
        }
    ]
</script>

<div class="h-screen">
    <div class="w-56 h-full bg-gray-100">
        <div>To do ({todos.length})</div>
        <div class="p-4 flex flex-col space-y-3">
            {#each todos as todo}
                <div class="bg-white rounded shadow p-2">
                    <div class="font-bold">{todo.title}</div>
                </div>
            {/each}
        </div>
    </div>
</div>