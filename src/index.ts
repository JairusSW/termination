import chalk from "chalk";

export class Color {
    constructor(public r = 0, public g = 0, public b = 0) { }
}

class GameOptions {
    height: number = 0;
    width: number = 0;
    data: Block[] = [];
}

export class TermGame {
    public frame = new Frame();
    constructor(options: GameOptions) {
        this.frame.height = options.height;
        this.frame.width = options.width;
        this.frame.data = options.data;
    }
    render(): void {
        let result = "";
        for (let pos = 0; pos < this.frame.height * this.frame.width; pos++) {
            if ((pos % this.frame.width) == 0) {
                result += "\n"
            }
            result += this.frame.data[pos]?.data;
        }
        console.clear();
        process.stdout.write(result + "\n");
    }
}


export class Block {
    public data!: string;
    constructor(public text: string, public color: Color, public background: Color) {
        this.data = this.update();
    }
    editText(newText: string): string {
        this.text = newText;
        return this.update();
    }
    editColor(newColor: Color): string {
        this.color = newColor;
        return this.update();
    }
    editBackground(newBackground: Color): string {
        this.background = newBackground;
        return this.update();
    }
    update(): string {
        return this.data = chalk.bgRgb(this.background.r, this.background.g, this.background.b)(chalk.rgb(this.color.r, this.color.g, this.color.b)(this.text) + " ");
    }
}

export class Frame {
    public height = 0;
    public width = 0;
    public data: Block[] = [];
}

export class Background {
}
export class Pixel {
    public text!: "";
    public textColor!: Color;
    public background!: Color;
}