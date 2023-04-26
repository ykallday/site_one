import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div>
            <h1 className="text-white  p-2 float-left">AudioTech</h1>
        <div className="flex justify-end pt-3 w-100 bg-black">
            
            <Link className="text-violet-400 font-reg uppercase font-light text-sm mx-4 p-2">Home</Link>       
            <Link className="text-violet-400 font-reg uppercase font-light text-sm mx-4 p-2">Features</Link> 
            <Link className="text-violet-400 font-reg uppercase font-light text-sm mx-4 p-2">Contact</Link> 
        </div>
        </div>
    )
    
}