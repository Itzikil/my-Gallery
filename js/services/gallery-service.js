'use strict'

var gProjs = [
    {
        id: "pacman",
        name: "Pacman",
        title: "eat those coockies",
        desc: "The nice old pacman game we all love",
        url: "https://itzikil.github.io/pacman/",
        publishedAt: new Date().toDateString() ,
        labels: ["Matrixes", " Games"],
    },
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "beware the mines!",
        desc: "The nice old minesweeper game we all love",
        url: "https://itzikil.github.io/MineSweeper/",
        publishedAt: new Date().toDateString(),
        labels: ["Matrixes", " Games"],
    },
    {
        id: "book-shop",
        name: "Book Shop",
        title: "New book shop!",
        desc: "We have all the books you need",
        url: "https://itzikil.github.io/book-shop/",
        publishedAt: new Date().toDateString(),
        labels: ["shops"],
    },
    {
        id: "guess-me",
        name: "Guess me",
        title: "think of someone i'll find him",
        desc: "The jinny can find anyone you can think of, and if not this time, he will next time for sure",
        url: "https://itzikil.github.io/guess-me/",
        publishedAt: new Date().toDateString(),
        labels: ["games"],
    },
]


function getProj(){
    return gProjs
}