import { Container } from './styles';

function CreateUser() {
  return (
    <Container>
      <h1>CreateUser</h1>
      <br />
      <h2>Only Admin can see this component!</h2>
    </Container>
  );
}

export default CreateUser;
