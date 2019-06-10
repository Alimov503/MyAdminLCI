<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    scroll-target="v-navigation-drawer"
    inverted-scroll="true"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="310"
    :class="{open: value}"
  >
    <!-- Background image -->
    <v-img
      :src="image"
      height="100%"

    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
        scroll-off-screen=""
        scroll-target="#scrolling-techniques"
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <!-- logo -->
            <v-img
              :src="logo"
              height="99"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Cambridge LC
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-if="responsive"
        />

        <!-- LIST -->
        <v-list-tile
          v-for="(main, i) in mains"
          :to="main.to"
          :active-class="color"
          :key="i"
          router >
          <v-list-tile-action>
            <v-icon v-html="main.icon"/>
          </v-list-tile-action>
          <v-list-tile-content :active-class="color">
            <v-list-tile-title
              :active-class="color"
              v-text="main.title"/>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-for="item in itemss"
          :key="item.title"
          v-model="item.active"
          no-action

        >
          <template v-slot:activator>
            <v-list-tile >
              <v-list-tile-action>
                <v-icon v-html="item.action"/>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title :active-class="color">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.subs"
            :key="subItem.title"
            :active-class="color"
            :to="subItem.to"
            router >
            <v-list-tile-action>
              <v-icon v-html="subItem.action"/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="subItem.title"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>

import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  props:['value'],
  data: () => ({
    logo: './img/c.jpg',
    itemss: [
      {
        action: 'mdi-school',
        title: 'Students',
        subs: [{ title: 'Add Student', action: 'mdi-account-plus', to: '/add-student' },
          { title: 'Students List', action: 'mdi-format-list-bulleted', to: '/students-list' }]
      },
      {
        action: 'mdi-account',
        title: 'Teachers',
        subs: [
          { title: 'Add teachers', action: 'mdi-account-plus', to: '/add-teacher' },
          { title: 'Teachers list', action: 'mdi-format-list-bulleted', to: '/teachers-list' }
        ]
      },
      {
        action: 'mdi-account-multiple-outline',
        title: 'Groups',
        subs: [{ title: 'Add groups', action: 'mdi-account-multiple-plus', to: '/add-group' },
          { title: 'Groups list', action: 'mdi-format-list-bulleted', to: '/groups-list' } ]
      },
      {
        action: 'mdi-office-building',
        title: 'Branch Office',
        subs: [
          { title: 'Exams list', action: 'mdi-feather', to: '/exams-list' },
          { title: 'Subjects', action: 'mdi-book-multiple', to: '/subjects-list' },
          { title: 'Room Control', action: 'mdi-cash-multiple', to: '/room-control' },
          { title: 'Noticeboard', action: 'mdi-bulletin-board', to: '/noticeboard' }
        ]
      },
      {
        action: 'mdi-calculator-variant',
        title: 'Accaunting',
        subs: [{ title: 'Incoming by subjects', action: 'mdi-currency-usd', to: '/incoming-by-subject' },
          { title: 'Teachers fee', action: 'mdi-cash-multiple', to: '/teachers-fee' },
          { title: 'Monthly consumption', action: 'mdi-cash', to: '/monthly-consumption' },
          { title: 'Calculation', action: 'mdi-calculator', to: '/calculation' } ]
      },
      {
        action: 'mdi-settings',
        title: 'Settings',
        subs: [{ title: 'setting', action: 'mdi-settings', to: '/settings' },
          { title: 'About us', action: 'mdi-information-variant', to: '/about' } ]

      }
    ],
    mains: [
      { icon: 'mdi-view-dashboard', title: 'Dashboard', to: '/' },
      { icon: 'mdi-spellcheck', title: 'Attendance', to: '/attendance' }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 2.2px;
      height: 95%;
    }

  }
</style>
