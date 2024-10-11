import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1>Not Found</h1>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
