import { MyContainer } from "../models/MyContainer";

type NavigationFunctionType = (path: string) => void;
type NFT = NavigationFunctionType;

export class HomeContainer extends MyContainer {
    name = "Home Container";
    onNavigate: NFT;

    constructor(onNavigate: NFT) {
        super();
        this.onNavigate = onNavigate;

    }




}