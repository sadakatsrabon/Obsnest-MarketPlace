
const Category = (params) => {
    const smart = params.smart
    const kitchen = params.kitchen
    const plastic = params.plastic
    const electronic = params.electronic
    const fashion_beauty = params.fashion_beauty
    // console.log(smart)
    return (
        <div>
            <div className="text-center">
                <div>
                    <h2 className="text-4xl font-semibold">{smart[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{kitchen[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{plastic[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{electronic[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{fashion_beauty[0]?.category}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;