import React, { Component, Fragment } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

class ChooseUsTab extends Component {
  render () {
    return (
      <>
        <div className='base_header_2'>
          <h3>Varför välja oss?</h3>
        </div>
        <Accordion preExpanded={['a']}>
          <AccordionItem uuid='a'>
            <AccordionItemHeading>
              <AccordionItemButton>
                Vad är vårt värdeförslag?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              Tillfredsställa våra kunders förväntningar på kortast möjliga tid.
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Vilka värderingar upprätthåller oss?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              Öppenhet, ärlighet, excellens och närhet till kunden.
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Vad skiljer oss från resten?
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              Vi är kända för att erbjuda olika tjänster som krävs av varje kunds behov. På detta sätt anställer våra kunder ett enda företag som ansvarar för nödvändiga tjänster på ett integrerat sätt.
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </>
    )
  }
};

export default ChooseUsTab
