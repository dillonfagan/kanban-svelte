<script>
    let columns = [
        {
            title: "To do",
            tasks: [
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
        },
        {
            title: "Doing",
            tasks: []
        },
        {
            title: "Done",
            tasks: []
        }
    ]
</script>

<div class="h-screen flex flex-row">
    {#each columns as column}
        <div class="w-56 h-full bg-gray-100">
            <div class="p-4 flex flex-row justify-between font-bold">
                <div>{column.title} ({column.tasks.length})</div>
                <button>+</button>
            </div>
            <div class="px-4 flex flex-col space-y-3">
                {#each column.tasks as task}
                    <div class="bg-white rounded shadow p-2">
                        <div class="font-bold">{task.title}</div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>