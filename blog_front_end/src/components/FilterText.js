const FilterText = ({ body, filter }) => {
  const highlightText = (text, filter) => {
   
    const [beforeSplit, ...afterSplit] = text.split(filter);
    return [beforeSplit, afterSplit];
  };
  const [before, after] = highlightText(body, filter);

  return (
    <div>
      <p className="block">
        {before}
        <span className="px-[1px] bg-accent/60 ">{filter}</span>
        {after}
      </p>
    </div>
  );
};

export default FilterText;
