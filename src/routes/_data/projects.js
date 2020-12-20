import { writable } from "svelte/store";

const defaultProject = {
    title: "My First Project",
    columns: [
        {
            title: "To do",
            tasks: []
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
}

const store = writable();

function load() {
    const projectsData = JSON.parse(localStorage.getItem('projects'));
    const projects = projectsData || [defaultProject];
    store.set(projects);
}

function get() {
    return store;
}

export default {
    load,
    get
}