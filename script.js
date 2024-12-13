function toggleForm() {
    const form = document.getElementById('uploadForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addDashboardItem(event) {
    event.preventDefault();

    const imageInput = document.getElementById('imageInput');
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    
    const newItem = document.createElement('div');
    newItem.classList.add('dashboard-item');

    const image = URL.createObjectURL(imageInput.files[0]);
    
    newItem.innerHTML = `
        <div class="dashboard-item-image">
            <img src="${image}" alt="${titleInput.value}">
        </div>
        <h2 class="item-title">${titleInput.value}</h2>
        <p class="item-content">${contentInput.value}</p>
    `;

    const dashboard = document.getElementById('dashboard');
    dashboard.appendChild(newItem);

    document.getElementById('uploadFormElement').reset();
    toggleForm();
}
