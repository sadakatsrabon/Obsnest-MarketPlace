import s_phone from '../../../assets/phone.jpg'
import fashion from '../../../assets/fashion.jpg'

const CategoryCart = ({ items }) => {

    console.log(items)

    const phone = items.filter(item => item.category === 'phone')
    const electronic = items.filter(item => item.category === 'electronic')
    const fashion_beauti = items.filter(item => item.category === 'fashion_beauti')
    const home_applience = items.filter(item => item.category === 'home_applience')
    const kitchen = items.filter(item => item.category === 'kitchen')

    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className="carousel-item h-72 card bg-base-100 shadow-xl image-full">
                <figure><img src={s_phone} alt="Phone" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{'title'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* Cart 2   */}
            <div className="carousel-item h-72 card bg-base-100 shadow-xl image-full">
                <figure> <img src={fashion} alt="Fashion" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">{'title'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryCart;