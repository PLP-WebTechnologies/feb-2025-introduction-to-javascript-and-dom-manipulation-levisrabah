document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const header = document.getElementById('header');
    const subheader = document.getElementById('subheader');
    const content = document.getElementById('content');
    const container = document.getElementById('container');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const styleTextBtn = document.getElementById('styleTextBtn');
    const toggleElementBtn = document.getElementById('toggleElementBtn');
    const footer = document.getElementById('footer');

    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        content.textContent = 'Text has been changed dynamically!';
        subheader.textContent = 'Modified Content';
        footer.textContent = 'Text updated on: ' + new Date().toLocaleString();
    });

    // 2. Modify CSS styles via JavaScript
    styleTextBtn.addEventListener('click', function() {
        content.style.color = 'red';
        content.style.fontWeight = 'bold';
        content.style.fontSize = '1.2em';
        header.style.color = 'blue';
        header.classList.toggle('highlight');
    });

    // 3. Add/remove element when button is clicked
    let newElementExists = false;
    let newElement = null;
    
    toggleElementBtn.addEventListener('click', function() {
        if (!newElementExists) {
            // Create new element
            newElement = document.createElement('div');
            newElement.innerHTML = '<p>This is a dynamically added element!</p>';
            newElement.style.backgroundColor = '#f0f0f0';
            newElement.style.padding = '10px';
            newElement.style.marginTop = '10px';
            newElement.style.border = '1px dashed #ccc';
            
            // Add to container
            container.appendChild(newElement);
            toggleElementBtn.textContent = 'Remove Element';
            newElementExists = true;
        } else {
            // Remove element
            container.removeChild(newElement);
            toggleElementBtn.textContent = 'Add Element';
            newElementExists = false;
        }
    });
});
