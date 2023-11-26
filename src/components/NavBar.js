// import "./Navbar.css";
import { useNavigate } from "react-router-dom";


function ColorSchemesExample(props) {
    const navigate = useNavigate();
    const toggleSideBar = () => props.handleSideBar();
    return (
        <div className='flex justify-between items-center bg-black h-[56px] p-[16px]'>
            <div className="flex items-center gap-[20px]">
                <button onClick={toggleSideBar} className="h-[40px] w-[px] p-0 m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
                <div className="flex items-center">
                    <img width={28} height={20} className="mr-[6px]" src="./youtube-svgrepo-com.svg" alt="logo" />
                    <h5 className="text-white flex justify-between items-cente mb-0">YouTube</h5>
                </div>
            </div>
            <div className="flex items-center bg-slate-900 rounded-full pl-6">
                <div className="text-white pr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                <input className="min-w-[400px] max-w-[600px] h-[40px] p-2 bg-slate-900 text-white mr-0" type="text" placeholder="Search" />
                <button className="text-white pl-6 pr-6 h-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            </div>
            <div>
                <button 
                onClick={() => {
                    navigate('/Login')
                }} className="w-[40px] h-[40px] bg-slate-400 rounded-full"></button>
            </div>
        </div>
    );
}

export default ColorSchemesExample;