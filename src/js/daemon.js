import Character from './character';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue();    
  }
}

export default Daemon;
