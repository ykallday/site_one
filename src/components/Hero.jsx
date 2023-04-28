import blackHero from '../assets/hero_black.png'
export default function Hero(){
    return(
       
        <div className="pt-10 pb-2 px-10 bg-black sm:flex justify-center hover:bg-gradient-to-r from-purple-500 via-violet-900 to-yellow-500">
            <h1 className="text-white sm:text-4xl text-3xl m-auto pt-2 sm:mr-40 px-2 text-center sm:text-left sm:w-[30vw] sm:py-4 md:py-20">The only headphones you'll ever need.<br></br><button className="py-2 text-xs font-bold bg-slate-400 rounded-xl hover:bg-orange-400 p-3">SHOP</button></h1>
            <img className="sm:w-[30vw] sm:h-[30vw] w-[75vw] h-[75vw] m-auto"src={blackHero}/>
        </div>   
       

    )
}