import fillerImage from '../assets/graph_filler.png';

const GraphNotFound = () => {
    return (
        <div className = "graph-filler">
            <img src={fillerImage} alt="graph missing" />
            <div>
                <h3 className = 'graph-heading'>Uh oh!</h3>
                <p>
                    The requested graph could not be found.
                    Try checking the following (in any order):
                </p>
                <ul>
                    <li>Spelling? We all occasionally mistype a letter or two.</li>
                    <li>Input method? You might run into issues if you try manually changing the route.</li>
                    <li>Check API status? Who knows, it might be down.</li>
                </ul>
            </div>
            
        </div>
    );
}

export default GraphNotFound;