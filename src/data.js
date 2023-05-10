const createData = (title, items, type) => ({
    title,
    doneText: "Done",
    notDoneText: "Not Done",
    items,
    type,
    checkboxText: "Completed"
});

const data = [


    createData("Day 1: Day 1: Getting started", [
        "Write a 'Hello, World!' program",
        "Understanding modules in Rust and their usage",
    ], "feature"),
    createData("Day 2: Functions and Modules in Rust", [
        "Creating and calling functions in Rust",
        "Understanding modules in Rust and their usage",
    ], "feature"),

    // createData("Day 3: Ownership and Borrowing in Rust", [
    //     "Introduction to Rust’s ownership model and memory safety",
    //     "Borrowing and references in Rust",
    //     "The concept of lifetimes and memory management in Rust",
    // ], "feature"),
    // createData("Day 4: Structs and Enums in Rust", [
    //     "Creating and using Structs in Rust",
    //     "Using enums in Rust",
    // ], "feature"),

    // createData("Day 5: Collections and Strings in Rust", [
    //     "Understanding collections in Rust, including vectors, arrays, and hash maps",
    //     "Working with strings in Rust",
    // ], "feature"),

    // createData("Day 6: Traits in Rust", [
    //     "Understanding traits and how they are used in Rust",
    //     "Implementing traits for structs and enums in Rust",
    // ], "feature"),

    // createData("Day 7: Generics in Rust", [
    //     "Using generic types and functions in Rust",
    //     "Understanding and implementing trait bounds in Rust",
    // ], "feature"),

    // createData("Day 8: Concurrency and Parallelism in Rust", [
    //     "Introduction to concurrency and parallelism in Rust",
    //     "Creating threads and using channels in Rust",
    //     "Mutexes and atomic operations in Rust",
    // ], "feature"),

    // createData("Day 9: Error Handling in Rust", [
    //     "Understanding Rust’s error handling mechanisms",
    //     "Using the Result and Option enums in Rust",
    //     "Handling errors with the ? operator in Rust",
    // ], "feature"),

    // createData("Day 10: Advanced Functions and Closures in Rust", [
    //     "Advanced functions, including function pointers and closures in Rust",
    //     "Higher-order functions and functional programming in Rust",
    // ], "feature"),

    // createData("Day 11: File I/O and Networking in Rust", [
    //     "Reading and writing files in Rust",
    //     "Networking basics in Rust, including TCP and UDP",
    //     "Creating a basic server in Rust",
    // ], "feature"),

    // createData("Day 12: Testing and Debugging in Rust", [
    //     "Writing unit tests in Rust",
    //     "Debugging Rust code with print statements and debuggers",
    //     "Using Rust's built-in testing framework",
    // ], "feature"),

    // createData("Day 13: Rust Crates and Package Management", [
    //     "Understanding crates and packages in Rust",
    //     "Using Cargo to manage dependencies and build Rust projects",
    //     "Publishing Rust crates to crates.io",
    // ], "feature"),

    // createData("Day 14: Advanced Topics in Rust", [
    //     "Advanced traits and trait bounds in Rust",
    //     "Macros and meta-programming in Rust",
    //     "Unsafe Rust and low-level programming in Rust",
    // ], "feature"),

    // createData("Day 15: Web Development in Rust", [
    //     "Using Rust on the server side with web frameworks like Rocket or Actix-Web",
    //     "Building RESTful APIs with Rust",
    //     "Creating a small project or application that incorporates the concepts learned during the previous",
    // ], "feature"),
];

export default data;

