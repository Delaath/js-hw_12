// Завдання 1
let user = {
    name: "Alex",
    age: 25,
    hobby: "reading",
    premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// Завдання 2
function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user));

// Завдання 3
function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";

    for (let [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
}

let employees = {
    John: 10,
    Sarah: 15,
    Tom: 8
};

console.log(findBestEmployee(employees));

// Завдання 4
function countTotalSalary(employees) {
    return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

let salaries = {
    John: 1000,
    Sarah: 1200,
    Tom: 900
};

console.log(countTotalSalary(salaries));

// Завдання 5
function getAllPropValues(arr, prop) {
    return arr.map(obj => obj[prop]).filter(value => value !== undefined);
}

let products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Orange", price: 25, quantity: 2 }
];

console.log(getAllPropValues(products, "name"));

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
    let product = allProducts.find(p => p.name === productName);
    return product ? product.price * product.quantity : 0;
}

console.log(calculateTotalPrice(products, "Apple"));

// Завдання 7 (додаткове)
let account = {
    balance: 1000,
    transactions: [],

    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: "deposit", amount });
        console.log(`Поповнення на ${amount} грн. Баланс: ${this.balance} грн`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів!");
        } else {
            this.balance -= amount;
            this.transactions.push({ type: "withdraw", amount });
            console.log(`Зняття ${amount} грн. Баланс: ${this.balance} грн`);
        }
    },

    getBalance() {
        console.log(`Поточний баланс: ${this.balance} грн`);
    },

    getTransactionHistory() {
        console.log("Історія транзакцій:", this.transactions);
    }
};

account.deposit(500);
account.withdraw(200);
account.getBalance();
account.getTransactionHistory();
