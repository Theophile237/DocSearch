import { List } from 'postcss/lib/list'
import React from 'react'

const Recherche = () => {
  return (
    <>
    {/* <!-- component --> */}
<div class="flex justify-center items-center w-full bg-blue-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-blue-600 text-2xl font-bold mb-6">Poster des Docs</h1>
        <form action="/" method="post">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">Nom</label>
                <input class="py-2 px-3 text-grey-800 border border-gray-300" type="text" name="first_name" id="first_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Prénom</label>
                <input class="border border-gray-300 py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                <input class="border border-gray-300 py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="ville">Ville</label>
                <input class="border border-gray-300 py-2 px-3 text-grey-800" type="text" name="ville" id="ville"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="Quartie">lieux</label>
                <input class="border border-gray-300 py-2 px-3 text-grey-800" type="text" name="lieux" id="lieux"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="Date">Date ou vous l'avez trouver</label>
                <input class="border border-gray-300 py-2 px-3 text-grey-800" type="date" name="date" id="date"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="File">Avez-vous une Image</label>
                <input class="border py-2 px-3 text-grey-800" type="file" name="file" id="file"/>
            </div>
            {/* <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="color">Range</label>
                <input class="border py-2 text-grey-800" type="range" name="range" id="range"/>
            </div> */}
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="textarea">Dans quelles condition l'avez-vous trouver</label>
                <textarea class="border border-gray-300 py-2 px-3 text-grey-800" name="textarea" id="textarea"></textarea>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="Select">Choisir le type de Document</label>
                <select class="border border-gray-300 py-2 px-3 text-grey-800">
                    <option>CNI</option>
                    <option>Permis de Conduire</option>
                    <option>Acte de naissance</option>
                    <option>Titre foncier</option>
                    <option>Diplôme</option>
                    <option>Carte électorale</option>
                </select>
            </div>
            <button class="block bg-blue-600 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Soumettre</button>
        </form>
    </div>
</div>
    </>
  )
}

export default Recherche