import { useModel } from 'umi';
import { changeState } from '../actions';
import styles from './index.less';

export default function IndexPage() {
  // const { age, add, setAge } = useModel('age', (model) => ({
  //   age: model.age,
  //   add: model.add,
  //   setAge: model.setAge,
  // }));

  const {
    initialState = {},
    loading,
    error,
    refresh,
    setInitialState,
  } = useModel('@@initialState');
  return (
    <div>
      <h2>UMI</h2>
      <p>age: {initialState?.state?.age}</p>

      <button
        onClick={() => {
          changeState({ age: 10 });
          setInitialState({ state: { age: 10 } });
        }}
      >
        btn
      </button>

      {initialState?.state?.age}
      <p className={styles.title}>Page index</p>
    </div>
  );
}
