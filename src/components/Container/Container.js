import PropTypes from 'prop-types';
import css from './Container.module.css';


const Container = ({ children }) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  );
};

Container.protoTypes={
  children: PropTypes.node,
};

export default Container;