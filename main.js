//ELEMENTS
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const hasRead = document.getElementById("hasRead");
const addBookButton = document.getElementById("addBookButton");

const booksContainer = document.getElementById("booksContainer");
const deleteButton = document.getElementsByClassName("deleteButton");
const bookLibrary = [];



class AddBookToLibrary {

    //METHOD
    addBookToLibrary(title, author, hasRead) {
        const newBook = [this.title, this.author, this.hasRead];
        bookLibrary.push(newBook);
    }

    //METHOD
    addButton() {
        if (!titleInput.value == '' && !authorInput.value == '') {
            this.addBookToLibrary(titleInput.value, authorInput.value, hasRead.value);

            const newBook = document.createElement('div');
            newBook.className = "bookCard";
            newBook.id = crypto.randomUUID();

            //BOOK DETAILS DIV
            const bookDetailsDiv = document.createElement('div');
            bookDetailsDiv.className = "bookDetailsDiv";

            //BOOK CONTENT
            const titleP = document.createElement('p');
            const authorP = document.createElement('p');

            titleP.textContent = titleInput.value;
            authorP.textContent = authorInput.value;

            bookDetailsDiv.append(titleP);
            bookDetailsDiv.append(authorP);


            //BOOK BUTTONS DIV
            const bookButtonsDiv = document.createElement('div');
            bookButtonsDiv.className = "bookDetailsDiv bookButtonsDiv";

            //BUTTONS
            const hasReadButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            hasReadButton.textContent = hasRead.value;
            deleteButton.textContent = "Delete";

            hasReadButton.className = "interectButton";
            deleteButton.className = "interectButton deleteButton";

            deleteButton.onclick = function() {
                deleteButton.parentElement.parentElement.remove();
            }

            hasReadButton.onclick = function() {
                if (hasReadButton.textContent == "Read") {
                    hasReadButton.textContent = "Not read";
                } else {
                    hasReadButton.textContent = "Read";
                }
            }

            bookButtonsDiv.append(hasReadButton);
            bookButtonsDiv.append(deleteButton);

            //GOES THROUGH THE LOOP
            bookLibrary.forEach(() => {
                newBook.appendChild(bookDetailsDiv);
                newBook.appendChild(bookButtonsDiv);
                booksContainer.appendChild(newBook);
                event.preventDefault();
                titleInput.value = '';
                authorInput.value = '';
            });
        }
    }

    //METHOD
    deleteBook() {
        booksContainer.firstElementChild.remove();
    }

    //METHOD
    changeRead() {
        const hasReadButton = document.getElementById("hasReadButton");

        if (hasReadButton.textContent == "Read") {
            hasReadButton.textContent = "Not read";
        } else {
            hasReadButton.textContent = "Read";
        }
    }

};

let user = new AddBookToLibrary;


//EVENT LISTENER
addBookButton.addEventListener('click', function(e) {
    user.addButton();
});