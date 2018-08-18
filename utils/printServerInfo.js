const chalk = require('chalk');

module.exports = ({ env, port }) => {
  if (process.stdout.isTTY) {
    process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H \n');
  }

  process.stdout.write(chalk.green(`Starting the ${env} server... \n`));
  process.stdout.write(chalk.cyan(`  Server listening at port ${port} \n`));
};
