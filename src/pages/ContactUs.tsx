import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [helpType, setHelpType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, helpType, message });
  };

  return (
    <div className="w-full bg-[#F7F6F0] min-h-screen py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold font-family-trirong text-center mb-4">
          CONTACT US
        </h1>
        <p className="text-sm font-montserrat text-center text-[#4C4C4C] mb-8">
          We're happy to help! If you have order status related questions, check
          out{" "}
          <Link to="#" className="underline">
            Order Tracking
          </Link>{" "}
          page. If you have brand or website questions, check out our{" "}
          <Link to="/faq" className="underline">
            FAQ
          </Link>{" "}
          page. If you still need help, we'll respond to your message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-[#4C4C4C]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-montserrat mb-2">name</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-none rounded-md  shadow-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-montserrat text-gray-600 mb-2">
                email*
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-none rounded-md  shadow-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-montserrat text-gray-600 mb-2">
              how can we help?
            </label>
            <Select value={helpType} onValueChange={setHelpType}>
              <SelectTrigger className="w-full px-4 py-3 border-none rounded-md  shadow-none bg-white">
                <SelectValue placeholder="product questions or issues" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product">
                  product questions or issues
                </SelectItem>
                <SelectItem value="order">order status</SelectItem>
                <SelectItem value="shipping">shipping inquiry</SelectItem>
                <SelectItem value="return">returns & exchanges</SelectItem>
                <SelectItem value="other">other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-montserrat text-gray-600 mb-2">
              message
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border-none rounded-md  shadow-none bg-white min-h-[150px] resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-transparent text-black border-2 border-black rounded-md font-montserrat text-sm hover:bg-black hover:text-white transition-colors"
          >
            send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
