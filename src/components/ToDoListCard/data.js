const createData = (title, items, type) => ({
    title,
    doneText: "Done",
    notDoneText: "Not Done",
    items,
    type,
    checkboxText: "Completed"
});

const data = [


    createData("Day 1:  Getting started", [
        "Write a 'Hello, World!' program",
        "Understanding modules in Rust and their usage",
    ], "feature"),


];

export default data;

