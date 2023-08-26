import React from "react";
const Page65Card = () =>{
    return(

        <div className=" flex flex-column justify-items-center items-center w-80 h-80 rounded-2xl border-orange-200 border-2  ">
            <div className="self-start bg-orange-400 rounded-r-2xl  relative top-5 w-32 h-8 pt-2 pl-7 pb-2 pr-7">
                <h3 className="text-white text-sm font-semibold font-poppins non-italic">Full-Time</h3>
            </div>

            <img className="w-20 h-20" src={'./desktop65/Ellipse 249.png'}/>
            <h2 className="empname text-green-800 font-poppins text-xl font-semibold non-italic">Smit Thakkar</h2>
            <h3 className="text-base font-poppins font-semibold text-green-800 non-talic">2017-2022</h3>
            <img className="w-20 h-12" src={'./desktop65/Accenture-logo1.png'}/>
            <h3 className="text-sm font-medium text-black font-poppins non-italic">Company Name : <span className="text-base font-poppins font-semibold text-green-800 non-talic">Accenture</span> </h3>
            <div className="cardfoot">
             <div className="text-sm font-medium text-black font-poppins non-italic w-11">Role :</div> <div className="flex flex-column text-sm font-poppins font-bold text-green-800 non-talic">Associate Developement Manager</div>
            </div>

        </div>



    );
}

export default Page65Card;

