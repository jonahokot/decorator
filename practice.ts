//create comoponent interface and add core methods
interface Computer {
  getPrice(): number;
  getDescription(): string;
}

// Create Concrete Component
// Price in Dollars
class ComputerComponent implements Computer {
  public getPrice(): number {
    return 500;
  }
  public getDescription(): string {
    return "this is a basic computer"
  }
}

// Create Base Decorator
// it should have a field to hold a reference to a wrapped item.
abstract class BaseDecorator implements Computer {
  protected computerComponent: Computer;

  constructor(computerComponent: Computer) {
    this.computerComponent = computerComponent;
  }

  //The Decorator delegates all work to the wrapped component
  public getPrice(): number {
    return this.computerComponent.getPrice();
  }

  //   The Decorator Description.
  public getDescription(): string {
    return this.computerComponent.getDescription()
  }
}

// Decorators.
class MouseDecorator extends BaseDecorator {
  public getPrice(): number {
    return super.getPrice() + 50;
  }
  public getDescription(): string {
    return `${super.getDescription()} with a mouse`;
  }
}

class ExternalHddDecorator extends BaseDecorator {
  public getPrice(): number {
    return super.getPrice() + 100;
  }
  public getDescription(): string {
    return `${super.getDescription()} with an external hard disk drive`;
  }
}

class KeyboardDecorator extends BaseDecorator {
  public getPrice(): number {
    return super.getPrice() + 250;
  }
  public getDescription(): string {
    return `${super.getDescription()} with a keyboard`;
  }
}

const laptop = new ComputerComponent();
// console.log(laptop.getPrice());

const laptopWithMouse = new MouseDecorator(laptop);
console.log("computer and mouse costs: ", laptopWithMouse.getPrice());
console.log(laptopWithMouse.getDescription());

console.log("");
const laptopWithKeyboard = new KeyboardDecorator(laptop);
const laptopWithMouseAndKeyboard = new MouseDecorator(laptopWithKeyboard);
console.log("computer and keyboard costs:",laptopWithKeyboard.getPrice());
console.log(laptopWithKeyboard.getDescription());

console.log("");
console.log("computer with keyboard and mouse costs:",laptopWithMouseAndKeyboard.getPrice());
console.log(laptopWithMouseAndKeyboard.getDescription());
