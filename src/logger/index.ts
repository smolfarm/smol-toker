import chalk from 'chalk'
import moment from 'moment'

/**
 * Class to handle logging output during the factory's use.
 */
export default class Logger {
    static header(text: string) {
        this.log(chalk.bold.cyan(`===== ${text} =====`))
    }

    static log(text: string) {
        console.log(`[${moment().format("hh:mm:ss")}] ${text}`)
    }

    static debug(text: string) {
        console.log(chalk.bold.yellow(text))
    }
}