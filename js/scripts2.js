var arr = [];
 
        function addItem(){
           if (localStorage.meuArr){             
              arr = JSON.parse(localStorage.getItem('meuArr')); 
           }
           
           let novoItem = document.getElementById("v","w","x").value;
           arr.push(novoItem);
           document.getElementById("v").value = "";
           localStorage.meuArr = JSON.stringify(arr);

           let novoItem2 = document.getElementById("w").value;
           arr.push(novoItem2);
           document.getElementById("w").value = "";
           localStorage.meuArr = JSON.stringify(arr);

           let novoItem3 = document.getElementById("x").value;
           arr.push(novoItem3);
           document.getElementById("x").value = "";
           localStorage.meuArr = JSON.stringify(arr);
        }
 
        function showItems(){
           let resultDIV = document.getElementById('d');
           resultDIV.innerHTML = "";
           if (localStorage.meuArr){             
              arr = JSON.parse(localStorage.getItem('meuArr')); 
           }
           
           for(let i in arr){
              let p = document.createElement("p");
              p.innerHTML = arr[i];
              resultDIV.append(p);
              p.classList.add('border',  'border-primary', 'p-2', 'my-2')
           }
        }
 
        function clearItems(){
           arr = [];
           localStorage.meuArr = JSON.stringify(arr);   
        }
 