import { Globe, Code, Server } from "lucide-react";

export function getIcon(name: string) {
  switch (name) {
    case "code":
      return Code;
    case "globe":
      return Globe;
    case "server":
      return Server;
    default:
      return Code;
  }
}
