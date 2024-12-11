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
    <div>
        <div className='shadow-2xl p-3  ml-2 mr-2 '>
            <p>hi</p>
        </div>
    </div>
        <CardStackDemo />

        <div className='bg-gray-800 w-full  text-white pt-5 pb-5'>
        <h1 className='ml-5 mt-2 font-bold text-[30px]'>Contact Us for More Details</h1>

        <div className='ml-5 mb-1'>
            <div className='flex '>
                <p>Mobile :</p>
                <p>+91 9443592416</p>
            </div>
            <div className='flex '>
                <p>Email :</p>
                <p>+91 9443592416</p>
            </div>
            <div className='flex '>
                <p>Address :</p>
                <p>2/205,Kamaraj Road,Kumbakonam.</p>
            </div>
        </div>
        </div>
    </div>

  )
}

export default Info
