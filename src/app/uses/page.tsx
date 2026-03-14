import Header from "@/components/Header";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-onedark-purple font-bold mb-3">{title}</h2>
      <ul className="space-y-1 ml-2">{children}</ul>
    </div>
  );
}

function Item({
  name,
  description,
  href,
}: {
  name: string;
  description?: string;
  href?: string;
}) {
  return (
    <li className="flex items-baseline gap-2">
      <span className="text-onedark-gutter">-</span>
      <span>
        <span className="text-white">{name}</span>
        {description && (
          <span className="text-onedark-fg"> — {description}</span>
        )}
        {href && (
          <>
            {" "}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-onedark-blue hover:underline"
            >
              {"\u2197"}
            </a>
          </>
        )}
      </span>
    </li>
  );
}

export default function Uses() {
  return (
    <main className="min-h-screen">
      <Header barColor="purple" />

      <div className="mt-12 px-6 max-w-3xl mx-auto pb-16">
        <div className="mb-8">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">ls uses/</span>
        </div>

        <div className="space-y-8">
          <Section title="hardware/">
            <Item
              name="Dee62"
              description="Custom DIY wireless split keyboard (31 keys per half, Kailh Choc V1 Reds)"
            />
            <Item name="MacBook Air M2" />
            <Item name="LG monitor" />
            <Item name="Herman Miller Mira 2" />
            <Item name="FlexiSpot E5" description="sit/stand desk" />
            <Item name="Logitech Streamcam" />
            <Item name="Blue Yeti X" description="microphone" />
            <Item
              name="Logitech G502"
              description="gifted by Blake Dietz"
              href="https://www.blakedietz.me/"
            />
            <Item name="iPhone 15 Pro" description="no case" />
            <Item name="AirPods Pro 3" />
            <Item name="iPad Pro M2" />
            <Item name="BlackEmber Citadel r2" description="backpack" />
          </Section>

          <Section title="editor/">
            <Item
              name="Neovim"
              description="custom LazyVim config"
              href="https://github.com/dcryan/.dotfiles-nvim"
            />
            <Item name="IBM Plex Mono" />
            <Item name="One Dark" description="theme" />
          </Section>

          <Section title="terminal/">
            <Item
              name="Ghostty"
              description="recently switched from WezTerm"
            />
            <Item name="Starship" description="prompt" />
            <Item name="zsh + Homebrew" />
            <Item
              name="Dotfiles"
              href="https://github.com/dcryan/.dotfiles"
            />
          </Section>

          <Section title="desktop/">
            <Item name="macOS" />
            <Item
              name="Brave"
              description="moved from Arc when they dropped browser development"
            />
            <Item name="Raycast" />
            <Item name="1Password" />
            <Item name="Spotify" description="techno while coding" />
          </Section>

          <Section title="gaming/">
            <Item name="GeForce Now" />
            <Item name="Meta Quest 3" />
          </Section>
        </div>
      </div>
    </main>
  );
}
