<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onSelected">
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <MenuItem name="HomePage">
                <Icon type="ios-home"></Icon>
                Home
            </MenuItem>
            <MenuItem v-if="isLoggedIn" name="AdminIndex">
                <Icon type="ios-paper-outline"></Icon>
                Dashboard
            </MenuItem>            
            <MenuItem v-if="!isLoggedIn" name="Signin">
                <Icon type="log-in"></Icon>
                Sign In
            </MenuItem>
            <MenuItem v-if="!isLoggedIn" name="Signup">
                <Icon type="ios-analytics"></Icon>
                Sign Up
            </MenuItem>
            <MenuItem v-if="isLoggedIn" name="Signout">
                <Icon type="log-out"></Icon>
                Sign Out
            </MenuItem>
        </div>
    </Menu>
</Header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainHeader',
  methods: {
    onSelected(name) {
      if (name == 'Signout') {
        this.$store.dispatch('signout').then(() => {
          this.$router.push({ name: 'HomePage' })
        })
      } else {
        this.$router.push({
          name
        })
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style>

</style>
