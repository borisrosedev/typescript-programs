import { APP } from "./constants/dom";
import { HomeContainer } from "./containers/HomeContainer";
import { LandingContainer } from "./containers/LandingContainer"
import { consoleGenerator } from "./utils/generators";
import homeView from "./views/home-view";
import landingView from "./views/landing-view"

declare global {
    interface Window {
        onNavigate: (path: string) => void
    }
}

function routeTable(path: string | any) {
    const consoleMessages = consoleGenerator([path])
    console.log(consoleMessages.next().value);
    APP!.innerHTML = "";
    //table de routage
    if (path.endsWith("/") || path == "/") {
        APP!.innerHTML += landingView();
        new LandingContainer(window.onNavigate);
    }
    if (path == "#home" || path.hash == "#home") {
        APP!.innerHTML += homeView();
        new HomeContainer(window.onNavigate);
    }

}

window.onNavigate = (path: string) => {
    window.history.pushState(path, "", path);
    routeTable(path);
}

window.onpopstate = () => {
    const pathname = window.location.pathname
    routeTable(pathname);
}

export default function () {
    const pathname = window.location.pathname
    routeTable(pathname);
}