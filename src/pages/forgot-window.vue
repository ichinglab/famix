<template>
  <div class="q-pa-md row flex-center" style="margin-top: 100px">
    <q-btn capture="environment" label="open cam ">
      <input
        style="display: none"
        class="tw--mt-10 tw-opacity-0 tw-absolute"
        type="file"
        id="file"
        ref="file"
        accept="image/*"
        capture="environment"
      />
    </q-btn>
  </div>
</template>
