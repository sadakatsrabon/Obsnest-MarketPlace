
const Category = (params) => {
    const smart = params.smart
    const kitchen = params.kitchen
    const plastic = params.plastic
    const electronic = params.electronic
    const fashion_beauty = params.fashion_beauty
    console.log(smart[0])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-semibold">{smart[0].name}</h2>

                <h2 className="text-4xl font-semibold">{kitchen.category}</h2>
                <h2 className="text-4xl font-semibold">Component for Plastic Category</h2>
                <h2 className="text-4xl font-semibold">Component for Electronics Category</h2>
                <h2 className="text-4xl font-semibold">Component for Fashion and beauti Category</h2>
            </div>
        </div>
    );
};

export default Category;