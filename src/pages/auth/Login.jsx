import React from 'react'
import { Link } from 'react-router-dom'
import Img from "../../assets/online.png"

const login = () => {
  return (
    <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex  px-5 md:flex-row flex-col items-center">
    <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={Img}/>
    </div>
    <div class="flex flex-col py-5 items-center px-8 mx-auto md:h-screen">
  <div class="flex flex-col items-center justify-center px-10 py-8 mx-auto md:h-screen lg:py-0 relative z-10 shadow-md">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connectez-vous à votre compte
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d’utilisateur</label>
                      <input type="text" name="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Patrick237" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Souvenez-vous de moi</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Mot de passe oublié?</a>
                  </div>
                  <button class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 transition mb-4">Connexion</button>
                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    <button class="w-full h-12 rounded-lg bg-red-600  uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Connexion avec Google</button>
                    <button class="w-full h-12 rounded-lg bg-blue-600  uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Connexion avec Facebook</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Vous n’avez pas encore de compte ?<Link to="/register" class="font-medium text-primary-600 hover:underline text-blue-700 dark:text-primary-500">S'enregistrer</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</div>
  </div>
</section>
  )
}

export default login