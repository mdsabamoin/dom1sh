
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
      const button = document.createElement('button');
      button.className = 'edit-btn';
      button.textContent = 'Edit'; 
      li.appendChild(button);
  });
  const form = document.querySelector('form');
  const ul = document.querySelector('ul');

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const fruitToAdd = document.querySelector('#fruit-to-add');
    const newLi = document.createElement('li');
    // const deletebutton = document.createElement('button');
    newLi.innerHTML = fruitToAdd.value + '<button class = "delete-btn">x</button>';
    // newLi.appendChild(li);
    ul.appendChild(newLi);

  })
  ul.addEventListener('click',(event)=>{
      if(event.target.classList.contains('delete-btn')){
        const deletelis = event.target.parentElement;
        ul.removeChild(deletelis);
      }
  });