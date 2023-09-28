import Character from './character';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue(); 
  }
}

export default Undead;
