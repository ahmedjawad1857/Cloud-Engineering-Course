#! /usr/bin/env node
import inquirer from "inquirer";

interface currenciesType {
  [key: string]: {
    [key: string]: number;
  };
  PKR: {
    EURO: number;
    USD: number;
    INR: number;
    SAR: number;
  };
  EURO: {
    PKR: number;
    USD: number;
    INR: number;
    SAR: number;
  };
  USD: {
    EURO: number;
    PKR: number;
    INR: number;
    SAR: number;
  };
  INR: {
    EURO: number;
    USD: number;
    PKR: number;
    SAR: number;
  };
  SAR: {
    EURO: number;
    USD: number;
    INR: number;
    PKR: number;
  };
}

const currencies: currenciesType = {
  PKR: {
    EURO: 285,
    USD: 260,
    INR: 3.95,
    SAR: 35.83,
  },
  EURO: {
    PKR: 1 / 285,
    USD: 1.08,
    INR: 95,
    SAR: 4.04,
  },
  USD: {
    EURO: 1 / 1.08,
    PKR: 1 / 260,
    INR: 0.015,
    SAR: 0.018,
  },
  INR: {
    EURO: 1 / 95,
    USD: 1 / 0.015,
    PKR: 1 / 3.95,
    SAR: 0.045,
  },
  SAR: {
    EURO: 1 / 4.04,
    USD: 1 / 0.018,
    INR: 1 / 0.045,
    PKR: 1 / 35.83,
  },
};

const currencyConverter = (from: string, to: string, amount: number) => {
  // Check if the conversion rates for the provided currencies exist
  if (!(currencies[from] == currencies[to])) {
    if (currencies[from] && currencies[from][to]) {
      // Access the conversion rate using bracket notation
      console.log(`
      1 ${from} is equal to ${currencies[to][from].toFixed(2)} ${to}
      \nConversion Result:
  ${amount.toFixed(2)} ${from} is equal to ${(
        amount * currencies[to][from]
      ).toFixed(2)} ${to}`);
    } else {
      // If the conversion rates are not found, return an error value or handle the error accordingly
      console.error("Conversion rates not found for the provided currencies.");
    }
  } else {
    console.log(`
    \nConversion Result:
    ${amount.toFixed(2)} ${from} is equal to ${amount.toFixed(
      2
    )} ${from} becuase the currencies are same
    
    `);
  }
};

const questions = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "Select the currency you want to convert from:",
    choices: ["PKR", "EURO", "USD", "INR", "SAR"],
  },
  {
    type: "list",
    name: "to",
    message: "Select the currency you want to convert to:",
    choices: ["PKR", "EURO", "USD", "INR", "SAR"],
  },
  {
    type: "number",
    name: "amount",
    message: "Enter the amount you want to convert:",
  },
]);

const from: string = questions.from;

const to: string = questions.to;

const amount: number = questions.amount;
currencyConverter(from, to, amount);
