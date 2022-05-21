function book(name,author,genre){
    this.name=name;
    this.author=author;
    this.genre=genre;
}
function display(){
    

}
display.prototype.add=function(Book){
    console.log("adding to ui");
    tablebody=document.getElementById("tablebody");
    let uistring=`  <tr>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.genre}</td>
                    </tr>`;
    tablebody.innerHTML+=uistring;
}
display.prototype.clear=function(){
    let libraryforms=document.getElementById("libraryforms");
    libraryforms.reset();
}
display.prototype.validate=function(Book){
    if(Book.name.length>2&&Book.author.length>2){
        return true;
    }
    else{
        return false;
    }
}
display.prototype.show=function(head,message){
    let mess=document.getElementById("mess");
    mess.innerHTML=`<div class="alert alert-success" role="alert">
    <strong>${head} </strong> ${message}
   
  </div>`
  setTimeout(function(){
      mess.innerHTML='';
  },2000);

}
let libraryforms=document.getElementById("libraryforms");
libraryforms.addEventListener("submit",libraryformsubmit);
function libraryformsubmit(e){
    console.log("print");
let name=document.getElementById("bookname").value;
let author=document.getElementById("author").value;
let fiction=document.getElementById("fiction");
let studies=document.getElementById("studies");
let programming=document.getElementById("programming");
let genre;
if(fiction.checked){
    genre=fiction.value;
}
else if(studies.checked){
    genre=studies.value;
}
else{
    genre=programming.value;
}
let Book=new book(name, author,genre)
console.log(Book);
let Display =new display();
if(Display.validate(Book)){
    Display.add(Book);
    Display.clear();
    Display.show('success','added sucessfully')
}
else{
    Display.show('danger','cannot add it')
}
e.preventDefault();
}