const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 
        const li = document.createElement("li"); // Crear un nuevo elemento li en cada clic
        li.textContent = input.value;
        
        const deleteButton = document.createElement("button"); // Crear un nuevo botón de eliminar en cada clic
        deleteButton.textContent = "❌";
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);
    }
    
    input.value = '';
    input.focus();
});
