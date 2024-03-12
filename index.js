function show(){
    const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laborum hic totam voluptatum quidem, minus veniam eum consequuntur laudantium quo nam, odit consequatur doloremque nemo enim nobis vel. Ex a voluptatibus nulla laborum nobis placeat sint praesentium at aut optio et, cupiditate, sapiente tempora magnam quo porro sed fugit inventore."
   const texttocheck = prompt("enter text")
 if(text.toLowerCase().includes(texttocheck.toLowerCase())){
    alert("the text is found")
 }  
 else(
    alert("text not found ")
 )
   
 
}
// function show(){
//     const num1 = prompt("enter first num")
//     const num2 = prompt("enter sec num")
//      document.write(num1*num2)
// }