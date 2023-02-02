const FilterText = ({ body, filter }) => {
  const highlightText = (text, filter) => {
    const arrayOfText = [];

    if (text.split(filter).length === 1) {
      const [highlight, ...rest] = text.split(' ');
      arrayOfText.push({ filter: highlight + ' ' });

      arrayOfText.push(rest.join(' '));
      arrayOfText.push('');
    } else {
      for (let i = 0; i < text.split(filter).length; i++) {
        arrayOfText.push(text.split(filter)[i]);
        arrayOfText.push({ filter: filter });
      }
    }
    arrayOfText.pop();

    return arrayOfText;
  };
  const arrayOfText = highlightText(body, filter);

  return (
    <div>
      <p>
        {arrayOfText.map((text, i) => {
          if (typeof text === 'string') {
            return <span key={text + i}>{text}</span>;
          } else {
            return (
              <span key={text + i} className="px-[1px] bg-accent/60 ">
                {text.filter}
              </span>
            );
          }
        })}
      </p>
      {/* <p className="block">
        {before}
        <span className="px-[1px] bg-accent/60 ">{filter}</span>
        {after}
      </p> */}
    </div>
  );
};

export default FilterText;
