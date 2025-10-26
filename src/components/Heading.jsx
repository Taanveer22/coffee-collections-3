const Heading = ({ title, subTitle }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-center">{title}</h1>
      <p className="text-lg opacity-60 text-center">{subTitle}</p>
    </div>
  );
};

export default Heading;
