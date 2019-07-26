import React from 'react'

// export default function LocationCard ({ name, type, dimension, residents }) {
 
//   return (<span>
//     <p>{name}</p>
//     <p>{type}</p>
//     <p>{dimension}</p>
//     <p>{residents} residents</p>
//   </span>
//   )
// }

import { Card, Icon } from 'semantic-ui-react'

const description = [
  
].join(' ')

const LocationCard = ({ name, type, dimension, residents }) => (
  <Card>
    <Card.Content header={name} />
    <Card.Content description={type} />
    <Card.Content description={dimension} />
    <Card.Content extra>
      <Icon name='user' />
      {residents}
    </Card.Content>
  </Card>
)

export default LocationCard