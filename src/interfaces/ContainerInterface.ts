export interface ContainerInterface {
    name:string;
    checkData:(data:Array<any>) => void;
}