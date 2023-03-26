export default function NavBar() {
    return <nav className="nav">
        <ul>
            <li>
                <a href="/" className="home">Home</a>
            </li>
            <li>
                <a href="/inventory" className="inventory">Inventory</a>
            </li>
            <li>
                <a href="/api" className="inventory">Popular Books</a>
            </li>
        </ul>
    </nav>
}