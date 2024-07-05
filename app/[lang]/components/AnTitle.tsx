
const AnTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="lg:text-8xl  text-6xl text-center font-black heading">
      <span className="bg-fixed bg-cover text-transparent bg-clip-text text-center mb-8">
        {title}
      </span>
    </h1>
  );
};

export default AnTitle;
