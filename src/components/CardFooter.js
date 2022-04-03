import PropTypes from 'prop-types';

const CardFooter = ({onClickButtonNextUser}) => {
    return ( 
        <>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-violet-600" onClick={onClickButtonNextUser} >Next User</button>
        </>
    );
}

CardFooter.propTypes = {
    onClickButtonNextUser: PropTypes.func
}

export default CardFooter;