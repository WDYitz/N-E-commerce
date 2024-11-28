import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const QuestionsAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full lg:p-12">
      <AccordionItem value="item-1">
        <AccordionTrigger>Quais são as opções de pagamento disponíveis no site?</AccordionTrigger>
        <AccordionContent>
          Cartão de crédito, boleto bancário, Pix, entre outras opções.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Como posso rastrear meu pedido?</AccordionTrigger>
        <AccordionContent>
          Verifique o codigo de rastreio no email de confirmação do pedido.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Quais são os prazos de entrega e as opções de envio disponíveis?</AccordionTrigger>
        <AccordionContent>
          Envio Expresso de 1 a 3 dias úteis e Envio Normal de 4 a 8 dias úteis.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default QuestionsAccordion
