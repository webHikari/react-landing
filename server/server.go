package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "Index Page")
    })

    http.HandleFunc("/login", handleLogin)

    fmt.Println("Server is listening...")
    http.ListenAndServe("localhost:3000", nil)
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
    // Добавляем заголовки для разрешения CORS
    w.Header().Set("Access-Control-Allow-Origin", "*") // Разрешаем запросы из любого источника
    w.Header().Set("Access-Control-Allow-Methods", "POST")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

    time.Sleep(1 * time.Second) // Задержка на 1 секунду

    // Случайный ответ: успех или ошибка
    if rand.Intn(2) == 0 {
        w.WriteHeader(http.StatusOK)
        fmt.Fprint(w, "Login successful")
    } else {
        w.WriteHeader(http.StatusAccepted)
        fmt.Fprint(w, "Login failed")
    }
}
