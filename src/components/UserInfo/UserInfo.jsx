import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/users-selector';
import { logOutThunk } from 'redux/users/users-thunk';

const UserInfo = () => {
  const user = useSelector(selectUsers);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      {user && (
        <>
          <h4 className="text-light bg-dark">Welcome, {user.name}</h4>
          <Button onClick={handleSubmit}>Log out</Button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
