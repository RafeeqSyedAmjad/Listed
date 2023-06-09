import React from 'react'
import apple from "../../../assets/apple1.svg"
function Login() {
    return (
        <div className="flex min-h-screen">
            <div className="bg-[#000000] w-1/3  flex items-center justify-center">
                <div className="text-[#FFFFFF] font-Mont md:text-7xl xxs:text-2xl font-bold">Board.</div>
            </div> {/* Left Side */}
            <div className="flex-1 flex items-center justify-center flex-col"> {/* Right Side */}
                <div className="">
                    <div className="font-Mont font-bold md:text-4xl xxs:text-xl">Sign In</div>
                    <div className=" mt-1 text-[#000000] font-lato font-normal text-base">Sign in to your account</div>
                    <div className='flex xxs:flex-col items-center justify-center md:space-x-10 xxs:space-y-3 md:flex-row mt-5'>
                        <button className="px-4 py-2  flex items-center justify-center gap-3  rounded-[10px]  bg-[#FFFFFF] hover:shadow transition duration-150">
                            <img className="w-[14px] h-[14px]" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                            <span className='text-[#858585] text-sm font-Mont font-normal'>Sign in with Google</span>
                        </button>
                        <button className="px-[18px] py-2 flex items-center justify-center gap-3 rounded-[10px] bg-[#FFFFFF] hover:shadow transition duration-150">
                            <img className="w-[14px] h-[14px]" src={apple} loading="lazy" alt="apple logo" />
                            <span className='text-[#858585] text-sm font-Mont font-normal'>Sign in with Apple</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] md:w-[410px] xxs:w-[220px] h-[317px] mt-7 rounded-[20px] flex flex-col">
                    <form className='flex flex-col px-7 py-7'>
                        <h3 className='font-lato text-base font-normal'>Email address</h3>
                        <input type="email" className=" mt-2 bg-[#F5F5F5] px-4 py-2 focus:outline-none rounded-[10px] md:text-base xxs:text-xs font-normal font-lato placeholder:font-lato  placeholder:xxs:text-xs placeholder:md:text-base " placeholder="Enter your email address" />
                        <h3 className="mt-4 font-lato text-base font-normal">Password</h3>
                        <input type="password" className='mt-2 bg-[#F5F5F5] px-4 py-2 focus:outline-none rounded-[10px] md:text-base xxs:text-xs font-normal font-lato placeholder:font-lato placeholder:xxs:text-xs placeholder:md:text-base' placeholder="Enter your password" />
                        
                        <h3 className= "mt-4 font-lato text-base font-normal text-[#346BD5]">Forgot password?</h3>
                        <button disabled className= "mt-5 py-2 bg-[#000000] rounded-[10px] text-[#FFFFFF] font-Mont font-bold text-base"type="submit">Sign In</button>
                    </form>
                </div>

                <h3 className="mt-4 font-lato font-normal md:text-base xxs:text-sm text-[#858585]">Don't have an account?<span className="text-[#346BD4]"> Register here</span></h3>

            </div>


        </div>
    )
}

export default Login