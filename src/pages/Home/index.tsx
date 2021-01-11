// Home page component.
import { Container, Banner } from './style';
import { Button } from '../../components/common/styles';
import Wave from '../../assets/images/wave.svg';
import Wave2 from '../../assets/images/wave-2.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Banner>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae, id libero deleniti placeat cumque quaerat commodi illo porro eius eos neque rem sint possimus accusantium doloremque culpa est rerum.
        </p>
        <Button>start</Button>
      </Banner>
      <div>
        <img src={Wave} alt="wave" />
        <img src={Wave2} alt="wave" />
      </div>


    </Container>
  )  
}

export default Home;