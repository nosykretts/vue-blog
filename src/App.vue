<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters(['notify']),
  },
  methods: {
    showMessage() {
      console.log(this.notify);
      switch (this.notify.type) {
        case 'info':
          this.$Message.info(this.notify.message);
          break;
        case 'success':
          this.$Message.success(this.notify.message);
          break;
        case 'warning':
          this.$Message.warning(this.notify.message);
          break;
        case 'error':
          this.$Message.error(this.notify.message);
          break;

        default:
          break;
      }
    },
  },
  watch: {
    notify: {
      deep: true,
      handler() {
        this.showMessage();
      },
    },
  },
};
</script>

<style>
.layout{
  border: none;
}
/* .ivu-menu-vertical{
  min-height: 60vh;
} */

</style>

