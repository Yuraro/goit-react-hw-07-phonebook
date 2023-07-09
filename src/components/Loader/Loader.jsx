import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
return (
    <LoaderWrap>
    <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#76b5c5'
    />
    </LoaderWrap>
);
};

export default Loader;