import { Mails } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Github } from "lucide-react";
import { PhoneCall } from "lucide-react";

export default function Fouter() {
  return (
    <div className="fouter flex gap-5 p-5 ">
      <PhoneCall size={30}  />
      <Github size={30} />
      <Twitter size={30} />
      <Facebook size={30} />
      <Instagram size={30} />
    </div>
  );
}
