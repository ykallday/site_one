import blackHero from '../assets/hero_black.png'
export default function Hero(){
    return(
       
        <div className="pt-10 pb-2 bg-black flex justify-center hover:bg-gradient-to-r from-purple-500 via-violet-900 to-yellow-500">
            <h1 className="text-white sm:text-4xl text-lg pt-2 mr-40 px-2 text-left w-[30vw] sm:py-4 md:py-20">The only headphones you'll ever need.</h1>
            <img className="w-[30vw] h-[30vw]"src={blackHero}/>
        </div>   
       

    )
}