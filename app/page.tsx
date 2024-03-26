import { UserButton } from "@clerk/nextjs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <nav className="flex justify-between items-center py-6">
        <p>Home page</p>
        <UserButton afterSignOutUrl="/" />
      </nav>
      <Link href="/addTask">
        <Button variant="outline">Add task</Button>
      </Link>


      <section className="flex flex-col gap-1">
        <Accordion type="single" collapsible className="rounded-md">
          <AccordionItem value="item-1" >
            <AccordionTrigger className="hover:bg-secondary rounded-md p-6">Is it accessible?</AccordionTrigger>
            <AccordionContent>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="rounded-md">
          <AccordionItem value="item-1" >
            <AccordionTrigger className="hover:bg-secondary rounded-md p-6">Is it accessible?</AccordionTrigger>
            <AccordionContent>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem voluptas accusamus odio minima veritatis totam quod earum, error nostrum qui, molestiae, sed iure quia nulla officiis sunt saepe provident?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </section>
    </main>
  );
}
