<script>
import langs from '../store/modules/i18';
export default {
  name: 'App',
  data() {
    return {
      langs,
      option: ''
    };

  },
  created() {
    this.option = 'English'
  },
  methods: {
    changeLanguage(key, name) {
      this.$i18n.locale = key;
      this.option = name
    }
  },


}
</script>
    
<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
      aria-expanded="false">
      <i class="bi bi-translate"></i> {{option}}
    </button>
    <ul class="dropdown-menu">
      <li v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang"><a class="dropdown-item" href="#"
          @click="changeLanguage(`${lang.abbreviation}`,`${lang.name}`)">{{lang.name}}</a></li>
    </ul>
  </div>
</template>

<style>
.btn-primary {
    --bs-btn-color: #1c411c;
    --bs-btn-bg: #3f5c3f;
    --bs-btn-border-color: #5ba05a;
    --bs-btn-hover-color: #77d375;
    --bs-btn-hover-bg: #3a633a;
    --bs-btn-hover-border-color: #264126;
    --bs-btn-focus-shadow-rgb: #a3b5d1;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #559255;
    --bs-btn-active-border-color: #559255;
    --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #559255;
    --bs-btn-disabled-border-color: #559255;
}
.dropdown{
    margin-top: var(--details-top-margin);
}
.dropdown-menu {
    margin-top: var(--details-top-margin);
    background-color: var(--study-selected-color);
    font-size: 0.9rem;
}
</style>
    