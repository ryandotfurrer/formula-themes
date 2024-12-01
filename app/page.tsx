import { Heading } from "@/components/ui/heading";
import { LinkCustom } from "@/components/ui/link-custom";

export default function Home() {
  return (
    <div className="py-10 container">
      <header className="py-10">
        <Heading level="h1" size="4xl">
          Formula Themes
        </Heading>
        <p className="text-muted-foreground text-xl text-balance">
          The fastest way to get your website looking good
        </p>
      </header>
      <main className="container space-y-6">
        <section className="grid lg:grid-cols-3 gap-4">
          <div>
            <Heading level="h2" size="4xl">
              Mercedes-AMG <span className="text-accent">Petronas</span> F1 Team
            </Heading>
            <p className="text-muted-foreground text-xl text-balance">
              9 Drivers' Championships
            </p>
            <p className="text-muted-foreground text-xl text-balance">
              8 Constructors' Championships
            </p>
            <p className="text-muted-foreground text-xl text-balance">
              129 Race victories
            </p>
            <p className="text-muted-foreground text-xl text-balance">
              298 Podiums
            </p>
            <LinkCustom href="#get-the-code" variant='defaultLinkButton' size='default' className="my-8">Get the code</LinkCustom>
          </div>
          <div className="bg-primary rounded-lg p-4">
            <div className="bg-text-foreground max-w-full">
              <p className="text-muted-foreground">image will go here</p>
            </div>
            <Heading level="h4" size="2xl" className="text-white">
              Lewis Hamilton
            </Heading>
            <span className="text-muted-foreground text-xl text-balance">
              #44
            </span>
          </div>
          <div className="bg-primary rounded-lg p-4">
            <div className="bg-text-foreground max-w-full">
              <p className="text-muted-foreground">image will go here</p>
            </div>
            <Heading level="h4" size="2xl" className="text-white">
              George Russell
            </Heading>
            <span className="text-muted-foreground text-xl text-balance">
              #63
            </span>
          </div>
        </section>
        <section id="get-the-code">
          <Heading level="h2" size="3xl">Get the code</Heading>
          <div className="w-full h-52 bg-secondary rounded-lg p-4">
            code copier here
          </div>
        </section>
      </main>
    </div>
  );
}
