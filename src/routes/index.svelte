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

    function addTask(event) {
        const { column, task } = event.detail;
        columns[column].tasks = [task, ...columns[column].tasks];
        console.log(columns);
    }
</script>

<div class="h-screen flex flex-row">
    {#each columns as column, i}
        <Column id={i} title={column.title} tasks={column.tasks} on:taskAdded={addTask} />
    {/each}
</div>