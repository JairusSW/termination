var _a;
import chalk from "chalk";
class Color {
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
const black = new Color(63, 68, 81);
const white = new Color(215, 218, 224);
class Termination {
    constructor() {
        this.frame = new Frame();
        this.frame.height = 8;
        this.frame.width = 8;
        this.frame.data = [
            new Block("♜", black, white),
            new Block("♞", white, black),
            new Block("♗", black, white),
            new Block("♕", white, black),
            new Block("♔", black, white),
            new Block("♗", white, black),
            new Block("♞", black, white),
            new Block("♜", white, black),
        ];
    }
    render() {
        let result = "";
        //for (let h = 0; h < this.frame.height; h++) {
        for (let w = 0; w < this.frame.width; w++) {
            result += this.frame.data[w].data;
        }
        //}
        process.stdout.write(result + "\n");
    }
    clear() {
        process.stdout.cursorTo(0);
        process.stdout.cursorTo(0);
    }
}
class Block {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
        this.data = this.update();
    }
    editText(newText) {
        this.text = newText;
        return this.update();
    }
    editColor(newColor) {
        this.color = newColor;
        return this.update();
    }
    editBackground(newBackground) {
        this.background = newBackground;
        return this.update();
    }
    update() {
        return this.data = chalk.bgRgb(this.background.r, this.background.g, this.background.b)(chalk.rgb(this.color.r, this.color.g, this.color.b)(this.text) + " ");
    }
}
class Frame {
    constructor() {
        this.height = 0;
        this.width = 0;
        this.data = [];
    }
}
class Background {
}
const game = new Termination();
game.render();
(_a = game.frame.data[0]) === null || _a === void 0 ? void 0 : _a.editText("♕");
game.clear();
game.render();
class Pixel {
}
