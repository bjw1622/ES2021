const $ = selector => document.querySelector(selector);

class Game {
  constructor(name) {
    this.monster = null;
    this.hero = null;
    this.mosterList = [
      { name: '슬라임', hp: 25, att: 10, xp: 10 },
      { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
      { name: '마왕', hp: 150, att: 35, xp: 50 },
    ];
  }
}

class Hero {
  constructor(game, name) {
    this.game = game;
    this.name = name;
    this.lev = 1;
    this.maxHp = 100;
    this.hp = 100;
    this.xp = 0;
    this.att = 10;
  }
  attack(target) {
    target.hp -= this.att;
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}

class Monster {
  constructor(game, name, hp, att, xp) {
    this.game = game;
    this.name = name;
    this.maxHp = maxHp;
    this.hp = hp;
    this.xp = xp;
    this.att = att;
  }
  attack(target) {
    target.hp -= this.att;
  }
}

let game = null;
$('#start-screnn').addEventListener('submit', event => {
  event.preventDefault();
  const name = event.target['name-input'].value;
  // 컨스트럭터 실행
  game = new Game(name);
});
