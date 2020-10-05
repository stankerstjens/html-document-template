import "./style.css";
import html from "./README.md";

const content = document.createElement( "div" );
content.innerHTML = html;
content.classList.add( "content" );

document.body.insertBefore( content, document.body.firstChild );
