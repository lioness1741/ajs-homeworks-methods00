import Character from './character';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue();    
  }
}

export default Bowman;
