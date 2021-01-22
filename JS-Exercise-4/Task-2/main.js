let row = 0;
let edit_id=0; 
    function addtable_row(){
        const fname_data = document.getElementById('first_name').value;
        const lname_data = document.getElementById('last_name').value;
        if(fname_data !="" && lname_data!=""){
        row++;
        let table = document.getElementById('table_data');
        let tr = document.createElement('tr');
        tr.id="tr"+row;

        let td = document.createElement('td');
        let name = document.createElement('input');
        name.type = 'text';
        name.id="fname"+row;
        name.value = fname_data
        name.setAttribute('readonly', '');

        let last_name = document.createElement('input');
        last_name.type = 'text';
        last_name.id="lname"+row;
        last_name.value = lname_data
        last_name.setAttribute('readonly',"");
        
        let edit = document.createElement('button');
        edit.innerHTML="Edit";
        edit.id=row;
        edit.onclick = edit_row;
        edit.setAttribute('class','btn btn-primary m-2')

        let delet = document.createElement('button');
        delet.id=row;
        delet.onclick = delet_row;
        delet.innerHTML="delete";
        delet.setAttribute('class','btn btn-danger m-2')

        td.appendChild(name);
        td.appendChild(last_name);
        td.appendChild(edit);
        td.appendChild(delet)
        tr.appendChild(td);
        table.appendChild(tr);
        }
        else alert("please enter value")

    }  
  function  edit_row(){
      edit_id = this.id;
     document.getElementById('chang_btn').innerHTML=`<button onclick="update_btn()" class="btn btn-outline-primary">Update</button>`
      document.getElementById('first_name').value = document.getElementById(`fname${edit_id}`).value;
      document.getElementById('last_name').value= document.getElementById(`lname${edit_id}`).value;
     
  }
  function delet_row(){
   const tr = document.getElementById(`tr${this.id}`);
   const table = document.getElementById('table_data');
   table.removeChild(tr);
  }
  function update_btn(){
      let first_name =  document.getElementById('first_name');
      let last_name = document.getElementById('last_name');
      if(document.getElementById(`fname${edit_id}`) != null){
      document.getElementById(`fname${edit_id}`).value = first_name.value;
      document.getElementById(`lname${edit_id}`).value = last_name.value;
      first_name.value = "";
      last_name.value ="";  
      document.getElementById('chang_btn').innerHTML=`<button onclick="addtable_row()" class="btn btn-outline-primary">Add</button>` ;
      edit_id = 0;
      } else{
          alert("some one deleted row , cant'update");
          document.getElementById('chang_btn').innerHTML=`<button onclick="addtable_row()" class="btn btn-outline-primary">Add</button>` ;
          edit_id = 0;

      }
  }