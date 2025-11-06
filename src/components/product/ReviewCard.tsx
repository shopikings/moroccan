interface ReviewCardProps {
  image: string;
  name: string;
  description: string;
  onClick: () => void;
}

const ReviewCard = ({ image, name, description, onClick }: ReviewCardProps) => {
  return (
    <div
      className="relative cursor-pointer group overflow-hidden h-[400px]"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <h3 className="text-sm font-montserrat font-semibold mb-1 text-white">
          {name}
        </h3>
        <p className="text-xs text-white font-montserrat line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
