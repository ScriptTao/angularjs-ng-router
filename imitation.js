//gun
class Gun {
    shoot() {
        throw '一个枪类'
    }
}

//步枪
class Rifle extends Gun {
    shoot() {
        console.log('步枪射击。。。')
    }
    haha(){
        console.log('haha');
    }
}

//狙击枪
class SniperRifle extends Rifle {
    zoomOut() {
        console.log('通过放大镜观察。。。')
    }

    shoot() {
        console.log('狙击枪射击。。。')
    }
}

class Soldier {
    constructor() {
        this.gun = null//如果不给枪 默认为null
    };

    setGun(gun) {
        this.gun = gun;
    }

    kill() {
        if(this.gun == null){
            throw 'help me'
            return
        }
        console.log('士兵开始射击。。。')
        this.gun.shoot();
    }
}

let sniperRifle = new SniperRifle();
// sniperRifle.zoomOut();
// sniperRifle.shoot();
sniperRifle.haha();


/*let soldier = new Soldier();
let rifle = new Rifle();

// soldier.setGun(rifle);
soldier.kill();*/

