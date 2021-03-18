import { Box, Grid } from '@material-ui/core'
import Layout from 'components/Layout'

import VideoCard from 'components/VideoCard'

export default function Home({ data }) {
  return (
    <Layout title="Home | Youtube">
      <Box p={2} mt={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Youtube Author',
      authorAvatar: '/videos/avatar.png',
      views: 10,
      thumb: '/videos/video01.png',
      videoUrl: 'url',
      updatedAt: new Date()
    },
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Youtube Author',
      authorAvatar: '/videos/avatar.png',
      views: 10,
      thumb: '/videos/video01.png',
      videoUrl: 'url',
      updatedAt: new Date()
    },
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Youtube Author',
      authorAvatar: '/videos/avatar.png',
      views: 10,
      thumb: '/videos/video01.png',
      videoUrl: 'url',
      updatedAt: new Date()
    },
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Youtube Author',
      authorAvatar: '/videos/avatar.png',
      views: 10,
      thumb: '/videos/video01.png',
      videoUrl: 'url',
      updatedAt: new Date()
    }
  ]

  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    }
  }
}
