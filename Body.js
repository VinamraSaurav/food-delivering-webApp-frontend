import resdata from "./ResData";

const Card=(props)=>{
    const  {resData}=props
    const {name, image, rating, locality, cuisine, cft, cfo}=resData?.info
    const {deliveryTime}=resData?.order
    const {url}=resData?.info?.image
    const {aggregate_rating}=resData?.info?.rating
    return(
        <div className="card">
            <img alt="resturant-img" className="hotel-img" src={url}/>
            <h2 className="resturant-name">{name}</h2>
            <p className="res-locality">{locality.name}</p>
            <h3 className="resturant-cusines">{cuisine.map((x)=>(x.name)).join(", ")}</h3>
            <div className="cf">
                <span className="cft">{cft.text}</span>
                <span className="cfo">{cfo.text}</span>
            </div>
            <div className="restruant-description">
                <span>ETA : {deliveryTime}</span>
                <span className="rating">⭐ : {aggregate_rating}</span>
            </div>
        </div>
    
    )
};
    
function Body(){
    return(
    <div className='body'>
        <h1 className="title">Explore Our Resturants...</h1>
        <div className="card-hold">
            {resdata.map((resturant)=><Card resData={resturant}/>)}
        </div>
    </div>
);
}

export default Body;