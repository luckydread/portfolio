import React from 'react'
//import Image from 'next/image'
import ItemLayout from './itemLayout'

/*eslint-disable */
function AboutDetails() {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
            <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                Wizzard of the Cloud
            </h2>
            <div className='font-light text-left text-xs sm:text md:text-base'>
            <p > 
            My journey in web development is powered by an array of mystical tools and languages, with JavaScript 
            casting the core of my enchantments. I wield frameworks like Next.js with
            precision, crafting 
            seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
            </p>
            </div>
           
        </ItemLayout>
            
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
             <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
               5+ <sub className='font-semibold text-base'>clients</sub> 
            </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent '}>
        <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
               4+ <sub className='font-semibold text-base'>years of experience</sub> 
            </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full sm:col-6 md:span-4 !p-0'}>
            
            <img className='w-full h-auto'  src="https://github-readme-stats.vercel.app/api/top-langs/?username=luckydread&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="luckydread" loading='lazy'/>
        </ItemLayout>
        <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
            <img className='w-full h-auto'  src="https://github-readme-stats.vercel.app/api?username=luckydread&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="luckydread" loading='lazy'/>
        </ItemLayout>
        <ItemLayout className={'col-span-full '}>
            <img className='w-full h-auto'  src="https://skillicons.dev/icons?i=js,html,css,angular,azure,bash,cs,dotnet,docker,fastapi,heroku,kubernetes,nextjs,nodejs,npm,react,py,rails,raspberrypi,ruby,sequelize,ts,vercel,visualstudio,vscode,yarn,postgres,mysql" alt="luckydread" loading='lazy'/>
        </ItemLayout>
        
        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
            <img className='w-full h-auto'  src="https://github-readme-streak-stats.herokuapp.com?user=luckydread&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="luckydread" loading='lazy'/>
        </ItemLayout>

        <ItemLayout className={'col-span-full md:col-span-6 !p-0 '}>
            <img className='w-full h-auto'  src="https://github-readme-stats.vercel.app/api/pin/?username=luckydread&repo=IdentityApp&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="luckydread" loading='lazy'/>
        </ItemLayout>
        
           
           
        </div>
    </section>
  )
}

export default AboutDetails