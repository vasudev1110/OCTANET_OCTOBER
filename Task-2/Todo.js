const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-list');

item.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        addToDo(this.value);
        this.value = '';
    }
})

const addToDo =(item) =>{
    const listitem = document.createElement('li');
    listitem.innerHTML = `
     ${item}
    <i class="fa-solid fa-xmark"></i>
    `;

    listitem.addEventListener('click', 
    function(){
        this.classList.toggle('done');
    })

    listitem.querySelector('i').addEventListener('click', function(){
        listitem.remove();
    })
    toDoBox.appendChild(listitem);
}