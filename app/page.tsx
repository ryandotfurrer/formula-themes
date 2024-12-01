import { Heading } from "@/components/heading";
import { LinkCustom } from "@/components/link-custom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

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
            <LinkCustom
              href="#get-the-code"
              variant="defaultLinkButton"
              size="default"
              className="my-8"
            >
              Get the code
            </LinkCustom>
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
        <section>
          <Heading level="h2" size="3xl">
            See it in action
          </Heading>
          {/* 
          //TODO: Add demonstrations for all UI components
          //TODO: Accordion
          //TODO: Alert
          //TODO: Alert Dialog
          //TODO: Button
          //TODO: Calendar
          //TODO: Card
          //TODO: Dialog
          //TODO: Heading
          //TODO: Popover
          //TODO: Progress
          //TODO: Radio Group
          //TODO: Select
          //TODO: Slider
          //TODO: Sonner (Toast)
          //TODO: Switch
          //TODO: Tabs
           */}
          <div id="accordian">
            <Heading level="h3" size="2xl">
              Accordion
            </Heading>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div id="alert">
            <Heading level="h3" size="2xl">
              Alert
            </Heading>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>
          </div>
        </section>
        <section id="get-the-code">
          <Heading level="h2" size="3xl">
            Get the code
          </Heading>
          <div className="w-full h-52 bg-secondary rounded-lg p-4">
            code copier here
          </div>
        </section>
      </main>
    </div>
  );
}
