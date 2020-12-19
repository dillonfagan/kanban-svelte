<script>
    let todos = ["Empty the trash", "Cook dinner", "Clean the dishes"]
</script>

<div class="h-screen">
    <div class="w-56 h-full bg-gray-100">
        <div>To do ({todos.length})</div>
        <div class="p-4 flex flex-col space-y-3">
            {#each todos as todo}
                <div class="bg-white rounded shadow p-2">{todo}</div>
            {/each}
        </div>
    </div>
</div>