const withData = (maxRes) => (Component) => {
  const data = ['walid', 'Aya', 'Mohamed'];
  const dataLimit = data.slice(0, maxRes);

  return () => {
    return <Component data={dataLimit}></Component>;
  };
};

export default withData;
