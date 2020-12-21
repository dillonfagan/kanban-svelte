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

        save();
    }

    let selected;
    function selectTask(event) {
        selected = event.detail;
    }

    function updateTask(event) {
        const { column, task } = event.detail;
        const index = columns[column].tasks.findIndex(t => t.title === task.title);
        columns[column].tasks[index] = task;
        
        selected = null;
        save();
    }

    function closeTray(event) {
        selected = null;
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
{#if selected}
    <TaskTray
        on:trayClosed={closeTray}
        on:taskUpdated={updateTask}
        {selected}
        {columns} />
{/if}