//  dont touch this file!!!!!!!!!!!!
//  if you want to write js, create a js file 
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header">
                    <img src="../images/logo/logo1.png" alt="EDSU Logo" width="50.91px">
                    <p>Edo State <br> Univeristy Uzairue</p>
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="./login.html">Login</a></li>
                        <li><a href="./signup.html">Sign Up</a></li>
                        <li><a href="./studentinfoform.html">Student info form</a></li>
                        <li><a href="./studentinfosheet.html">Student info sheet</a></li>
                        <li><a href="./savescoresheet.html">Save scoresheet</a></li>
                        <li><a href="./generatebroadsheet.html">Generate broadsheet form</a></li>
                        <li><a href="./printbroadsheet.html">print broadsheet</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}


customElements.define('app-navbar', Navbar)