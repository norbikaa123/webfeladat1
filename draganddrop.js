document.addEventListener('DOMContentLoaded', () => {
    const dragAndDropExample = document.getElementById('dragAndDropExample');
    const draggable = document.createElement('div');
    const dropTarget = document.createElement('div');

    draggable.draggable = true;
    draggable.style.width = '100px';
    draggable.style.height = '100px';
    draggable.style.backgroundColor = 'red';
    draggable.textContent = 'Húzz ide';

    dropTarget.style.width = '200px';
    dropTarget.style.height = '200px';
    dropTarget.style.border = '2px dashed black';
    dropTarget.style.marginTop = '20px';
    dropTarget.textContent = 'Dobd ide';

    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'Ez egy húzható elem.');
    });

    dropTarget.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropTarget.addEventListener('drop', (e) => {
        e.preventDefault();
        dropTarget.textContent = e.dataTransfer.getData('text/plain');
        dropTarget.style.backgroundColor = 'lightgreen';
    });

    dragAndDropExample.appendChild(draggable);
    dragAndDropExample.appendChild(dropTarget);
});
