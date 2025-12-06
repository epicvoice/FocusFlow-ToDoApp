const newTaskTitle = document.querySelector('.new-task');
const addNewTaskBtn = document.querySelector('.add-btn');

const searchTask = document.querySelector('.search-task');
const searchBtn = document.querySelector('.search-btn');

const totalTasksNumber = document.querySelector('.total');
let taskCount = 0;

const container = document.getElementById('container');
const deleteAllBtn = document.querySelector('.delete-all');

const createNewTask = () => {
	const newTaskContent = newTaskTitle.value;

	if (newTaskContent.trim() !== '') {
		const newTask = document.createElement('div');
		newTask.classList.add('task');
		newTask.innerHTML = `<div class="task-left">
                <div class="check check-false"></div>
                <span class = "task-title">${newTaskContent}</span>
            </div>
            <div class="remove"><i class="fa-solid fa-xmark"></i></div>`;
		document.getElementById('container').appendChild(newTask);
		newTaskTitle.value = '';

		taskCount++;
		countTasks();

		console.log(`Succesfully created new task: ${newTaskContent}.`);
	} else {
		console.log('error');
		return;
	}
};

const countTasks = () => {
	totalTasksNumber.innerHTML = `Total tasks: <strong>${taskCount}</strong>`;
};

container.addEventListener('click', (e) => {
	if (e.target.closest('.remove')) {
		const taskToRemove = e.target.closest('.task');
		if (taskToRemove) {
			taskToRemove.remove();
			taskCount--;
			countTasks();
			console.log('Task removed.');
		}
	} else if (e.target.closest('.check')) {
		const checkDiv = e.target.closest('.check');
		checkDiv.innerHTML =
			'<div class="completed"><i class="fa-solid fa-check"></i></div>';
		const taskContent = document.querySelector('.task-title')
		taskContent.style.textDecoration = "line-through"
		
	}
});

const deleteAllTasks = () => {
	document.querySelectorAll('.task').forEach((el) => el.remove());

	totalTasksNumber.innerHTML = `Total tasks: <strong>0</strong>`;
};

addNewTaskBtn.addEventListener('click', createNewTask);
newTaskTitle.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		createNewTask();
	}
});

deleteAllBtn.addEventListener('click', deleteAllTasks);
