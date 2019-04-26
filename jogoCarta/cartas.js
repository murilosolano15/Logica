/**
 * Jodo de cartas - Exemplo de uso do Array
 * @author Murilo Solano
 */

let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let naipes = ["♥", "♦", "♣", "♠"]
let f = faces[Math.floor(Math.random() * 13)]
let n = naipes[Math.floor(Math.random() * 4)]
document.write("<h1>"+ f + n + "</h1>")