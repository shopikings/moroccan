interface ColorSelectorProps {
  colors: { name: string; value: string; image?: string }[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorSelector = ({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) => {
  return (
    <div className="mb-6">
      <div className="mb-3">
        <span className="text-sm text-gray-600 font-montserrat mr-1">
          Color:{" "}
        </span>
        <span className="text-sm font-montserrat">{selectedColor}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color.name)}
            className={`w-4 h-4 cursor-pointer rounded-full border-2 transition-all ${
              selectedColor === color.name
                ? "border-black ring-2 ring-offset-2 ring-gray-400"
                : "border-gray-300"
            }`}
            style={{
              backgroundColor: color.image ? "transparent" : color.value,
              backgroundImage: color.image ? `url(${color.image})` : "none",
              backgroundSize: "cover",
            }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
