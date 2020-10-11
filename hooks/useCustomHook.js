import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../slice/sampleSlice';

const useCustomHook = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.sample);

  useEffect(() => {
    dispatch(setValue('Welcome to my app!'));
  }, []);

  return {
    name,
  };
};

export default useCustomHook;
