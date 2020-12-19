<script>
    import Column from "$components/Column.svelte";

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
        <Column title={column.title} tasks={column.tasks} />
    {/each}
</div>