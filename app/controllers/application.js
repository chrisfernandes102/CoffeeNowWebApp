import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    /**
     * The title of this application.
     * @property title
     * @type {String}
     * @default '{{ coffeeNow }}'
     */
    title: '{{ coffeeNow }}',

    /**
     * The current users latitude.
     * @property longitude
     * @type {String}
     * @default Riverside
     */
    latitude: '33.954959',

    /**
     * The current users longitude.
     * @property longitude
     * @type {String}
     * @default Riverside
     */
    longitude: '-117.328993',

    /**
     * Ember Hook called upon entering the controller.
     * @method init
     */
    init: function() {
        this._super(...arguments);

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function error(err) {
            return `ERROR(${err.code}): ${err.message}`;
        }

        if ('geolocation' in navigator) {

            navigator.geolocation.getCurrentPosition((position) => {

                // Set Current location upon entering the route.
                this.setProperties({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            }, error, options);
        }
    },

    /**
     * Searches user input
     * @method SearchTextField
     */
    SearchTextField: function () {
        var zipCode = document.getElementById("zipCode").value;


    },



    /**
     * Return options for DarkMode for the google maps api.
     * @method darkStyle
     * @return {Array}
     */
    darkStyle: computed(function () {
        return [
            {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [
                {
                    'color': '#193341'
                }
                ]
            },
            {
                'featureType': 'landscape',
                'elementType': 'geometry',
                'stylers': [
                {
                    'color': '#2c5a71'
                }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [
                {
                    'color': '#29768a'
                },
                {
                    'lightness': -37
                }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [
                {
                    'color': '#406d80'
                }
                ]
            },
            {
                'featureType': 'transit',
                'elementType': 'geometry',
                'stylers': [
                {
                    'color': '#406d80'
                }
                ]
            },
            {
                'elementType': 'labels.text.stroke',
                'stylers': [
                {
                    'visibility': 'on'
                },
                {
                    'color': '#3e606f'
                },
                {
                    'weight': 2
                },
                {
                    'gamma': 0.84
                }
                ]
            },
            {
                'elementType': 'labels.text.fill',
                'stylers': [
                {
                    'color': '#ffffff'
                }
                ]
            },
            {
                'featureType': 'administrative',
                'elementType': 'geometry',
                'stylers': [
                {
                    'weight': 0.6
                },
                {
                    'color': '#1a3541'
                }
                ]
            },
            {
                'elementType': 'labels.icon',
                'stylers': [
                {
                    'visibility': 'off'
                }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [
                {
                    'color': '#2c5a71'
                }
                ]
            }
        ];
    }),

    /**
     * Return options for LightMode for the google maps api.
     * @method lightStyle
     * @return {Array}
     */
    lightStyle: computed(function() {
        return [
            {
              'featureType': 'water',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#545677'
                }
              ]
            },
            {
              'featureType': 'landscape',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#fffbf7'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#545677'
                },
                {
                  'lightness': 40
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                },
                {
                  'color': '#406d80'
                }
              ]
            },
            {
              'featureType': 'transit',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#545677'
                }
              ]
            },
            {
              'elementType': 'labels.text',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'administrative',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                },
                {
                  'weight': 0.6
                },
                {
                  'color': '#1a3541'
                }
              ]
            },
            {
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            }
        ];
    }),
});
