const button = document.querySelector('.addBookBtn')
const bookDisplay = document.querySelector('.bookDisplay')

let myLibrary = []
addBookToLibrary();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    button.addEventListener('click', () => {
        let book = new Book();
        book.title = prompt('Book Title');
        book.author = prompt('Author');
        book.pages = prompt('Pages');
        book.read = prompt('Read?');
        
        // if (book.title || book.author || book.pages || book.read === ) {
        //     alert('Please Enter All Fields')
        // } else {
            myLibrary.push(book);
            render();
        // }
    });
 }; 

           
            
   
function render() {
    myLibrary.forEach(function (item, idx, array) {
        if (idx === array.length - 1){
            bookDisplay.innerHTML+= 
            `<div class="col-3">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.author}</p>
                        <p class="card-text">${item.pages}</p>
                        <p class="card-text">${item.read}</p>
                    </div>
                </div>
            </div>`;
         }});
};  
        
  



    
 
 
