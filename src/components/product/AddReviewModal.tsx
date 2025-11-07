import { useState } from "react";
import { X, Star, Camera } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productImage: string;
}

const AddReviewModal = ({
  isOpen,
  onClose,
  productImage,
}: AddReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [recommend, setRecommend] = useState<string | null>(null);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 bg-white border-0 shadow-none [&>button]:hidden max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-50"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] max-h-[90vh] bg-white">
          <div className="hidden md:block p-6">
            <img
              src={productImage}
              alt="Product"
              className="w-full h-auto object-cover sticky top-6"
            />
          </div>

          <div className="p-8 overflow-y-auto">
            <h2 className="text-3xl font-semibold font-montserrat mb-6 text-start">
              Leave a Review
            </h2>

            <p className="text-sm font-montserrat font-semibold text-black mb-6">
              Required fields are marked with *
            </p>

            <div className="space-y-6">
              <div>
                <Separator className="mb-6 bg-[#979797]" />
                <div className="flex items-start justify-between gap-6 mb-6">
                  <label className="text-base font-montserrat font-semibold flex-1">
                    Overall Rating*
                  </label>
                  <div className="flex items-center gap-2 shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-8 h-8 cursor-pointer transition-colors ${
                          star <= (hoveredRating || rating)
                            ? "fill-gray-400 text-gray-400"
                            : "text-gray-300"
                        }`}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => setRating(star)}
                      />
                    ))}
                    <span className="text-sm font-montserrat text-gray-500 ml-2">
                      Click to rate!
                    </span>
                  </div>
                </div>
                <Separator className="bg-[#979797]" />
              </div>

              <div>
                <label className="block text-base font-montserrat font-semibold mb-2">
                  Review Title*
                </label>
                <Input
                  placeholder="Example: Great features! (Maximum of 50 characters.)"
                  className="w-full border-[#979797]"
                  maxLength={50}
                />
              </div>

              <div>
                <label className="block text-base font-montserrat font-semibold mb-2">
                  Review*
                </label>
                <div className="border border-[#979797] p-2">
                  <Textarea
                    placeholder="Example: I brought this a month ago..."
                    className="w-full min-h-[150px] shadow-none resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                  />
                  <Separator className="my-4 bg-[#979797]" />
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-sm border-[#979797]"
                    >
                      <Camera className="w-4 h-4" />
                      Add Photo
                    </Button>
                    <span className="text-sm font-montserrat text-gray-500">
                      Add up to 6 photos
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-start justify-between gap-6">
                <label className="text-xl font-montserrat font-semibold flex-1">
                  Would you recommend this product to a friend?
                </label>
                <div className="flex gap-3 shrink-0">
                  <Button
                    variant="outline"
                    onClick={() => setRecommend("yes")}
                    className={`px-8 border-[#E5E7EB] hover:bg-[#E5E7EB] ${
                      recommend === "yes" ? "bg-[#E5E7EB]" : "bg-[#E5E7EB]"
                    }`}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setRecommend("no")}
                    className={`px-8 border-[#E5E7EB] hover:bg-[#E5E7EB] ${
                      recommend === "no" ? "bg-[#E5E7EB]" : "bg-[#E5E7EB]"
                    }`}
                  >
                    No
                  </Button>
                </div>
              </div>

              <Separator className="bg-black" />

              <div className="pt-0">
                <label className="block text-base font-montserrat font-semibold mb-2">
                  Email*
                </label>
                <Input
                  type="email"
                  placeholder="Example: youremail@example.com"
                  className="w-full border-[#979797]"
                />
              </div>

              <Separator className="bg-black" />
              <div className="pt-0 flex items-start justify-between gap-6">
                <label className="text-xl font-montserrat font-semibold flex-1">
                  What Is Your Age?
                </label>
                <div className="w-64 shrink-0">
                  <Select>
                    <SelectTrigger className="w-full rounded-none border-[#979797] bg-[#F7F6F0]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-24">18-24</SelectItem>
                      <SelectItem value="25-34">25-34</SelectItem>
                      <SelectItem value="35-44">35-44</SelectItem>
                      <SelectItem value="45-54">45-54</SelectItem>
                      <SelectItem value="55+">55+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-black" />
              <div className="pt-0 flex items-start justify-between gap-6">
                <label className="text-xl font-montserrat font-semibold flex-1">
                  What is your Country?
                </label>
                <div className="w-64 shrink-0">
                  <Select>
                    <SelectTrigger className="w-full rounded-none border-[#979797] bg-[#F7F6F0]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-black" />
              <div className="pt-0">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm font-montserrat text-gray-600">
                    I agree to the{" "}
                    <span className="underline">terms & conditions</span>
                  </span>
                </label>
                <p className="text-sm font-montserrat text-gray-500 mt-4">
                  You may receive emails regarding this submission. Any emails
                  will include the ability to opt-out of future communications.
                </p>
              </div>

              <div className="pt-2">
                <Button className="w-fit bg-black text-white px-12 py-3 rounded-none font-montserrat text-base hover:bg-gray-800 transition-colors">
                  Post Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddReviewModal;
