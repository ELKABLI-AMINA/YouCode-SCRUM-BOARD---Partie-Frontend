 let conteur =7 // contient l'id de chaque 
 let temp_Id
function afficher() {
    let to_do_count=0;
    let in_progress_count=0;
    let done_count=0;
    to_do_tasks.innerHTML=``
    in_progress_tasks.innerHTML=``
    done_tasks.innerHTML=``
   
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index]; 
        const btn = `
            <button class="w-100 bg-white border-0 border-bottom text-start p-10px d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal"   id="${tasks[index].Id}" onclick="modifier(this.id)">
            <div class="  col-1 fs-3 text-success">
               <i class="${tasks[index].status=="To Do" ? 'fa-regular fa-circle-question' : (tasks[index].status=="In Progress") ? 'fa-solid fa-circle-notch' :'fa-regular fa-circle-check'}"></i>
            </div>
            <div class="">
                <div class="h5">${tasks[index].title}</div>
                <div class="">
                    <div class=" text-gray">#${index+1} created in ${tasks[index].date}</div>
                    <div class=" text-black" title="">${tasks[index].description.slice(0,60)}</div>
                </div>
                <div class="">
                    <span class=" btn btn-primary btn-sm p-0 px-2 h6">${tasks[index].priority}</span>
                    <span class=" btn btn-light btn-sm p-0  text text-black px-2 h6">${tasks[index].type}</span>
                </div>
            </div>
            </button>`
    if(tasks[index].status== 'To Do'){
        to_do_count++;
        to_do_tasks.innerHTML+= btn;
    } else if(tasks[index].status== 'In Progress'){
        in_progress_count++;
        in_progress_tasks.innerHTML+= btn; 

    }else{
        done_count++;
        done_tasks.innerHTML+= btn;
    }
 }
 to_do_tasks_count.innerHTML=to_do_count;
 in_progress_tasks_count.innerHTML=in_progress_count;
 done_tasks_count.innerHTML=done_count;

}
afficher();
 


function ajouter() {
    
    let check
    if(Bug.checked==true){
        check='Bug'
    }else{
        check='Feature'
    }
   const task= { // création d'un objet task
    'title'    : Title.value,
    'type'     : check,
    'priority' : Preority.value,
    'status'   : Status.value,
    'date'     : date.value,
    'description': Description.value,
    'Id'         : conteur,
   }
   tasks.push(task);
   afficher();
   form_modaal.reset()
}
function modifier(Id) {
  for (let i= 0; i< tasks.length; i++) {
   if(Id==tasks[i].Id){
    console.log(tasks[i].Id)
    temp_Id=Id
    if(tasks[i].type=='Bug'){
        Bug.checked=true
    }else{
        Feature.checked=true
    }
 
   Title.value = tasks[i].title
   Preority.value = tasks[i].priority
   Status.value = tasks[i].status
   date.value = tasks[i].date
   Description.value = tasks[i].description
   modal_footer.innerHTML=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   <button type="button" class="btn btn-primary " onclick=" actualiser()" data-bs-dismiss="modal" >Save</button>
   <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="supprimer()">Delete</button>
   `;
     
    }  
 }
 
}
function actualiser() {
    
    for (let i= 0; i< tasks.length; i++) {
        if(temp_Id==tasks[i].Id){
         if(Bug.checked==true){
            tasks[i].type='Bug'
            }else{
             tasks[i].type= 'Feature'
            }
            tasks[i].title=Title.value 
            tasks[i].priority= Preority.value
            tasks[i].status =  Status.value
            tasks[i].date=date.value
            tasks[i].description= Description.value
            afficher();

        }
    
     }
     
}
function supprimer() {
    for (let i= 0; i< tasks.length; i++) {
        if(temp_Id==tasks[i].Id){
            tasks.splice(i,1)
        }
    }
  afficher();
}
