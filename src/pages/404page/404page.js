import React from "react"
import "./404page.css"

export default function NotFoundPage(){

    return(
        <div id="notfound">
		    <div className="notfound">
		    	<div className="notfound-404">
		    		<h1>4<span></span>4</h1>
		    	</div>
		    	<h2>Ups! Stran ne obstaja</h2>
		    	<p>Ta spletna stran ne obstaja.</p>
		    	<a href="/">Nazaj na domačo stran</a>
		    </div>
	    </div>
    )
}