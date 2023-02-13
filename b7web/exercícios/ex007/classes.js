class Character {
    _hp = 1;
    maxHp = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get hp() {
        return this._hp;
    }

    set hp(newHp) {
        this._hp = newHp < 0 ? 0 : newHp;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.hp = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxHp = this.hp
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.hp = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxHp = this.hp
    }
}

class LitleMonster extends Character {
    constructor() {
        super('Kobold');
        this.hp = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxHp = this.hp
    }
}

class BigMonster extends Character {
    constructor() {
        super('Leech');
        this.hp = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxHp = this.hp
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.log = logObject
    }

    start() {
        this.update()

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.hp.toFixed(0)} HP`
        let f1Pct = (this.fighter1.hp / this.fighter1.maxHp) * 100
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.hp.toFixed(0)} HP`
        let f2Pct = (this.fighter2.hp / this.fighter2.maxHp) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked) {
        if(attacking.hp <= 0 || attacked.hp <= 0) {
            this.log.addMessage("Luta finalizada")
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense) {
            attacked.hp -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano à ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} defendeu o ataque!`)
        }

        this.update()
    }
}

class Log {
    list = []

    constructor(listEl) {
        this.listEl = listEl
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    render() {
        this.listEl.innerHTML = ''
        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}