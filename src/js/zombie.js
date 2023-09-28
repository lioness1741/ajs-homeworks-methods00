import Character from './character';

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue();    
  }
}

export default Zombie;
