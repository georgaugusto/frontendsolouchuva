import Can from '../../components/Can';
import { Container } from './styles';

function ListUser() {
  return (
    <Container>
      <h1>ListUsers</h1>
      <br />
      {/*<Can permissions={['users.list']}>
        <h2>User can see this msg!</h2>
      </Can>
      <Can permissions={['users.create']}>
        <h2>Only Admin can see this msg!</h2>
      </Can> */}
    </Container>
  );
}

export default ListUser;
