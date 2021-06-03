$(function(){
    $("#form").submit(function(e) {
        e.preventDefault()
        console.log("Function is firing")
        //get value from form
        let str = document.getElementById('str').value;
    
        //create regex for all non-alphanumeric characters
        let reStr = /[\W_]/g;
      
        //change to lowercase and use regex to filter
        let filteredStr = str.toLowerCase().replace(reStr, '');
      
        //create reversed string
        let reversedStr = filteredStr.split('').reverse().join('');
      
        //checked if 
        if(filteredStr === reversedStr){
            alert("That is a plaindrome!");
        } else {
            alert("That is NOT a plaindrome!");
        };
      });
});
