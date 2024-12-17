import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Contato() {
  const contacts = [
    {
      icon: Mail,
      label: "seu-email@exemplo.com",
      href: "mailto:seu-email@exemplo.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/seu-usuario",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/seu-perfil",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-8">
        Contato
      </h1>
      
      <div className="max-w-md mx-auto bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
        <div className="space-y-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group flex items-center justify-between p-3 rounded-lg
                          bg-zinc-900/50 hover:bg-zinc-900
                          transition-all duration-300 ${contact.color}`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6" />
                  <span className="text-sm sm:text-base">{contact.label}</span>
                </div>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
} 