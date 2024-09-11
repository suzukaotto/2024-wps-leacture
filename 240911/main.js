class Ticket {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        this.disc_for_army = 100;
        this.disc_for_minor = 50;
        this.disc_for_silver = 100;
        this.disc_for_college = 50;
    }
}

class User {
    constructor(name, age, gender, isArmy=false, isCollege=false) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isArmy = isArmy;
        this.isCollege = isCollege;

        // 군인 나이 검증
        if (this.isArmy) {
            if (age > 18 && age <= 23) {
                console.log(`${name}님, 군인으로 등록되었습니다.`);
            }
            else {
                console.log(`${name}님, 군인으로 등록 불가능합니다.`);
                this.isArmy = false;
            }
        }
            
        // 대학생 나이 검증
        if (this.isCollege) {
            if (age > 19 && age <= 26) {
                console.log(`${name}님, 대학생으로 등록되었습니다.`);
            }
            else {
                console.log(`${name}님, 대학생으로 등록 불가능합니다.`);
                this.isCollege = false;
            }
        }
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, isArmy: ${this.isArmy}, isCollege: ${this.isCollege}`);
    }

    buy_ticket(Ticket) {
        console.log('----------- 티켓 구매 -------------');

        let ticketPrice = Ticket.price;

        console.log(`${Ticket.name} | 가격: ${Ticket.price}원`);
        if (this.age < 19) {
            console.log(`${this.name}님, 미성년자 할인(${Ticket.disc_for_minor}%)이 적용되었습니다.`);
            ticketPrice *= (1 - Ticket.disc_for_minor / 100);
        }
        else if (this.isCollege) {
            console.log(`${this.name}님, 대학생 할인(${Ticket.disc_for_college}%)이 적용되었습니다.`);
            ticketPrice *= (1 - Ticket.disc_for_college / 100);
        }
        else if (this.isArmy) {
            console.log(`${this.name}님, 군인 할인(${Ticket.disc_for_army}%)이 적용되었습니다.`);
            ticketPrice *= (1 - Ticket.disc_for_army / 100);
        }
        else if (this.age > 64) {
            console.log(`${this.name}님, 경로우대(${Ticket.disc_for_silver}%)가 적용되었습니다.`);
            ticketPrice *= (1 - Ticket.disc_for_silver / 100);
        }
        else {
            console.log(`${this.name}님, 정상가 구매 가능합니다.`);
            ticketPrice = Ticket.price;
        }

        console.log(`최종가: ${ticketPrice}원`);
        console.log('-----------------------------------');
    }
}

const EverlandTicket = new Ticket('에버랜드 종일권', 55000);

const user1 = new User("최가온", 18, "남1자", false, false);

user1.buy_ticket(EverlandTicket);