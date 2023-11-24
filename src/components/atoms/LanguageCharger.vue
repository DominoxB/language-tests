<template>
  <div id="charger" class="text-white">
    <select v-model="$i18n.locale" class="cursor-pointer bg-blue-500">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"
        class="bg-blue-500 hover:bg-blue-400">
        {{ locale }}
      </option>
    </select>
  </div>
</template>