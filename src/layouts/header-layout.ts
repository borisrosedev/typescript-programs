import navLink from "../components/nav-link";

export default function(navLinks:Array<any>){
    return(

        `
            <header class="header">    
                <figure>
                    <img src="" alt="" />
                </figure>
                <nav>
                    <ul>
                       ${navLinks.map((el) => navLink(el.fontawesomeNameV6, el.path)).join('')}
                    </ul>
                </nav>
            </header>
        
        `
    )

}