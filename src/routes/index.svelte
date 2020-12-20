<script>
    import { onMount } from "svelte";
    import Projects from "./_data/projects";
    import Column from "$components/Column.svelte";
    import TaskTray from "../components/TaskTray.svelte";

    let projects;
    let columns = [];

    onMount(() => {
        projects = Projects.load();
        columns = projects[0].columns;
    });

    function save() {
        Projects.dump(projects);
    }

    function addTask(event) {
        const { column, task } = event.detail;
        columns[column].tasks = [task, ...columns[column].tasks];
        console.log(columns);

        save();
    }

    let selectedTask;
    function selectTask(event) {
        console.log(`Selected Task: ${event.detail.title}`);
        selectedTask = event.detail;
    }
</script>

<div class="h-screen flex flex-row">
    {#each columns as column, i}
        <Column 
            id={i} 
            title={column.title}
            tasks={column.tasks}
            on:taskSelected={selectTask}
            on:taskAdded={addTask} />
    {/each}
</div>
{#if selectedTask}
    <TaskTray task={selectedTask} />
{/if}