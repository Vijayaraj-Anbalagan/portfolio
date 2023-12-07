"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import TimeliineElement from './TimelineElement';

export default function Experience() {
  const { ref } = useSectionInView("Experience",0.2);
  
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) =>{
              return (<TimeliineElement key={index} item={item}/>)
            })}
        </VerticalTimeline>
        
    </section>
  )
}
