import { Block, Color, TermGame } from "./index.js";

const black = new Color(63, 68, 81);
const white = new Color(215, 218, 224);

const pieces = {
    none: " ",
    white: {
        king: "♔",
        queen: "♕",
        rook: "♖",
        bishop: "♗",
        knight: "♘",
        pawn: "♙"
    },
    black: {
        king: "♚",
        queen: "♛",
        rook: "♜",
        bishop: "♝",
        knight: "♞",
        pawn: "♟︎"
    }
}

const game = new TermGame({
    height: 8,
    width: 8,
    data: [
        new Block(pieces.black.rook, black, white), // a8
        new Block(pieces.black.knight, white, black), // b8
        new Block(pieces.black.bishop, black, white), // c8
        new Block(pieces.black.queen, white, black), // d8
        new Block(pieces.black.king, black, white), // e8
        new Block(pieces.black.bishop, white, black), // f8
        new Block(pieces.black.knight, black, white), // g8
        new Block(pieces.black.rook, white, black), // h8

        new Block(pieces.black.pawn, white, black), // a7
        new Block(pieces.black.pawn, black, white), // b7
        new Block(pieces.black.pawn, white, black), // c7
        new Block(pieces.black.pawn, black, white), // d7
        new Block(pieces.black.pawn, white, black), // e7
        new Block(pieces.black.pawn, black, white), // f7
        new Block(pieces.black.pawn, white, black), // g7
        new Block(pieces.black.pawn, black, white), // h7

        new Block(pieces.none, black, white), // a6
        new Block(pieces.none, white, black), // b6
        new Block(pieces.none, black, white), // c6
        new Block(pieces.none, white, black), // d6
        new Block(pieces.none, black, white), // e6
        new Block(pieces.none, white, black), // f6
        new Block(pieces.none, black, white), // g6
        new Block(pieces.none, white, black), // h6

        new Block(pieces.none, white, black), // a5
        new Block(pieces.none, black, white), // b5
        new Block(pieces.none, white, black), // c5
        new Block(pieces.none, black, white), // d5
        new Block(pieces.none, white, black), // e5
        new Block(pieces.none, black, white), // f5
        new Block(pieces.none, white, black), // g5
        new Block(pieces.none, black, white), // h5

        new Block(pieces.none, black, white), // a4
        new Block(pieces.none, white, black), // b4
        new Block(pieces.none, black, white), // c4
        new Block(pieces.none, white, black), // d4
        new Block(pieces.none, black, white), // e4
        new Block(pieces.none, white, black), // f4
        new Block(pieces.none, black, white), // g4
        new Block(pieces.none, white, black), // h4

        new Block(pieces.none, white, black), // a3
        new Block(pieces.none, black, white), // b3
        new Block(pieces.none, white, black), // c3
        new Block(pieces.none, black, white), // d3
        new Block(pieces.none, white, black), // e3
        new Block(pieces.none, black, white), // f3
        new Block(pieces.none, white, black), // g3
        new Block(pieces.none, black, white), // h3

        new Block(pieces.white.pawn, black, white), // a2
        new Block(pieces.white.pawn, white, black), // b2
        new Block(pieces.white.pawn, black, white), // c2
        new Block(pieces.white.pawn, white, black), // d2
        new Block(pieces.white.pawn, black, white), // e2
        new Block(pieces.white.pawn, white, black), // f2
        new Block(pieces.white.pawn, black, white), // g2
        new Block(pieces.white.pawn, white, black), // h2

        new Block(pieces.white.rook, white, black), // a1
        new Block(pieces.white.knight, black, white), // b1
        new Block(pieces.white.bishop, white, black), // c1
        new Block(pieces.white.queen, black, white), // d1
        new Block(pieces.white.king, white, black), // e1
        new Block(pieces.white.bishop, black, white), // f1
        new Block(pieces.white.knight, white, black), // g1
        new Block(pieces.white.rook, black, white), // h1
    ]
});

game.render();

process.stdout.write("\n".repeat(10))