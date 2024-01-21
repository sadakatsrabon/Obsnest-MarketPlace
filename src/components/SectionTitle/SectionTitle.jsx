
const SectionTitle = ({ heading, subHeadin }) => {
    return (
        <div className='text-center p-20'>
            <p>{subHeadin}</p>
            <h4 className='text-4xl uppercase font-semibold'>{heading}</h4>
            <div className='divider w-40 mx-auto'></div>
        </div>
    );
};

export default SectionTitle;
