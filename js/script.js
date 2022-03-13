const 
    addInput = document.querySelector('#add-input'),
    addBtn = document.querySelector('.add-btn'),
    listContent = Array.from(document.querySelectorAll('.list-content')),
    list = document.querySelector('.list table'),
    delet = document.getElementsByClassName('delet'),
    check = document.querySelector('#check'),
    checkList = document.getElementsByClassName('check-list'),
    remove = document.querySelector('.remove')

if(localStorage.getItem('itens'))
{
    list.innerHTML = localStorage.getItem('itens')
}
addBtn.addEventListener('click', addList)
remove.addEventListener('click', removeCache)

for(let i = 0; i < delet.length;i++)
{
    delet[i].addEventListener('click',deletList)
    checkList[i].addEventListener('click', checkedList)
}



function addList()
{
    if(!addInput.value)
    {
        alert('Preencha primeiro')
    }
    else
    {
        list.innerHTML +=
            `<tr class="list-content">
            <td class="add-text">
             <input type="checkbox" name="" class="check-list"> ${addInput.value} 
            </td>
            <td>
                <select name="importância" class="impotancia">
                    <option value="5">Muito alta</option>
                    <option value="4">alta</option>
                    <option value="3">media</option>
                    <option value="2">baixa</option>
                    <option value="1">muito baixa</option>
                </select>
            </td>
            <td class="delet">
                <abbr title="excluir"><img src="icon/lixeira.svg" alt="excluir"></abbr>
            </td>
            </tr>`
        for(let i = 0; i < delet.length;i++)
        {
            delet[i].addEventListener('click',deletList)
            checkList[i].addEventListener('click',checkedList)
        }

        if(check.checked)
        {
            localStorage.setItem('itens',list.innerHTML)
        }

    }
    addInput.value = ""
}

function checkedList(e)
{
    if(e.currentTarget.checked)
    {
       e.currentTarget.parentElement.parentElement.classList.add('active')
    }
    else
    {
       e.currentTarget.parentElement.parentElement.classList.remove('active')
    }
}

function deletList(e)
{
    e.currentTarget.parentElement.innerHTML = ""
}

function removeCache()
{
    localStorage.removeItem('itens')

    remove.innerText = "Itens removidos"
    setTimeout(()=>remove.innerHTML = 'Remover itens do cache',800)
}