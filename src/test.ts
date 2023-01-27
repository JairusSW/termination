import chalk from "chalk";

const board = [
    chalk.bgWhite(chalk.black("♜ ")), chalk.bgBlack(chalk.black("♞ ")), chalk.bgWhite(chalk.black("♗ ")), chalk.bgBlack(chalk.black("♕ ")), chalk.bgWhite(chalk.black("♔ ")), chalk.bgBlack(chalk.black("♗ ")), chalk.bgWhite(chalk.black("♞ ")), chalk.bgBlack(chalk.black("♜ ")),
    chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")),
    chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")),
    chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")),
    chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")),
    chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")), chalk.bgBlack(chalk.black("  ")), chalk.bgWhite(chalk.black("  ")),
    chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")), chalk.bgWhite(chalk.black("♙ ")), chalk.bgBlack(chalk.black("♙ ")),
    chalk.bgBlack(chalk.white("♜ ")), chalk.bgWhite(chalk.white("♞ ")), chalk.bgBlack(chalk.white("♗ ")), chalk.bgWhite(chalk.white("♕ ")), chalk.bgBlack(chalk.white("♔ ")), chalk.bgWhite(chalk.white("♗ ")), chalk.bgBlack(chalk.white("♞ ")), chalk.bgWhite(chalk.white("♜ ")),
]

process.stdout.write(board.slice(0, 8).join("") + "\n");
process.stdout.write(board.slice(8, 16).join("") + "\n");
process.stdout.write(board.slice(16, 24).join("") + "\n");
process.stdout.write(board.slice(24, 32).join("") + "\n");
process.stdout.write(board.slice(32, 40).join("") + "\n");
process.stdout.write(board.slice(40, 48).join("") + "\n");
process.stdout.write(board.slice(48, 56).join("") + "\n");
process.stdout.write(board.slice(56, 6).join("") + "\n");

process.stdout.write(chalk.bgRgb(240, 82, 37)(chalk.rgb(5, 162, 233)("\u2584")) + chalk.bgRgb(127, 186, 6)(chalk.rgb(251,183, 7)("\u2584")) + "\n");