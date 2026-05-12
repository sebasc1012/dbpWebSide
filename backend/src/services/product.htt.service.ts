import axios from "axios"

export class BaseHttpService<T> {
    constructor( private url:string){

    }
    async getAll(){
        const {data} = await axios.get<T[]>(this.url)
        return data
    }
}
