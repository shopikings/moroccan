import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export const BlogCard = ({
  id,
  image,
  category,
  title,
  excerpt,
  date,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="group block h-full">
      <div className="bg-white overflow-hidden rounded-b-md shadow-xl h-full flex flex-col">
        <div className="overflow-hidden mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 p-6">
          <div className="text-xs text-[#5E5E5E] uppercase font-family-trirong transition-all ease-in-out duration-200 hover:font-bold">
            {category}
          </div>

          <h3 className="font-trirong text-2xl text-gray-900">{title}</h3>

          <p className="font-montserrat text-sm text-[#5E5E5E] line-clamp-4">
            {excerpt}
          </p>
          <div className="text-xs text-[#5E5E5E] uppercase font-montserrat pb-3">
            {date}
          </div>
        </div>
      </div>
    </Link>
  );
};
