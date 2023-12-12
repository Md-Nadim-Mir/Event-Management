
import './slider.css'

const Slider = () => {
    return (
        <div>
            <div className="hero h-[70vh] bgl" >
                
                <div className="hero-overlay bg-opacity-60"></div>
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl  lg:text-5xl font-bold text-[#36e8f8]">Corporate Event Management</h1>
                        
                        <p className="mb-5  font-bold">We will be offer all of the corporate event management.Provide hundred parcent anthustic service.</p>

                        <button className="btn bg-[green] font-bold text-white hover:bg-[green]">Get Hired</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;