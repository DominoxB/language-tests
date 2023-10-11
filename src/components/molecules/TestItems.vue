<template>
  <div class="mt-2 border absolute">
    <router-link to="/EnglishPage">
      <div class="p-2 w-32 flex items-center hover:bg-slate-600 text-white bg-slate-800 cursor-pointer">
        <img src="https://img.icons8.com/offices/30/great-britain.png" alt="flag" class="w-5 mr-2" />
        <span>{{ $t('english') }}</span>
      </div>
    </router-link>
    <div class="p-2 w-32 flex items-center hover:bg-slate-600 text-white bg-slate-800 cursor-pointer">
      <img src="https://img.icons8.com/offices/30/russian-federation.png" alt="flag" class="w-5 mr-2" />
      <span>{{ $t('russian') }}</span>
    </div>
  </div>
</template>
