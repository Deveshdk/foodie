const Coupons = (props) => {
    const {couponData} = props;
    const {header,offerTagColor,couponCode,description,offerTag} = couponData?.info;
    return (
        <div className="coupon-container">
            <button className="discount-cpupons" >
                <div className="restaurantOffer-header-wrapper">
                    <h4>⁒ {header}</h4>
                </div>
                <div className="offerCode-description">
                    <p>{couponCode} | {description}</p>
                </div>
            </button>
        </div>
    )
}

export default Coupons;