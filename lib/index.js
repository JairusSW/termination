import chalk from "chalk";
export class Color {
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
class GameOptions {
    constructor() {
        this.height = 0;
        this.width = 0;
        this.data = [];
    }
}
export class TermGame {
    constructor(options) {
        this.frame = new Frame();
        this.frame.height = options.height;
        this.frame.width = options.width;
        this.frame.data = options.data;
    }
    render() {
        var _a;
        let result = "";
        for (let pos = 0; pos < this.frame.height * this.frame.width; pos++) {
            if ((pos % this.frame.width) == 0) {
                result += "\n";
            }
            result += (_a = this.frame.data[pos]) === null || _a === void 0 ? void 0 : _a.data;
        }
        console.clear();
        process.stdout.write(result + "\n");
    }
}
export class Block {
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
export class Frame {
    constructor() {
        this.height = 0;
        this.width = 0;
        this.data = [];
    }
}
export class Background {
}
export class Pixel {
}
