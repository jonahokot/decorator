interface ComputerInterface {
  getPrice(): number;
  getDescription(): string;
}

class Computer implements ComputerInterface {
  getPrice(): number {
    return 400;
  }
  getDescription(): string {
    return " this is a basic computer";
  }
}

abstract class BaseDecorator implements ComputerInterface {
  protected computer: ComputerInterface;

  constructor(computer: ComputerInterface) {
    this.computer = computer;
  }
  public getPrice(): number {
    return this.computer.getPrice();
  }
  public getDescription(): string {
    return this.computer.getDescription();
  }
}

class MouseDecorator extends BaseDecorator {
  getPrice(): number {
    return this.computer.getPrice() + 15;
  }
  getDescription(): string {
    return super.getDescription() + " with a cheap mouse";
  }
}

class KeyboardDecorator extends BaseDecorator {
  getPrice(): number {
    return super.getPrice() + 30;
  }
  getDescription(): string {
    return super.getDescription() + " with a keyboard";
  }
}

let dell = new Computer();
console.log("basic dell price is:", dell.getPrice());
console.log(dell.getDescription());
console.log("");

// let dellWithMouse = new MouseDecorator(dell);
// console.log("dell with mouse price is:", dellWithMouse.getPrice());
// console.log(dellWithMouse.getDescription());
// console.log("");

let dellWithMouseAndKeyboard = new KeyboardDecorator(new MouseDecorator(dell));
console.log(
  "dell with mouse and keyboard price is:",
  dellWithMouseAndKeyboard.getPrice()
);
console.log(dellWithMouseAndKeyboard.getDescription());
console.log("");

