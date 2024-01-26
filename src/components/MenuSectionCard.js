import ItemCard from "./ItemCard";
const MenuSectionCard=(props)=>{
    const{resSec}=props;
    const {title, itemCards}=resSec?.card?.card;
    // console.log(itemCards);
    return(
        <div className="menu-sec">
            <h1 className="font-bold font-serif text-2xl m-3 text-center">{title}</h1>
            
            {itemCards?.map((i)=>(<ItemCard key={i?.card?.info?.id} item={i}/>))}
            {/* <hr/> */}
        </div>
    );
}
export default MenuSectionCard;