<template>
  <v-flex md4>
    <v-layout>
      <v-flex md6>
    <h2>Locations</h2>

      </v-flex>
<v-flex md6>
  <v-text-field
    label="search..."
    append-icon="search"
    :clearable="true"
    :error-messages="errorMessages"
    v-model="search"
  ></v-text-field>

</v-flex>
    </v-layout>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="location in allLocations"
         :key="location.id"
      >
        <div slot="header">{{location.data.name}}</div>
        <v-card>
          <v-card-actions class="data-infobox">
            <v-layout>
              <v-flex xs10>

            <h3>Curretnt Weather</h3>
            <p>Temperature: {{location.data.main.temp.toFixed(1)}} °C</p>
            <p>Pressure: {{location.data.main.pressure}} hPa</p>
            <p>Humidity: {{location.data.main.humidity}} %</p>
              </v-flex>
              <v-flex xs2>
                <v-btn
                  flat
                  icon
                  @click="removeLocation(location.data.id)"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
          <v-card-text>
            <v-textarea
              name="notes"
              label="notes"
              value=""
              hint="Hint text"
            ></v-textarea>
          </v-card-text>

        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
        name: "Accordion",
      mounted() {

      },
    data() {
      return {
        errorMessages: [],

      }
    },
    computed: {
      ...mapState({
        allLocations: (state) => state.map.allLocations,
      }),
      search: {
        // getter
        get() {

          return this.$store.state.map.searchTerm;
        },
        // setter
        set(newValue) {

          this.setSearchTerm(newValue);

          this.errorMessages = this.allLocations.length === 0 ? ['No search results'] : [];
        },

      }

    },
    methods:{
      ...mapActions({
        remove: 'map/remove',
        setSearchTerm: 'map/setSearchTerm',
      }),
      removeLocation(locId) {
        const newLocations = this.allLocations.filter(item => {
          return item.data.id !== locId;
        });
        this.remove(newLocations);
      },

    },

    }
</script>

<style scoped>
  .data-infobox p {
margin-bottom: 5px;
  }
  h2 {
    margin-top:16px;
  }

</style>
