import clsx from 'clsx';
import style from './MainTitle.module.scss';

const MainTitle = ({ title, className }) => {
  return <h2 className={clsx(style.title, className && className)}>{title}</h2>;
};

export default MainTitle;
