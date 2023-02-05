import _ from 'lodash';

const Highlighted = ({ body, filter = '' }) => {
  if (!filter.trim()) {
    return <span>{body}</span>;
  }
  const regex = new RegExp(`(${_.escapeRegExp(filter)})`, 'gi');
  const parts = body.split(regex);
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};
export default Highlighted;
