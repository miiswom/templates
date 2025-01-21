const addNewBook = document.querySelector("#add-new");
const modal = document.querySelector("#modal");
const modalX = document.querySelector("#modal-close");
const modalClearButton = document.querySelector("#clear-button");
const addButton = document.querySelector("#add-button");


addNewBook.addEventListener("click", openModal);
modalX.addEventListener("click", closeModal);
modalClearButton.addEventListener("click", clearModalValues);
addButton.addEventListener("click", addBookToLibrary);

function openModal() {
  modal.style.display = "block";
  mainContainer.style.filter = "blur(5px)";
}

function closeModal() {
  modal.style.display = "none";
  mainContainer.style.filter = "blur(0px)"
}

function clearModalValues() {
  newBookTitle.value = "";
  newBookAuthor.value = "";
  newBookPages.value = "";
  newBookLang.value = "";
  newBookPubs.value = "";
  newBookIsRead.checked == false;
  newBookIsUnread.checked == false
}