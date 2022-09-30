/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Navigation from '@/Components/Navigation';
import Topicons from '@/Components/Topicons';
import TrendingInteriorConcepts from '@/Components/TrendingInteriorConcepts';
import InteriorDecorations from '@/Components/InteriorDecorations';
import Professionals from '@/Components/Professionals';
import Dealers from '@/Components/Dealers';
import Art from '@/Components/Art';
import Videos from '@/Components/Videos';


const nav = [
  { name: 'Home', href: '#', current: true },
  { 
    name: 'Interior Ideas', 
    href: '#', 
    current: false,
    submenu:[
          {"title": "Screeding & Painting", "href": "#"},
          {"title": "TV Shelve Installer", "href": "#"},
          {"title": "Epoxy Floor Coating", "href": "#"},
          {"title": "Tiler", "href": "#"},
          {"title": "Furniture Make", "href": "#"},
          {"title": "POP Ceiling Installation", "href": "#"},
          {"title": "Window Curtain & Pelmet", "href": "#"},
          {"title": "Lightening & Fittings", "href": "#"},
          {"title": "Painter", "href": "#"},
    ]

    
   },
  { name: 'Find Professionals', href: '#', current: false },
  { name: 'Shop Online', href: '#', current: false },

]

const icons = [

  {title: "Discover Design Ideas", icon:"images/interior.jpg"},
  {title: "Find Pros", icon:"images/pro.png"},
  {title: "Find Trainings", icon:"images/training.jpg"},
  {title: "Shop Products", icon:"images/cart.jpg"},
  {title: "Projects", icon:"images/projects.jpg"},
  {title: "Suggest Pro for me", icon:"images/suggest.jpg"},
]



const featured = [
  {
        title: "Ajax Interiors",
        source: "images/int1.jpg",
        description: "An interior design company based in Lekki"
   },
  
   {
      title: "Homaland Interiors",
      source: "images/int2.jpg",
      description: "A creative interior designer based in VI"
   },
   {
      title: "Sleek Interior Design",
      source: "images/int3.jpg",
      description: "A interior firm based in Ikoyi"
  },
  {
    title: "Atlas Interiors",
    source: "images/int4.jpg",
    description: "Interior design firm based in Lagos"
  },
  {
    title: "AA Interior Design & Decorations",
    source: "images/int5.jpg",
    description: "A complete interior design and decoration company in Abuja"
  },
  
  {
    title: "Splendeur Interiors and Home",
    source: "images/int6.jpg",
    description: "Interior design firm based in Lagos and Abuja"
  },
  
  {
  title: "House to Home Interiors",
  source: "images/int7.jpg",
  description: "An award winning interior design company in Lekki"
  },
  {
  title: "Blue Lagoon Interiors",
  source: "images/int8.jpg",
  description: "Interior design and decoration company in VI and Lekki"
  },

  ]
  

  
const decor = [
  {
        title: "Throw Pillows",
        source: "images/decor/1.jpg",
        
   },
  
   {
      title: "Homaland Interiors",
      source: "images/decor/2.jpg",
      
   },
   {
      title: "Sleek Interior Design",
      source: "images/decor/3.jpg",
    
  },
  {
    title: "Atlas Interiors",
    source: "images/decor/4.jpg",
   
  },
  {
    title: "AA Interior Design & Decorations",
    source: "images/decor/20.jpg",
   
  },
  
  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/6.jpg",
   
  },

  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/7.jpg",
   
  },

  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/8.jpg",
   
  },

  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/21.jpg",
   
  },

  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/10.jpg",
   
  },

  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/11.jpg",
   
  },

  {
    title: "Splendeur Interiors and Home",
    source: "images/decor/12.jpg",
   
  }
  
  ]


  const professionals = [
    {
          title: "TV Shelve Installer",
          source: "images/skills/tvstand_designer.jpg",
         
     },
    
     {
        title: "Epoxy Floor Coating",
        source: "images/skills/epoxy_floor.jpg",
        
     },
     {
        title: "Wall Screeding & Painting",
        source: "images/skills/wall_screeding.jpg",
       
    },
    {
      title: "Wall Paper & 3D Wall Panel Installer",
      source: "images/skills/wall_panel.jpg",
     
    },
    {
      title: "Tiler",
      source: "images/skills/tiler2.jpg",
     
    },
    
    {
      title: "Furniture Maker",
      source: "images/skills/furniture.jpg",
      
    },
    
    {
    title: "Window Curtain & Pelmet Installer",
    source: "images/skills/curtain4.jpg",
    description: "An award winning interior design company in Lekki"
    },
    {
    title: "Eletrical Engineer & Lightning",
    source: "images/skills/electrical.jpeg",
    description: "Interior design and decoration company in VI and Lekki"
    },

    {
      title: "POP Ceiling Installer",
      source: "images/skills/pop_ceiling.jpg",
      description: "Interior design and decoration company in VI and Lekki"
      },

    
    ]
  
  

    const suppliers = [
      {
            title: "Paints",
            source: "images/dealers/paints.jpg",
           
       },
      
       {
          title: "Tiles & Marbles",
          source: "images/dealers/tiles.jpg",
         
       },
       {
          title: "Wall Papers",
          source: "images/dealers/wallpapers.png",
         
      },
      {
        title: "Cornice",
        source: "images/dealers/cornice.jpg",
       
      },
      {
        title: "POP & Cements",
        source: "images/dealers/pop.jpg",
       
      },
      
      {
        title: "Plaster Board",
        source: "images/dealers/pop_board.jpeg",
        
      },
      
      {
      title: "Wooden & PVC Tiles",
      source: "images/dealers/wooden_tile.jpg",
     
      },
      {
      title: "Epoxy Resin",
      source: "images/dealers/epoxy_resin.jpg",
    
      },

      {
        title: "Doors",
        source: "images/dealers/doors.jpeg",
      
      },

      {
          title: "Bathrooom & Toilets",
          source: "images/dealers/bath.jpg",
        
      },

      {
        title: "Rugs and Carpets",
        source: "images/dealers/rugs.jpeg",
      
    },

    {
      title: "Furniture & others",
      source: "images/dealers/chairs.jpg",
    
  },
    
      ]

      const artworks = [
        {
              title: "Oil on canvas",
              source: "images/art/7.jpg",
             
         },
        
         {
            title: "Oil on canvas",
            source: "images/art/2.jpg",
           
         },
         {
            title: "Acrylic on canvas",
            source: "images/art/3.jpg",
           
        },
        {
          title: "Oil on canvas",
          source: "images/art/4.jpg",
         
        },
        {
          title: "Acrylic on canvas",
          source: "images/art/5.jpg",
         
        },
        
        {
          title: "Oil on canvas",
          source: "images/art/6.jpg",
          
        },

        {
          title: "Oil on canvas",
          source: "images/art/1.jpg",
         
     },

     {
      title: "Oil on canvas",
      source: "images/art/6.jpg",
     
 },

 {
  title: "Oil on canvas",
  source: "images/art/8.jpg",
 
},

{
  title: "Oil on canvas",
  source: "images/art/10.jpg",
 
},

{
  title: "Oil on canvas",
  source: "images/art/11.jpg",
 
},

{
  title: "Oil on canvas",
  source: "images/art/9.png",
 
},
        
]


const videos = [
  {
        title: "Modern Interior Designs",
        source: "https://www.youtube.com/embed/uymwmgGFKYs",
       
   },
  
   {
      title: "Living room makeover",
      source: "https://www.youtube.com/embed/0m_TcB_h7JU",
     
   },
   {
      title: "Low budget living room makeover",
      source: "https://www.youtube.com/embed/lGZQmrENk_Q",
     
  },
  {
    title: "Luxury single room",
    source: "https://www.youtube.com/embed/0PltW-1MNHo",
   
  }

  ]




export default function Homepage() {

     
    
  return (
      <>
      <div className="min-h-full w-full">
    <Navigation navigation={nav} />
    <Topicons topIcons={icons} />
    <TrendingInteriorConcepts featured={featured} />
    <InteriorDecorations decor={decor} />
    <Dealers suppliers={suppliers} />
    <Professionals professionals={professionals} />
    <Art art={artworks} />
    <Videos videos={videos} />
 
    <div>
      <h1 className="pt-5 pb-12 px-10 text-xl">Hot Deals</h1>
    </div>


    <div>
      <h1 className="pt-5 pb-12 px-10 text-xl">Latest Interior Videos | Interior Make-over | New concepts</h1>
    </div>

 </div>
 </>
  )
}