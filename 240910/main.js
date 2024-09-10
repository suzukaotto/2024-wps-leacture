const oneday_region = ['처인구']

class User {
    constructor(name, region, money, wow) {
        this.name = name;
        this.region = region;
        this.money = money;
        this.wow = wow;
        this.buy_product = [];
    }

    serch(Product) {
        if (this.wow)
            console.log(`${this.name}님은 와우회원이세요. ${Product.name}을 ${Product.cal_price(this)}원에 구매하실 수 있어요.`)
        else
            console.log(`${this.name}님, ${Product.name}을 ${Product.cal_price(this)}원에 구매하실 수 있어요.`)

        console.log(`${Product.name} | 남은 수량: ${Product.count}`)

        if (oneday_region.includes(this.region))
            console.log(`'${Product.name}' 오늘 7시 전 도착 보장`)
        else
            console.log(`'${Product.name}' 익일배송 예정입니다.`)
    }

    buy(Product) {
        if (Product.count === 0) {
            console.log('재고가 없습니다.')
            return
        }

        Product.buy(this);

        console.log(`${this.name}님, ${Product.name}을 구매하셨습니다. 남은 잔액은 ${this.money}원입니다.`)
    }

    buy_list() {
        if (this.buy_product.length == 0) {
            console.log(`${this.name}님, 주문하신 물건이 없습니다.`)
        }
        else {
            console.log(`${this.name}님, 주문 목록입니다.`)
            for (let i = 0; i < this.buy_product.length; i++)
                console.log(`${this.buy_product[i].name} | ${this.buy_product[i].cal_price(this)}원`)
        }
    }
}
class Product {
    constructor(name, price, count, normal_discount, wow_discount) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.normal_discount = normal_discount;
        this.wow_discount = wow_discount;
    }

    cal_price(User) {
        if (User.wow) {
            return this.price * (1 - this.wow_discount);
        }
        else {
            return this.price * (1 - this.normal_discount);
        }
    }

    buy(User) {
        if (User.money < this.cal_price(User)) {
            console.log('잔액이 부족합니다.')
            return
        }
        User.money -= this.cal_price(User)

        this.count--;
        User.buy_product.push(this);
    }
}

const Product1 = new Product('Comete 코메트 테프론 슬릭 기어 속선', 7930, 3, 0.1, 0.13)
const Product2 = new Product('세라밴드 튜빙밴드', 11000, 10, 0.1, 0.13)
const Product3 = new Product('해피홈 알콜 스왑, 100매입, 1개',  4900, 6, 0.15, 0.22)

const user_1 = new User('길동', '수지구', 300000, false);
const user_2 = new User('예진', '처인구', 15000, true);

user_1.serch(Product1);
user_1.buy(Product1);
user_1.buy(Product1);
user_1.buy(Product1);
user_1.buy(Product1);
user_1.buy_list();

user_2.serch(Product1);
user_2.buy(Product1);
user_2.buy_list()
