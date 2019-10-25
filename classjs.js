//  抽象枪类
class AbstractGun {
    shoot() {
        throw "Abstract methods cannot be called";//无法调用
    }
}

//  步枪
class Rifle extends AbstractGun {
    shoot() {
        console.log("步枪射击...");
    }
}

//  狙击枪
class AUG extends Rifle {
    zoomOut() {
        console.log("通过放大镜观察");
    }

    shoot() {
        console.log("AUG射击...");
    }
}

//  士兵
class Soldier {
    constructor() {
        this.gun = null;
    }

    setGun(gun) {
        this.gun = gun;
    }

    killEnemy() {
        if (!this.gun) {
            throw "需要给我一把枪";
            return;
        }
        console.log("士兵开始射击...");
        this.gun.shoot();
    }
}

//  狙击手
class Snipper extends Soldier {
    killEnemy(aug) {
        if (!this.gun) {
            throw "需要给我一把枪";
            return;
        }
        this.gun.zoomOut();
        this.gun.shoot();
    }
}

let soldier = new Soldier();
soldier.setGun(new Rifle());
soldier.killEnemy();

let snipper = new Snipper();
//  分配狙击枪
snipper.setGun(new AUG());
snipper.killEnemy();

snipper.setGun(new Rifle());
// snipper.killEnemy();  //  this.gun.zoomOut is not a function