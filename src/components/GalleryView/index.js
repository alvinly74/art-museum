import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

function GalleryView(props) {
    const {galleryId} = useParams();
    const records = props.records;

    const foundRecord = records.find(record => Number(record.id) == Number(galleryId))
    return (
        <h2>
            Hello from {foundRecord.name}
            {foundRecord.objects.map((art) => (
                <Route exact path={`/galleries/:galleryId`}>
                    <ArtImageTile art={art} galleryId={galleryId}/>
                </Route>
            ))}
        </h2>
    )
}
export default GalleryView;