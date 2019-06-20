package main

import (
    "fmt"
	"log"
	"time"
	"net/http"
	"github.com/gorilla/mux"	
)

func main() {
    host := "127.0.0.1"
    port := "8000"
    addr := fmt.Sprintf("%s:%s", host, port)

    r := mux.NewRouter()
    
    r.PathPrefix("/api").HandlerFunc(apiFunc)

    r.PathPrefix("/img").Handler(http.FileServer(http.Dir("./static/")))
    r.PathPrefix("/js").Handler(http.FileServer(http.Dir("./static/")))
    r.PathPrefix("/css").Handler(http.FileServer(http.Dir("./static/")))
    r.PathPrefix("/webfonts").Handler(http.FileServer(http.Dir("./static/")))
    r.PathPrefix("/").HandlerFunc(index)

    srv := &http.Server{
        Handler:      r,
        Addr:         addr,
        WriteTimeout: 15 * time.Second,
        ReadTimeout:  15 * time.Second,
    }

    log.Printf("listening on %s...\n", addr)
    log.Fatal(srv.ListenAndServe())
}

func index(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "./static/index.html")
}

func apiFunc(w http.ResponseWriter, r *http.Request) {
    log.Println("API Call")
}