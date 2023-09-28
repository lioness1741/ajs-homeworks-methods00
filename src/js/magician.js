import Character from './character';

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue();    
  }
}

export default Magician;
