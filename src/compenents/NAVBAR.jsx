import{
    FaApple
} from"react-icons/fa";
function Navbar() {
    return (
        <>
        <nav className="bg-black text-white p-4">
        <div className="container flex items-center  mx-auto justify-between">
        <h1 className='text-2xl font-bold mx-7 flex items-center gap-2' ><FaApple /> Apple</h1>
        <ul className="flex space-x-4 mx-8">
            <li>
                <a href="#" className="hover:text-blue-400">Home</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Tv & Home</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Airpods</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Watch</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Iphone</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">iPad</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Mac</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Store</a>
            </li>
            <li>
                <a href="#" className="hover:text-blue-400">Entertainment</a>
            </li>
        </ul>
        </div>
        </nav>
    
        </>
    )

}
export default Navbar;