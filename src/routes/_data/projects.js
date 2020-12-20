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

function get() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects || [defaultProject];
}

export default {
    get
}