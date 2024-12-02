import { Heading } from "@/components/heading";
import { LinkCustom } from "@/components/link-custom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Terminal } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
            <div id="accordian" className="space-y-2">
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
            <div id="alert" className="space-y-2">
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
            <div id="alert-dialog" className="space-y-2">
              <Heading level="h3" size="2xl">
                Alert Dialog
              </Heading>
              <p>
                A modal dialog that interrupts the user with important content
                and expects a response.
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Press Me!</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>This is an alert dialog</AlertDialogTitle>
                    <AlertDialogDescription>
                      A modal dialog that interrupts the user with important
                      content and expects a response.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div id="button" className="space-y-2">
              <Heading level="h3" size="2xl">
                Button
              </Heading>
              <div className="flex gap-4 flex-wrap flex-col md:flex-row">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div id="calendar" className="space-y-2">
              <Heading level="h3" size="2xl">
                Calendar
              </Heading>
              <Calendar mode="default" />
            </div>
            <div id="card" className="space-y-2">
              <Heading level="h3" size="2xl">
                Card
              </Heading>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
            <div id="dialog" className="space-y-2">
              <Heading level="h3" size="2xl">
                Dialog
              </Heading>
              <p>
                A window overlaid on either the primary window or another dialog
                window, rendering the content underneath inert.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                      Anyone who has this link will be able to view this.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        defaultValue="https://ui.shadcn.com/docs/installation"
                        readOnly
                      />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                      <span className="sr-only">Copy</span>
                      <Copy />
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
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
