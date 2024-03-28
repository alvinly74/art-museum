import { NavLink } from 'react-router-dom'
import './GalleryNavigation.css'

function GalleryNavigation(props) {
    const records = props.records;
    return (
            <nav>
            <h1>Hello from GalleryNavigation</h1>
                <NavLink key='home' exact to={`/`}>
                    Home
                </NavLink>
                {records.map((record) => (
                    <NavLink key={record.id} to={`/galleries/${record.id}`}>
                        {record.name}
                    </NavLink>
                    ))}
            </nav>
    );
  }
  export default GalleryNavigation;