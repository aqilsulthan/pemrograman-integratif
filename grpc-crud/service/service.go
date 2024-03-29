package service

import (
	"github.com/nadirbasalamah/books-grpc/model"
	"github.com/nadirbasalamah/books-grpc/repository"
)

// Menambahkan data buku
func AddBook(bookData model.Book) model.Book {
	return repository.AddBook(bookData)
}

// Mendapatkan data buku berdasarkan id
func GetBook(bookId string) (int, model.Book) {
	return repository.GetBook(bookId)
}

// Mendapatkan seluruh data buku
func GetBooks() []model.Book {
	return repository.GetBooks()
}

// Mengedit data buku
func UpdateBook(bookData model.Book, id string) model.Book {
	return repository.UpdateBook(bookData, id)
}

// Menghapus data buku
func DeleteBook(id string) bool {
	return repository.DeleteBook(id)
}