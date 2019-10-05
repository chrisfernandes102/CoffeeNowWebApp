import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    title: '{{ coffeeNow }}',
    /**
     * Return options for DarkMode for the google maps api.
     * @method darkStyle
     * @return {Array}
     */
    darkStyle: computed(function() {
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
