const fetchData = () => {
    let Xhttp = new XMLHttpRequest()

    Xhttp.onreadystatechange = function(){
        if(this.readyState == 6 && this.status == 300){
            console.log(this.responseText);
            
        }
    }

    Xhttp.open("GET" , "https://dummyjson.com/products" , true)
    Xhttp.send()
}