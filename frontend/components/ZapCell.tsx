const ZapCell = ({ name, index }: { name: string; index: number }) => {
  return (
    <div className="border bg-white flex p-8 max-w-[300px] cursor-pointer border-black pt-4 pl-4 ">
      <div className="font-bold">{index}.</div>
      <div className="font-bold">{name}</div>
    </div>
  );
};

export default ZapCell;
