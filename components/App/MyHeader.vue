<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 sm:p-10 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center gap-4 lg:flex-1">
        <NuxtLink to="/" class="flex items-center gap-4">
          <NuxtImg
            format="webp"
            quality="50"
            loading="lazy"
            class="h-9 sm:h-12 w-auto rounded-lg"
            src="https://scontent.fbkk30-1.fna.fbcdn.net/v/t39.30808-6/358427765_313343501028422_2674244689172395098_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEb9QIcUww5VbBkth-sZz65t9_K1CxH1t6338rULEfW3vaRqrKjE7nkn7d0DNVVFtnVtgFXQdHex2j9XWKL4E_4&_nc_ohc=6VG3vnL_8vcAX-Hry_V&_nc_ht=scontent.fbkk30-1.fna&oh=00_AfBUFiR-XclpjIWUuZArarr3GSUKoXUGw-SanWZrmEk-pg&oe=657739C0"
            alt="ฝากรูป"
          />
          <span class="font-bold text-xl text-center">Growgrassth.com</span>
        </NuxtLink>
      </div>
      <!-- @todo main menu -->
      <div class="hidden lg:flex md:mr-32 lg:mr-0 md:gap-x-5">
        <ul v-for="list in menu">
          <NuxtLink
            class="font-bold text-xl flex ml-6 hidden md:flex hover:text-blue-700 hover:scale-105 duration-500"
            :to="list.href"
            >{{ list.name }}</NuxtLink
          >
        </ul>
      </div>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverGroup
          class="hidden lg:flex lg:gap-x-12 ml-11 lg:ml-11 xl:ml-11"
        >
          <Popover class="relative">
            <PopoverButton
              :class="myhover"
              class="mr-4 font-bold text-xl flex items-center gap-x-1 leading-6"
            >
              ดูสินค้า
              <ChevronDownIcon
                :class="myhover"
                class="h-6 w-6 flex-none font-semibold"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              class="absolute -left-80 xl:-left-3 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <!-- @todo Submenu list -->
                <div
                  v-for="item in submenu"
                  :class="myhover"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white duration-300"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <NuxtLink
                      :to="item.href"
                      class="block font-semibold text-gray-900"
                      >{{ item.name }}<span class="absolute inset-0"
                    /></NuxtLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>

              <div
                class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"
              >
                <NuxtLink
                  v-for="item in callsToAction"
                  :key="item.name"
                  :to="item.href"
                  target="_blank"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </NuxtLink>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </transition>

      <!-- @todo Start mobile menu -->

      <div class="flex xl:hidden">
        <button
          type="button"
          class="inline-flex rounded-lg p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden xl:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          to="/login"
          :class="myhover"
          class="font-bold text-lg leading-6 text-gray-900"
          >เข้าสู่ Growgrass services
          <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </nav>

    <Dialog
      as="div"
      class="xl:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between mt-1">
          <!-- @audit fix logo -->
          <NuxtLink to="/" class="flex items-center gap-4">
            <NuxtImg
              format="webp"
              quality="50"
              loading="lazy"
              class="h-9 w-auto rounded-lg"
              src="https://scontent.fbkk30-1.fna.fbcdn.net/v/t39.30808-6/358427765_313343501028422_2674244689172395098_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEb9QIcUww5VbBkth-sZz65t9_K1CxH1t6338rULEfW3vaRqrKjE7nkn7d0DNVVFtnVtgFXQdHex2j9XWKL4E_4&_nc_ohc=6VG3vnL_8vcAX-Hry_V&_nc_ht=scontent.fbkk30-1.fna&oh=00_AfBUFiR-XclpjIWUuZArarr3GSUKoXUGw-SanWZrmEk-pg&oe=657739C0"
              alt="ฝากรูป"
            />
            <span class="font-bold text-xl text-center mr-4"
              >Growgrassth.com</span
            >
          </NuxtLink>
          <!-- @audit test transition -->
          <TransitionRoot
            appear
            :show="mobileMenuOpen"
            enter="transition-opacity duration-1000 backdrop-blur-lg"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-1000 backdrop-blur-lg"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <button
              type="button"
              class="-m-2.5 rounded-lg p-4 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </TransitionRoot>
        </div>

        <!-- @todo Mobile menu -->
        <div :is="mobileMenuOpen" class="mt-10 mx-2 flow-root">
          <TransitionRoot
            appear
            :show="mobileMenuOpen"
            enter="transition-opacity duration-1000 backdrop-blur-lg"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-1000 backdrop-blur-lg"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="pt-6 pb-3">
                <div class="flex flex-col gap-5">
                  <ul v-for="list in menu">
                    <NuxtLink
                      class="-mx-3 rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      :to="list.href"
                      >{{ list.name }}</NuxtLink
                    >
                  </ul>
                </div>
              </div>

              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  สินค้า
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <NuxtLink
                    v-for="item in [...submenu, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :to="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </DisclosurePanel>
              </Disclosure>

              <div class="py-6">
                <NuxtLink
                  to="/login"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  เข้าสู่ Growgrass services
                  <Icon name="material-symbols:arrow-outward" class="mt-1" />
                </NuxtLink>
              </div>
            </div>
          </TransitionRoot>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { menu, submenu, callsToAction } from "~/data/menu";
import { myhover } from "~/data/customButton";

import { TransitionRoot } from "@headlessui/vue";
const isShowing = ref(true);

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
