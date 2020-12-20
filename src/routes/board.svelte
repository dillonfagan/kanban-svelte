<script>
    import { onMount } from "svelte";
    import Projects from "./_data/projects";
    import Column from "$components/Column.svelte";

    let project;
    let columns = [];

    onMount(() => {
        const projects = Projects.load();
        project = projects[0];
        columns = project.columns;
    });

    function columnUpdated(event) {
        const { id, tasks } = event.detail;
        console.log(`Column: ${id}`);
        columns[0].tasks = tasks;
        console.log(columns);
    }
</script>

<div class="h-screen flex flex-row">
    {#each columns as column, i}
        <Column id={i} title={column.title} tasks={column.tasks} on:update={columnUpdated} />
    {/each}
</div>