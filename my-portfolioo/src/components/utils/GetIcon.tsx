import { Globe, Code, Server, Mail, Phone, MapPin } from "lucide-react";

export function getIcon(name: string) {
  switch (name) {
    case "code":
      return Code;
    case "globe":
      return Globe;
    case "server":
      return Server;
    case "mail":
      return Mail;
    case "phone":
      return Phone;
    case "mapPin":
      return MapPin;
    default:
      return Code;
  }
}
