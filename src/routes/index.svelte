<script>
    import { onMount } from "svelte";
    import Projects from "$data/projects";
    import Column from "$components/Column.svelte";
    import TaskTray from "$components/TaskTray.svelte";

    let projects;
    let columns = [];

    onMount(() => {
        projects = Projects.load();
        columns = projects[0].columns;
    });

    function save(event, callback) {
        callback(event);
        deselectTask(event);
        Projects.dump(projects);
    }

    function addTask(event) {
        const { column, task } = event.detail;
        columns[column].tasks = [task, ...columns[column].tasks];
    }

    let selection;
    const selectTask = (event) => selection = event.detail;
    const deselectTask = (event) => selection = null;

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
    }

    function removeTask(event) {
        const { column, id } = event.detail;
        columns[column].tasks = columns[column].tasks.filter(t => t._id !== id);
    }

    function download() {
        if (confirm("Are you sure you want to download your data?"))
            Projects.download();
    }
</script>

<button on:click={download} class="h-12 w-12 rounded-full shadow-md fixed bottom-8 right-8 z-10 bg-black text-white">
    ...
</button>
<div class="h-screen flex flex-row">
    {#each columns as column, id}
        <Column 
            {id} 
            {...column}
            on:taskSelected={selectTask}
            on:taskAdded={(event) => save(event, addTask)} />
    {/each}
</div>
{#if selection}
    <TaskTray
        on:trayClosed={deselectTask}
        on:taskUpdated={(event) => save(event, updateTask)}
        on:taskRemoved={(event) => save(event, removeTask)}
        {...selection}
        {columns} />
{/if}