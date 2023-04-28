import photo from '../assets/hero_black.png'
export default function Shop () {
    return(
        <div className="grid md:grid-cols-2 grid-cols-1 h-[100vh] bg-black">
            <div className="w-[100vw]">
           <img className="sm:p-20 md:w-[50vw] w-[100vw]"src = {photo}/>
           </div>
           <div className="sm:p-20 sm:w-[50vw] w-[100vw]">
         
           </div>
        </div>
    )
}