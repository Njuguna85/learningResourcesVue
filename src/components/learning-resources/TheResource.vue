<template>
  <base-card>
    <!-- pass mode attr to child BaseButton component
      attach a click event listener and execute a custom method
      -->

    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <!-- this is a dynamic component,
   we use the above buttons to change the tab to be shown.
   
   the keep-alive is used to cache the inactive component so that its inputs are not cleared/destroyed 
   
   the is attr is used for dynamic components
     -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js Documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn To google ...',
          link: 'https://google.come',
        },
      ],
    };
  },
  // this option allows us to send data(arr/obj) to descedant components no matter how nested they are.
  // in this case the descedant are 
  //    1. AddResource which accesses the method addresource
  //    2. LearningResource that deletes a resource
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const resIndex = this.storedResources.findIndex((res) => {
        res.id == id;
      });
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>