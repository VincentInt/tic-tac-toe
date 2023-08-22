const Squers = ({ win, base, queue, value, setBase}) => {
  const clickBtn = () => {
    if (base[value] === null && win === false) {
      setBase((prev) => {
        prev[value] = queue;
        return { ...prev };
      });
    }
  };
  return (
    <button onClick={clickBtn} className="border">
      {base[value]}
    </button>
  );
};

export default Squers;
