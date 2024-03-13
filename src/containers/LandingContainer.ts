import { MyContainer } from "../models/MyContainer";

type NavigationFunctionType = (path: string) => void;
type NFT = NavigationFunctionType;

export class LandingContainer extends MyContainer {
    name = "Landing Container";
    onNavigate: NFT;

    constructor(onNavigate: NFT) {
        super();
        this.onNavigate = onNavigate;
        const homePageButton = document.getElementById("landing-to-home-button");
        homePageButton!.onclick = () => this.onClick();
    }

    onClick(){
        this.onNavigate('#home');
    }



}