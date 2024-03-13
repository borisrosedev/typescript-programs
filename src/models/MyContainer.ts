import { ContainerInterface } from "../interfaces/ContainerInterface"

export class MyContainer implements ContainerInterface {
    name:string = "My Container";
    checkData(data:Array<any>){
        for(const el of data){
            console.log("my container says: ", el);
        }
    }
}