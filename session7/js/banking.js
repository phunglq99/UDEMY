'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector(
  '.summary__value--interest'
);
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector(
  '.login__input--user'
);
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector(
  '.form__input--amount'
);
const inputLoanAmount = document.querySelector(
  '.form__input--loan-amount'
);
const inputCloseUsername = document.querySelector(
  '.form__input--user'
);
const inputClosePin = document.querySelector('.form__input--pin');

// ----------------------------------------------------------

const displayMovemeny = function (movements) {
  containerMovements.innerHTML = '';
  let html = movements.map((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    return `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i} deposit</div>
        <div class="movements__value">${mov}€</div>
      </div>
      `;
  });
  containerMovements.insertAdjacentHTML('afterbegin', html);
};
// CreateUsername-----------------------
const createUserName = function (acount) {
  console.log(acount);
  acount.forEach(
    accs =>
      (accs.userName = accs.owner
        .toLowerCase()
        .split(' ')
        .map(us => us[0])
        .join(''))
  );
};
createUserName(accounts);

// Balace--------------------
const createBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (bla, curbla) => (bla += curbla)
  );
  labelBalance.textContent = `${acc.balance} €`;
};

// Sum----------------------
const createSummary = function (acc) {
  const summaryIn = acc.movements
    .filter((result, i) => result > 0)
    .reduce((result, cur) => result + cur, 0);
  labelSumIn.textContent = `${summaryIn}€`;

  const summaryOut = acc.movements
    .filter((result, i) => result < 0)
    .reduce((result, cur) => result + cur, 0);
  labelSumOut.textContent = `${Math.abs(summaryOut)}€`;

  const sumInterest = acc.movements
    .filter((result, i) => result > 0)
    .map((result, i) => (result * 1.2) / 100)
    .filter(result => result > 1)
    .reduce((result, cur) => result + cur, 0);

  labelSumInterest.textContent = `${sumInterest}€`;
};
// ------------------------------------------
let currentAcount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 10;
    labelWelcome.textContent = `Welcome Back, ${
      currentAcount.owner.split(' ')[0]
    }`;
    inputLoginUsername.value = inputLoginPin.value = '';
  }

  updateUI(currentAcount);
});

const updateUI = function (acc) {
  displayMovemeny(acc.movements);

  createBalance(acc);

  createSummary(acc);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieve = accounts.find(
    account => account.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    recieve &&
    amount > 0 &&
    currentAcount.balance >= amount &&
    recieve.userName !== currentAcount.userName
  ) {
    currentAcount.movements.push(-amount);
    recieve.movements.push(amount);
    updateUI(currentAcount);
  }
});
