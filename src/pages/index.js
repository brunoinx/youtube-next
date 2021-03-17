import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <Layout title="Home | Youtube">
      <h2>Este é um componente Material UI</h2>
      <Button variant="outlined" color="secondary">
        Hello World
      </Button>
    </Layout>
  )
}
