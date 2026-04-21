import { useEffect } from "react";
import {  FaLinkedin } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleEmailRedirect = () => {
    window.location.href =
      "mailto:youremail@example.com?subject=Project Inquiry&body=Hi Shoaib,%0A%0AI'd like to discuss a project with you.";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm"
      onClick={onClose} // click outside closes
    >
      {/* Modal */}
      <div
        className="w-full max-w-md bg-card border border-border rounded-lg p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent inside click closing
      >
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-foreground">
            Get in touch
          </h3>
          <p className="text-sm text-muted-foreground">
            This will open your email app with a pre-filled message so you can
            quickly reach out.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleEmailRedirect}
            className="w-full bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Open Email Draft
          </button>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 rounded-md text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
            Message on LinkedIn
          </a>

          {/* Improved Cancel */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 rounded-md text-sm font-medium text-muted-foreground border border-border hover:text-foreground bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
