import PropTypes from 'prop-types';
const CardHeader = ({image}) => {
    return ( 
        <div className="mx-auto shadow-lg border border-b-indigo-500 shadow-slate-400 rounded-full overflow-hidden h-40 w-40 mt-10">
            <img className="h-full w-full"  src={image} alt="" />
        </div>
    );
}

CardHeader.propTypes = {
    image: PropTypes.string
}
export default CardHeader;