const Coupons = (props) => {
    const {couponData} = props;
    const {header,offerTagColor,couponCode,description,offerTag} = couponData?.info;
    return (
        <div className="coupon-container py-4 px-4">
            <button className="discount-cpupons  bg-green-100 rounded-lg border border-black hover:bg-green-200" >
                <div className="restaurantOffer-header-wrapper">
                    <h4>{header}</h4>
                </div>
                <div className="offerCode-description">
                    <p>{couponCode} | {description}</p>
                </div>
            </button>
        </div>
    )
}

export default Coupons;