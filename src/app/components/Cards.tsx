export default function Cards (){
    return(
        <div className="w-full h-lvh pt-20">
            <div className="flex justify-center gap-10">
                <div className="bg-cyan-600 w-60 h-60" ></div>
                <div className="bg-violet-700 w-60 h-60" ></div>
                <div className="bg-green-600 w-60 h-60" ></div>
            </div>

            <div className="flex justify-center gap-10 pt-10">
                <div className="bg-gradient-to-t from-red-600 w-52 h-52"></div>
                <div className="bg-gradient-to-t from-pink-500 w-52 h-52"></div>
            </div>
        </div>
    )
}