const MovieTitleContainer = ({movieTitle, overview}) => {
    return(
        <div className="w-screen aspect-video absolute text-white pt-[20%] px-24  bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl">{movieTitle}</h1>
        <p className="w-1/4 mt-2 py-6">{overview}</p>
        <div className="flex ">
            <button className="bg-white p-4 px-12 text-black text-bold border-r-2 mr-2 flex hover:bg-opacity-20 rounded-lg">
                <img src="https://cdn-icons-png.flaticon.com/128/727/727245.png" className="w-4 mr-2 mt-1"/>
                   Play
            </button>
            <button className="bg-gray-500 p-4 px-12 text-white text-bold border-r-2 flex hover:bg-opacity-50 rounded-lg">
                <img src="https://tse4.mm.bing.net/th?id=OIP.m6moljlv3IS5cwSDi7zicgHaHa&pid=Api&P=0&h=220" className="w-4 mr-2 mt-1"/>
                   More Info
            </button>
        </div>
        </div>

    )
}

export default MovieTitleContainer