import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ImageZoomModalProps {
  image: string | null;
  onClose: () => void;
}

const ImageZoomModal = ({ image, onClose }: ImageZoomModalProps) => {
  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto bg-white p-0">
        <DialogTitle className="sr-only">Product Image Zoom</DialogTitle>
        {image && <img src={image} alt="Zoomed product" className="w-full" />}
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomModal;
