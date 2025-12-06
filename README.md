# Features (HTML structure & planned JS functionality)

## Current UI (HTML & CSS)
The static interface already includes:
- **Delete All** — a top-level button for clearing the entire task list.
- **New Task Title input + Add button** — UI for adding new tasks.
- **Search Task input** — intended for real-time task filtering.
- **Total Tasks display** — showing the number of tasks.
- **Task items layout** with:
  - a checkmark box on the left (for marking tasks as done),
  - a delete icon on the right (for removing a single task).
--------------------------------------------------------------
## What is working now
- Dynamic creation and insertion of .task elements
- Event handling:
    Add button click
    Enter key submission
    Delete All button
    Basic error handling (empty input blocked)

#  Planned JavaScript Functionality
The following JS features will be added soon:

##  Search / Filter Tasks
- Real-time filtering based on typed text.
- Highlight or hide tasks that don’t match the query.

## Mark Tasks as Completed
- Toggle checkmark state.
- Optionally move completed tasks to the bottom or style them differently.

## Delete a Single Task
- Remove a task using the “X” icon.
- Smooth removal animations (optional).

## Choose among Categories 
- Select a category to which new task must be assigned (work, study etc.)
- Different colors for each category

## LocalStorage Support
- Tasks will be saved after page reload.
- Store completed status, titles, and the entire list.


