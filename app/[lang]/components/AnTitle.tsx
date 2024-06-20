import "../globals.css";

const AnTitle = ({ title }: { title: string }) => {
  return (
  
      <h1 className="text-8xl md:text-9xl font-black heading">
        <span className="bg-fixed bg-cover text-transparent bg-clip-text">
          {title}
        </span>
      </h1>
    
  );
};

export default AnTitle;
