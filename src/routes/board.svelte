<script>
    import { onMount } from "svelte";
    import Projects from "./_data/projects";
    import Column from "$components/Column.svelte";

    let projects;
    let columns = [];

    onMount(() => {
        Projects.load();
        projects = Projects.get();
        columns = $projects[0].columns;
    });
</script>

<div class="h-screen flex flex-row">
    {#each columns as column}
        <Column title={column.title} tasks={column.tasks} />
    {/each}
</div>