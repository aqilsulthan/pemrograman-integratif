package database

import (
    "database/sql"
    "fmt"

    "github.com/nadirbasalamah/books-grpc/config"
)

// DB untuk declare penggunaan database
var DB *sql.DB

// Connect untuk membuat koneksi ke database (SQL)
func Connect() error {
    var err error

    DB, err = sql.Open("mysql", fmt.Sprintf("%s:%s@/%s", config.Config("DB_USER"), config.Config("DB_PASSWORD"), config.Config("DB_NAME")))
    if err != nil {
        return err
    }

    if err = DB.Ping(); err != nil {
        return err
    }

    fmt.Println("Connected to the database")
    return nil
}