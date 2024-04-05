import { useParams } from 'react-router-dom';

function GalleryView(props) {
    const {galleryId} = useParams();
    const records = props.records;

    const foundRecord = records.find(record => Number(record.id) == Number(galleryId))
    return (
        <h2>
            Hello from {foundRecord.name}
        </h2>
    )
}
export default GalleryView;