 const todo=[];
 renderTodo();
 function renderTodo(){
    let todoHTML='';
 for(let i=0;i<todo.length;i++)
 {
    const td=todo[i];
    const html=`<p>
    ${td} 
    <button onclick="
     todo.splice(${i},1);
     renderTodo();
    ">Delete</button>
    </p>`;
    todoHTML+=html;
 }
 document.querySelector('.todo-list').innerHTML=todoHTML;
  }
 
 function addTodo() {
    const ele=document.querySelector('.js-input');
    const name=ele.value;
    todo.push(name);
    console.log(todo);

    ele.value='';
    renderTodo();
 }