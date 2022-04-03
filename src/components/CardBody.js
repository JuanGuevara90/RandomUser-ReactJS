import PropTypes from 'prop-types';

import phone from '../images/phone.png';
import user from '../images/user.png';

const CardBody = ({firstName,lastName,country,cell,age}) => {
    return ( 
        <>
            <h2 className="text_card_black mt-2">{firstName} {lastName}</h2>
            <h1 className="text_card_blue">{country}</h1>
            <section className="flex flex-row place-content-center  align-baseline ">                
                <img src={phone} className="h-10 w-10" alt="phone" />
                <span><h1>{cell}</h1></span>
            </section>
            <section className="mt-4 mb-4 flex flex-row place-content-center  align-baseline">
                <img src={user} className="h-8 w-8" alt="phone" />
                <h1>Age: {age}</h1>
            </section>
        </>
    );
}

CardBody.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    country: PropTypes.string,
    cell: PropTypes.string,
    age: PropTypes.number,
}

export default CardBody;