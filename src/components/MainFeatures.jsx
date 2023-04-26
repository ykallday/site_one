import pink from '../assets/pink.png'
import happy from '../assets/happy.png'
export default function MainFeatures(){
    return(
        <div>
            <h1 className="text-center py-10 font-semibold m-auto text-2xl bg-white">Unparalleled Design, Unprecedented  Comfort</h1>
            <div className="grid sm:grid-cols-3 grid-cols-1 p-6 sm:p-4 sm:py-20 bg-black">
                <div className="w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] m-auto mb-20">
                <div className="w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] bg-gray-200 rounded-md m-auto shadow-sm "><img src={pink}/></div>
                <caption className="font-light text-xs w-[60vw] sm:w-[25vw] text-center text-purple-100">Memory Foam Custom Fit</caption>
                </div>
                <div className="w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] m-auto">
                <div className="w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] bg-white bg-opacity-20 rounded-md m-auto shadow-sm"><img src={happy}/></div>
                <caption className="font-light text-xs w-[60vw] sm:w-[25vw] text-center text-purple-100">Memory Foam Custom Fit</caption>
                </div>
                <div className="w-[60vw] py-5 sm:w-[25vw] sm:h-[25vw] bg-white bg-opacity-20 rounded-md m-auto shadow-sm"></div>
                

            </div>
        </div>
    )
}