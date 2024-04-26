type SampleAppLink = {
  text: string;
  href: string;
};

interface SampleApp {
  name: string;
  src: any;
  links: SampleAppLink[];
}

const SampleApp: React.FC<SampleApp> = ({ name, src, links }) => (
  <div className="flex items-center gap-8 w-full mx-auto max-w-sm">
    {/* Badge */}
    <div className="flex flex-col justify-center items-center gap-3 min-w-20 max-w-20">
      <img
        src={src}
        alt={name}
        className="size-20 shadow object-cover aspect-square min-w-20 hover:cursor-default"
      />
      <h3 className="text-center">{name}</h3>
    </div>

    {/* Links */}
    <ul className="flex flex-col gap-1 pl-0">
      {links &&
        links.map(({ text, href }) => (
          <li className="flex items-center gap-2">
            {text === "Installation" ? (
              <p className="my-0">⚙️</p>
            ) : text === "Sample App" ? (
              <p className="my-0">📱</p>
            ) : (
              <p className="my-0">➡️</p>
            )}
            <a
              href={href}
              className="text-base-700 no-underline hover:underline leading-tight"
            >
              {text}
            </a>
          </li>
        ))}
    </ul>
  </div>
);
export default SampleApp;
