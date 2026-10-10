let InputBox =document.querySelector('.InputBox');
let addBtn=document.querySelector('.addBtn');
let ItemContainerBox=document.querySelector('.ItemContainerBox');

addBtn.addEventListener('click',()=>{
    let inputBOxValue=InputBox.value;
    let ele=document.createElement("div");
    ele.className="ItemContainer";
    ele.innerHTML=`
    <p class="list">${inputBOxValue}</p>
                       
                        <div class="ButtonContainer">
                            <button class="editBtn">edit</button>
                            <button class="removeBtn">Remove</button>
                        </div>

    `
    if(InputBox.value!=="")
    {
        InputBox.value='';
        ItemContainerBox.append(ele);
        addBtn.innerText='Add';

    }

});
let editBtn=document.querySelector(".editBtn");
let removeBtn=document.querySelector(".removeBtn");

ItemContainerBox.addEventListener('click',(e)=>{
     if (e.target.classList.contains('removeBtn')) {
        e.target.closest('.ItemContainer').remove();
    }
   if (e.target.classList.contains('editBtn')) {
        const item = e.target.closest('.ItemContainer');
        const text = item.querySelector('.list').innerText;

        InputBox.value = text;
        item.remove();
        addBtn.innerText='Edit'
    }
})