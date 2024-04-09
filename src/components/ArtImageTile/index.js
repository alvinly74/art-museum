import { Link, useParams } from 'react-router-dom';
function ArtImageTile(props) {
    const galleryId = props.galleryId;
    const art = props.art;
    return (
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={art.primaryimageurl}/>
        </Link>
    )
}
export default ArtImageTile;