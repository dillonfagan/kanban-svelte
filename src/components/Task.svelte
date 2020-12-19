<script>
    export let task;

    let titleInput;
    let editingTitle = false;

    function editTitle() {
        console.log(`Editing ${task.title}`);
        editingTitle = true;
    }

    function saveTitle() {
        editingTitle = false;

        const oldTitle = task.title;
        task.title = titleInput.value;
        console.log(`${oldTitle} is now ${task.title}`);
    }
</script>

<div class="bg-white rounded shadow-sm hover:shadow-md p-2">
    <input
        contenteditable={editingTitle}
        bind:this={titleInput}
        on:dblclick={editTitle}
        on:change={saveTitle}
        value={task.title}
        class="font-bold" />
</div>