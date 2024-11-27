import { Heading } from "@/components/ui/heading";
import { LinkCustom } from "@/components/ui/link-custom";

export default function Home() {
  return (
    <div className="place-items-center px-4 py-20">
      <main className="max-w-3xl">
        <section>
          <Heading level="h1" size="4xl">
            Heading 1
          </Heading>
          <Heading level="h2" size="3xl">
            Heading 2
          </Heading>
          <Heading level="h3" size="2xl">
            Heading 3
          </Heading>
          <Heading level="h4" size="xl">
            Heading 4
          </Heading>
          <Heading level="h5" size="lg">
            Heading 5
          </Heading>
          <Heading level="h6" size="base">
            Heading 6
          </Heading>
          <div className="flex flex-col w-fit gap-4">
            <LinkCustom href="/">Link</LinkCustom>
            <LinkCustom href="/" variant="destructiveLinkButton" size="default">
              Link
            </LinkCustom>
            <LinkCustom href="/" variant="secondaryLinkButton" size="default">
              Link
            </LinkCustom>
            <LinkCustom href="/" variant="ghostLinkButton" size="default">
              Link
            </LinkCustom>
            <LinkCustom href="/" variant="outlineLinkButton" size="default">
              Link
            </LinkCustom>
            <LinkCustom href="/" variant="defaultLinkButton" size="default">
              Link
            </LinkCustom>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            eveniet aut exercitationem libero velit vitae quia optio
            consequuntur perferendis praesentium, cum sit reprehenderit corporis
            laborum.
          </p>
        </section>
      </main>
      <footer>
        <p>
          &copy; 2024{" "}
          <LinkCustom
            href="https://ryanfurrer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ryan Furrer
          </LinkCustom>
        </p>
      </footer>
    </div>
  );
}
