import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CharacterCard = ({data}) => (
  <Card>
    <Image src={data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.status}</span>
      </Card.Meta>
      <Card.Description>
      {data.location.name}
      </Card.Description>
      <Card.Description>
      {data.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='video' />
        {data.episode.length}
      </a>
    </Card.Content>
  </Card>
)

export default CharacterCard