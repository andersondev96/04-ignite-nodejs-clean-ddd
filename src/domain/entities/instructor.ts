import { randomUUID } from "node:crypto"

export class Instructor {
    public name: string
    public id: string

    constructor(name: string, id?: string) {
        this.name = name
        this.id = id ?? randomUUID()
    }
}