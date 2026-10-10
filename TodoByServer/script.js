let inputText=document.querySelector('.inputText');
let addBtn=document.querySelector('.addBtn');
let ListContainer=document.querySelector('.ListContainer');
let API='https://6984dbbb885008c00db289b9.mockapi.io/api/v1/Todos'
async function FetchData(){
   
    ListContainer.innerHTML='';
    let Respone=await fetch(API);
    let Data=await Respone.json();
    Data.forEach((obj)=>{
        let ele=document.createElement('div');
        ele.className='ItemContainer';
        ele.innerHTML=`
              <p class="TextPara">${obj.text}</p>
            <input type="text" class="editText" value=${obj.text}>
            <div class="ButtonContainer">
                <button class="deleteBtn">Delete</button>
            <button class="EditBtn">Edit</button>
            <Button class="SaveBtn">Save</Button>
            </div>
        `
        let deleteBtn=ele.querySelector('.deleteBtn');
        let EditBtn=ele.querySelector('.EditBtn');
        let SaveBtn=ele.querySelector('.SaveBtn');
        let editText=ele.querySelector('.editText');
        let TextPara=ele.querySelector('.TextPara');
        EditBtn.addEventListener('click',()=>{
            EditBtn.style.display='none';
            TextPara.style.display='none';
            SaveBtn.style.display='inline';
            editText.style.display='inline';



        })
        SaveBtn.addEventListener('click',async ()=>{
            let editValue=editText.value;
            let respone=await UpdateData(editValue,obj.id)
            if(respone.status===200)
            {
                FetchData();
                  EditBtn.style.display='inline';
            TextPara.style.display='inline';
            SaveBtn.style.display='none';
            editText.style.display='none';
            }
        })
        deleteBtn.addEventListener('click',()=>{
            deleteData(obj.id);
        })
        ListContainer.append(ele);
        
    })
}
inputText.addEventListener('keypress',(event)=>{
    if(event.key==='Enter')
    {
        PostData();
    }
   
})
FetchData();
 async function UpdateData(editValue,id)
 {
    let objData={
        text:editValue
    }
    let response = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData),
    })
    return response;
 }
 async function deleteData(id)
{
    let respone=await fetch(`${API}/${id}`,{
        method:'DELETE'
    })
    if(respone.status===200)
    {
        FetchData();
    }
    
}

addBtn.addEventListener('click',PostData)
async function PostData(){
    
    let value=inputText.value;
    if(value==='')
        return;
    
    
    let objData={
        text:value.trim()
    }
    let respone= await fetch(API,{
        method:'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData)

    })
    if(respone.status===201)
    {
        FetchData();
        inputText.value='';
    }
   
    
}