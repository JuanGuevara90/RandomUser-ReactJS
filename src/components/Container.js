import PropTypes from 'prop-types';
const Container = (props) => {
    return (  
        <div className="bg-slate-500 w-full h-full  fixed top-0 left-0  overflow-auto">
            <div className="flex flex-wrap flex-col place-content-center sm:flex-row">
                {props.children}
            </div>
        </div>
    );
}

Container.propTypes = {
    props: PropTypes.object
}

export default Container;