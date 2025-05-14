
export default function Images({images}){
    return(
        <>
        <div className="flex gap-9 mb-8 justify-center">
            <div>
                <img src={images[0]} alt="lerato,chairman, founder" loading="lazy"/>
            </div>
            <div>
                <img src={images[1]} alt="kamohelo, co-founder" loading="lazy"/>
            </div>
        </div>
        <div className="flex gap-9 mb-8 justify-center ">
            <div>
                <img src={images[2]} alt="kutlwano" loading="lazy"/>
            </div>
            <div>
                <img src={images[3]} alt="aphellele" loading="lazy"/>
            </div>
            <div>
                <img src={images[4]} alt="tumelo" loading="lazy"/>
            </div>
        </div>
        </>
    )
}
