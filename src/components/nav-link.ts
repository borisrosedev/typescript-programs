export default function(fontawesomeNameV6:string, path:string){
    return(
        `
            <li>
                <a href="${path}">
                    <i class="fa-solid ${fontawesomeNameV6}"></i>
                </a>
            </li>
        
        `
    )
}