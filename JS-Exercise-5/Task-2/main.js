let array =[
    "Ashish Shah",
"Rashmin Chhatrala",
"Yash Dubey",
"Prakash Jain",
"Yashraj Singh",
"Viraj Sinha",
"Rajesh Kumar",
"Mahesh Marwadi",
"Suresh Sahni",
"Savan Aghera",
"Amar Vilas",
"Virdas Singhania",
"Rajeshwari Bindra",
"Birendra Bhalerao",
"Virendra Bhupati",
"Bhupendra Singh",
"Bhuvam Bam",
"Shri Raj",
"Prashant Kamle",
"Kamlesh Tomar",
"Risabh Khare",
"Rishi Kohli",
"Kunwar Kharwanda",
"Kartik Koli",
"Komal Jain",
"Kartikey Pandey"
];
    
    let filterInput = document.getElementById('filterInput');

    filterInput.addEventListener('keyup',filterNames);

     let ul = document.getElementById('names');
    // create all elements
    for(let val of array){
        let li = document.createElement('li');
        li.style.display = ""
        li.setAttribute('class',"collection-item list-group-item")
        let p = document.createElement('p');
        let text = document.createTextNode(val);
        p.appendChild(text);
        li.appendChild(p);
        ul.appendChild(li);
    }


    function filterNames(){
        let filterValue = document.getElementById('filterInput').value;

        console.log(filterValue);
       
        //get lis from ul
        let li = ul.querySelectorAll('li.collection-item');


        for (let i = 0; i < li.length; i++) {
            let p = li[i].getElementsByTagName('p')[0];
            
            //if matched

            if(p.innerText.toUpperCase().indexOf(filterValue.toUpperCase()) > -1 && filterValue.length>2){
                let regx =new RegExp(filterValue,"ig");
                let regx2 =new RegExp(filterValue,"i");
            
                let text = p.innerText.match(regx2)
                p.innerHTML = array[i].replace(regx,`<b class="highlight">${text}</b>`)
                li[i].style.display = '';
            }
            else{
                li[i].style.display = 'none';
            }
            if(filterValue == ""){
                li[i].style.display ='none'
            }
        }

    }
