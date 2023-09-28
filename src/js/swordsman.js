import Character from './character';

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue();    
  }
}

export default Swordsman;
