'use client'
import React from 'react'
import { InfiniteMovingCards } from '../components/ui/Infinite-moving-cards'
import { AuroraBackground } from '../components/ui/Aurora-background'
import { TextGenerateEffect } from '../components/ui/Text-generate-effect'
import { ContainerScroll } from '../components/ui/Container-scroll-animation'
import Image from 'next/image'
import { CardStackDemo } from '../components/ui/CardStack'
import { InfiniteMoving } from '../components/ui/InfiniteMovingCards'

const Info = () => {
  return (
    <div className='h-[200vh]'>
    {/* <AuroraBackground> */}

        <InfiniteMovingCards 
            className='font-bold'
            items={[
                {
                    quote:
                    "+91 9443592416",
                    name: "",
                    title: "",
                    },
                    {
                        quote:
                        "suryasunrise261@gmail.com",
                        name: "",
                        title: "",
                    }
                ]}
        />
    <TextGenerateEffect  className='mt-10 text-center  text-[60px] md:text-5xl lg:text-6xl' words='Most Trusted Travels in Kumbakonam MSR Travels'/>

    <ContainerScroll>
    <Image
    src="/temple_list.png"
    alt="hero"
    height={720}
    width={1400}
    className="mx-auto rounded-2xl object-cover h-full object-left-top"
    draggable={false}
  />
    </ContainerScroll>
    {/* </AuroraBackground> */}

    <InfiniteMoving  direction = "right"
     className='font-bold'
     items={[
         {
             quote:
             "+91 8148955789",
             title: "Suryanar Temple",
             img:'/Suryanar_Koil_in_Tamil_Nadu.jpg'
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                title: "Kailasanathar Temple",
                img:'/Thingalur_temple.jpeg'
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                name: "",
                title: "Vaitheeswaran Koil",
                img:'/Vaitheeswaran_Temple.JPG'
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                name: "",
                title: "	Swetharanyeswarar Temple",
                img:'/Thiruvengadu_temple.jpg'
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                name: "",
                title: "Apatsahayesvarar Temple",
                img:'/Aalangudi_Temple.jpg'
            },
        ]}
    />
    <InfiniteMoving  direction = "left"
     className='font-bold'
     items={[
         {
             quote:
             "+91 8148955789",
             name: "",
             title: "Agniswarar Temple",
             img:'/Kanjanur_Sukkiran_Temple.jpg'
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                name: "",
                title: "Tirunallar Saniswaran Temple",
                img:'/Tirunallar_Saniswaran_Temple.png',
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                name: "",
                title: "Rahu Stalam",
                img:'/Tirunageswaram_Temple.JPG'
            },
            {
                quote:
                "suryasunrise261@gmail.com",
                name: "",
                title: "Nagannathaswamy Temple",
                img:'/Kethu_Temple.JPG'
            },
            
        ]}
    />
        <CardStackDemo />
    </div>

  )
}

export default Info
