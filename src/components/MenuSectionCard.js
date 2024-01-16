import ItemCard from "./ItemCard";
const MenuSectionCard=(props)=>{
    const{resSec}=props;
    const {title, itemCards}=resSec?.card?.card;
    // console.log(itemCards);
    return(
        <div className="menu-sec">
            <h1>{title}</h1>
            
            {itemCards?.map((i)=>(<ItemCard key={i?.card?.info?.id} item={i}/>))}
            {/* <hr/> */}
        </div>
    );
}
export default MenuSectionCard;