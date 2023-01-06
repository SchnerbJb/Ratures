import { Book } from "../shared/types";


export function validateBook(data: Book): number {

    let errorNumber = 0

    if (data.title === "") {
        errorNumber += 1
    }
    if (data.author === "") {
        errorNumber += 10
    }
    if (data.synopsis === "") {
        errorNumber += 1000
    }


    return errorNumber
}

