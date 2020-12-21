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

    let selection;
    function selectTask(event) {
        selection = event.detail;
    }

    function updateTask(event) {
        const { column, task } = event.detail;

        if (column !== selection.column) {
            const filtered = columns[selection.column].tasks.filter(t => t._id !== task._id);
            columns[selection.column].tasks = filtered;

            columns[column].tasks = [...columns[column].tasks, task];
        } else {
            const index = columns[column].tasks.findIndex(t => t._id === task._id);
            columns[column].tasks[index] = task;
        }
        
        selection = null;
        save();
    }

    function closeTray(event) {
        selection = null;
    }
</script>

<div class="h-screen flex flex-row">
    {#each columns as column, id}
        <Column 
            {id} 
            {...column}
            on:taskSelected={selectTask}
            on:taskAdded={addTask} />
    {/each}
</div>
{#if selection}
    <TaskTray
        on:trayClosed={closeTray}
        on:taskUpdated={updateTask}
        {...selection}
        {columns} />
{/if}