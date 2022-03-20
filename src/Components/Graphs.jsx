import {useParams} from 'react-router-dom';

const Graphs = () => {
    let urlParams = useParams();
    return (
       <div>
           Country URL: {urlParams.country}
       </div>
    );
}

export default Graphs