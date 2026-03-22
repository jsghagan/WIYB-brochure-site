import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { FAQS } from "@/lib/constants"

interface FaqProps {
  items?: typeof FAQS
}

export function Faq({ items = FAQS }: FaqProps) {
  return (
    <SectionWrapper id="faq" className="bg-muted/40">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Everything you need to know about What&apos;s In Your Box?
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion className="w-full">
          {items.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
