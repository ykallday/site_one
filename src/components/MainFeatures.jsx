import memory from '../assets/memory.png'
import happy from '../assets/happy.png'
import multi from '../assets/multi.png'
export default function MainFeatures(){
    return(
        <div>
            <h1 className="text-center py-10 font-semibold m-auto text-2xl bg-white">Unparalleled Design, Unprecedented  Comfort</h1>
            <div className="grid sm:grid-cols-3 grid-cols-1 p-6 sm:p-4 sm:py-20 bg-black">
            <div className="mb-20 w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] m-auto">
                <div className="hover:scale-110 w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] bg-white bg-opacity-20 rounded-md m-auto shadow-sm"><img className="rounded-md" src={multi}/></div>
                <caption className="pt-5 font-light text-xs w-[60vw] sm:w-[25vw] text-center text-purple-100">Available in 4 Colors</caption>
                </div>
                <div className="mb-20 w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] m-auto">
                <div className="hover:scale-110 w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] bg-white bg-opacity-20 rounded-md m-auto shadow-sm"><img className="rounded-md" src={happy}/></div>
                <caption className="pt-5 font-light text-xs w-[60vw] sm:w-[25vw] text-center text-purple-100">Noise Canceling</caption>
                </div>
                <div className="w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] m-auto mb-20">
                <div className="hover:scale-110 w-[60vw] h-[60vw] sm:w-[25vw] sm:h-[25vw] bg-gray-200 rounded-md m-auto shadow-sm "><img className="rounded-md" src={memory}/></div>
                <caption className="pt-5 font-light text-xs w-[60vw] sm:w-[25vw] text-center text-purple-100">Memory Foam Custom Fit</caption>
                </div>
       
                
                

            </div>
        </div>
    )
}