import chalk from 'chalk';

const esPar = (a) => (a%2===0)?console.log(chalk.green(a)):console.log(chalk.red(a));
const esImpar = (a) => {
  (a%2===0)?console.log(chalk.red(a)):console.log(chalk.green(a));
};

export {esPar, esImpar};