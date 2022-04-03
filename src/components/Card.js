import { useQuery } from 'react-query'
import {fetchApiRandomUser} from '../services/Data';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';


const Card = () => {
    
    const { isLoading, error, data,refetch } = useQuery('getData',fetchApiRandomUser);

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    
    const handleButtonChangeUser = () => refetch();
    
    return ( 
        <div className="sm:w-1/4  md:w-2/4 lg:w-2/6 p-2 mt-10  shadow-lg shadow-black items-center">
            <div className="bg-white  z-50  px-6 py-8 rounded-lg text-center">
            {data.results.map(user => {
                return (
                    <div className="p-2 " key={`user_${user.email}`}>
                        <CardHeader image={user.picture.large} />
                        <CardBody firstName={user.name.first} lastName={user.name.last} country={user.location.country} cell={user.cell} age={user.dob.age} />
                        <CardFooter onClickButtonNextUser={handleButtonChangeUser}/>
                    </div> 
                )
            })}
            </div>
        </div>
    );
}

export default Card;