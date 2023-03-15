

import Link  from "next/link";

export default function NavBar (){
    return (
       
        <nav>
            <ul>
                <li><Link href= "/">Spotlight</Link>
                    </li>
                    <li><Link href="/art-pieces/">Art Pieces</Link>
                    </li>
            </ul>
        </nav>
        
    )

}