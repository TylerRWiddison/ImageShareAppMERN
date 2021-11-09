import { useParams } from "react-router";

import PlaceList from "../components/PlaceList";

export const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Trier',
        description: 'Home to the black gate!',
        imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/b/b1/Trier-Blick-vom_Weishaus.JPG',
        address: 'Rhineland-Palatinate, Germany',
        location: {
            lat: 49.7500,
            lng: 6.6371
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
