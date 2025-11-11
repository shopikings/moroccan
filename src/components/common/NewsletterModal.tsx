import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { name, email });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-md p-0 bg-[#ECECEC] border-0 [&>button]:hidden z-100">
        <div
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <img
            src="/assets/icons/close-rounded.svg"
            alt="Close"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>

        <div className="p-6 sm:p-8 text-center">
          <div className="">
            <div className="flex items-center justify-center gap-1 mb-0">
              <div className="text-8xl sm:text-9xl md:text-[12rem] font-medium font-family-trirong leading-none text-black">
                5
              </div>
              <div className="flex flex-col justify-center h-32 sm:h-36 md:h-48">
                <div className="text-5xl sm:text-6xl md:text-8xl font-medium font-family-trirong text-black italic leading-none">
                  %
                </div>
                <div className="text-4xl sm:text-5xl md:text-4xl font-medium font-family-trirong text-black uppercase leading-none">
                  OFF
                </div>
              </div>
            </div>
            <div className="text-lg sm:text-xl font-montserrat text-black -mt-4 mb-3">
              YOUR FIRST ORDER
            </div>
          </div>

          <h3
            className="text-base sm:text-lg md:text-xl font-montserrat mb-6 sm:mb-8 px-2"
            style={{ color: "#C09A61" }}
          >
            Enjoy 5% off your order, our way to welcome you
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 sm:px-6 sm:py-6 text-sm sm:text-base border-2 border-black rounded-md bg-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 sm:px-6 sm:py-6 text-sm sm:text-base border-2 border-black rounded-md bg-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />

            <Button
              type="submit"
              className="w-full py-3 sm:py-6 text-base sm:text-lg font-montserrat font-semibold bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              CLAIM YOUR GIFT
            </Button>
          </form>

          <p
            className="text-xs sm:text-sm font-montserrat mt-4 sm:mt-6 text-gray-600 px-2"
            style={{ color: "#C09A61" }}
          >
            By joining Moroccan Glam, you'll receive exclusive updates, early
            access, and private invitations. View our{" "}
            <Link to="/privacy-policy" className="underline" onClick={onClose}>
              privacy policy
            </Link>{" "}
            and{" "}
            <Link
              to="/terms-and-conditions"
              className="underline"
              onClick={onClose}
            >
              terms of service
            </Link>{" "}
            for more info.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
