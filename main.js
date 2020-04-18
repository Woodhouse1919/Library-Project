const addBookBtn = document.querySelector('.addBookBtn');
const bookDisplay = document.querySelector('.bookDisplay');
const submitBtn = document.querySelector('#submitBtn');
const book = document.querySelector('.book');

let myLibrary = []
addBookToLibrary();


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    submitBtn.addEventListener('click', () => {
        let book = new Book();
        const formTitle = document.querySelector('#titleForm').value;
        const formAuthor = document.querySelector('#authorForm').value;
        const formPages = document.querySelector('#pagesForm').value;
        const readStatus = document.querySelector('#readStatus').value;

        book.title = formTitle;
        book.author = formAuthor;
        book.pages = formPages;
        book.read = readStatus;
        
        myLibrary.push(book);
        render();
        modal.style.display = "none";
        document.querySelector('#bookForm').reset()
    });
 }; 

           
            
   
function render() {
    myLibrary.forEach(function (item, idx, array) {
        if (idx === array.length - 1){
            bookDisplay.innerHTML+= 
            `<div class="col-3 book" data-book-index='${myLibrary.length - 1}'>
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <span class='bookClose'>&times;</span>
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Written by ${item.author}</p>
                        <p class="card-text">${item.pages} Pages</p>
                        <p class="card-text">${item.read}</p>
                    </div>
                </div>
            </div>`;

           

         }});
};  
        

bookDisplay.addEventListener('click', event => {
    console.log(event.target);
  if (event.target.classList.contains('bookClose')){ 
    console.log('close clciked')
      const bookKey = event.target.parentElement.parentElement.parentElement.dataset.bookIndex
      console.log(bookKey);

      function deleteBook() {
        // make a filter function thing to keep it the same data but remove element!!!
      }
      deleteBook()
}})



  



    
// Get the modal
const modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
addBookBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
