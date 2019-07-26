import React from 'react'

// export default function EpisodeCard ({ episode }) {
//   // image={image}
//   return (<span>
//     <h1>{episode.name}</h1>
//     <h4>Air Date: {episode.air_date}</h4>
//     <p>{episode.episode}</p>
//     <p>{episode.characters.length} characters</p>
//   </span>
//   )
// }

import { Card } from 'semantic-ui-react'

const EpisodeCard = ({ episode }) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>{episode.air_date}</Card.Meta>
        <Card.Description>
        {episode.episode}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      {episode.characters.length}
      </Card.Content>
    </Card>
    </Card.Group>
)
export default EpisodeCard

