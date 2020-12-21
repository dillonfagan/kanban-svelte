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

function load() {
    // localStorage.clear();
    const projectsData = JSON.parse(localStorage.getItem('projects'));
    const projects = projectsData || [defaultProject];
    console.log(`Loading Projects:\n${JSON.stringify(projects)}`);
    return projects;
}

function dump(projectsData) {
    const stringified = JSON.stringify(projectsData);
    console.log(`Dumping:\n${stringified}`);
    localStorage.setItem('projects', stringified);
}

export default {
    load,
    dump
}