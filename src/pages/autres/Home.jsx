import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Img from "../../assets/Home/workflow.png"


const list = [
  {
      id:1,
      img:Img,
      button:"Fonctionnement DS",
      title:"Que faut-il faire lorsque je perd mon document",
  },
  {
      id:2,
      img:"https://dummyimage.com/723x403",
      button:"Sécuriter de DS",
      title:"Que faut-il faire lorsaue je trouve un document qui ne m'appartient pas",
  },
  {
      id:3,
      img:"https://dummyimage.com/723x403",
      button:"Comment récupéré son Doc",
      title:"Quel sont les procédure qui pourons me permetre de refaire un Doc",
  },
  {
      id:4,
      img:"https://dummyimage.com/723x403",
      button:"Points de Collecte DS",
      title:"Retrouve tout les information connernant notre Equipe",
  },
]


const Home = () => {
  return (
    <>
    <Navbar/>
    <div class="text-gray-600 body-font px-10">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 pl-10">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-5xl text-2xl font-bold title-font mb-2 text-gray-900">DocSearch</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        <h2>Une apllication révolutionnaire pour retrouver les documents égarés</h2>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
        {list.map((item) => (
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-center mb-6 object-contain" src={item.img} alt="workflow"/>
              <h2 class="leading-relaxed text-justify text-base">{item.title}</h2>
              <button class="text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg text-center"> {item.button} </button>
            </div>
          </div>
          ))}
      </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default Home






// import React from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '../../components/Navbar'
// import Footer from '../../components/Footer'
// import Img from "../../assets/Home/lock.png"



// const list = [
//   {
//       id:1,
//       img:"https://dummyimage.com/723x403",
//       button:"Fonctionnement DS",
//       title:"Text",
//   },
//   {
//       id:2,
//       img:"https://dummyimage.com/723x403",
//       button:"Fonctionnement DS",
//       title:"Text",
//   },
//   {
//       id:3,
//       img:"https://dummyimage.com/723x403",
//       button:"Sécuriter de DS",
//       title:"Text",
//   },
//   {
//       id:4,
//       img:"https://dummyimage.com/723x403",
//       button:"Points de Collecte DS",
//       title:"Text",
//   },
// ]





// const Home = () => {
//   return (
//     <>
//     <Navbar/>
//     <div Docsearch class="text-gray-600 body-font">
//       <div class="container px-5 py-24 mx-auto">
//       <div class="flex flex-wrap w-full mb-20 pl-10">
//       <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
//         <h1 class="sm:text-5xl text-2xl font-bold title-font mb-2 text-gray-900">DocSearch</h1>
//         <div class="h-1 w-20 bg-indigo-500 rounded"></div>
//         <h2>Une apllication révolutionnaire pour retrouver les documents égarés</h2>
//       </div>
//     </div>
//         <div class="flex flex-wrap -m-4">
//         {list.map((item) => (
//         <div class="xl:w-1/4 md:w-1/2 p-4">
//             <div class="bg-gray-100 p-6 rounded-lg">
//               <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
//               <button class="text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg text-center"> {item.button} </button>
//               <h2 class="leading-relaxed text-base">{item.title}</h2>
//             </div>
//           </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   <Footer/>
//       </>
//   )
// }

// export default Home