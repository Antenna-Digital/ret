var simplemaps_namap_mapdata = {

    main_settings: {

        //General settings
        width: "responsive", //'700' or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#ffffff",
        popups: "detect",

        //State defaults
        state_description: "State description",
        state_color: "#dbddec",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: 1.5,
        all_states_inactive: "yes",
        all_states_zoomable: "no",

        //Location defaults
        location_description: "Location description",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_url: "",
        location_size: 28,
        location_type: "square",
        location_image_source: "https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 14,
        label_font: "Arial",
        hide_labels: "yes",
        manual_zoom: "no",
        back_image: "no",
        arrow_color: "#cecece",
        arrow_color_border: "#808080",
        initial_back: "no",
        initial_zoom: -1,
        initial_zoom_solo: "yes",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 0,
        popup_font: "12px/1.5 sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        import_labels: "no",
        link_text: "View Website",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg"
    },
    state_specific: {
        AB: {
            name: "Alberta",
            color: "#959ec6"
        },
        AK: {
            name: "Alaska",
            hide: true,
        },
        AL: {
            name: "Alabama",
            color: "#b9bdd8"
        },
        AR: {
            name: "Arkansas"
        },
        AZ: {
            name: "Arizona",
            color: "#6f7bb2"
        },
        BC: {
            name: "British Columbia"
        },
        CA: {
            name: "California",
            color: '#46589e'
        },
        CO: {
            name: "Colorado",
            color: "#6f7bb2"
        },
        CT: {
            name: "Connecticut",
            color: "#959ec6"
        },
        DC: {
            name: "District of Columbia"
        },
        DE: {
            name: "Delaware"
        },
        FL: {
            name: "Florida",
            color: '#46589e'
        },
        GA: {
            name: "Georgia",
            color: '#46589e'
        },
        HI: {
            name: "Hawaii",
            color: "#959ec6",
            hide: true,
        },
        IA: {
            name: "Iowa"
        },
        ID: {
            name: "Idaho"
        },
        IL: {
            name: "Illinois",
            color: "#6f7bb2"
        },
        IN: {
            name: "Indiana",
            color: "#b9bdd8"
        },
        KS: {
            name: "Kansas",
            color: "#b9bdd8"
        },
        KY: {
            name: "Kentucky",
            color: "#b9bdd8"
        },
        LA: {
            name: "Louisiana",
            color: "#b9bdd8"
        },
        MA: {
            name: "Massachusetts"
        },
        MB: {
            name: "Manitoba",
            hide: true
        },
        MD: {
            name: "Maryland"
        },
        ME: {
            name: "Maine"
        },
        MI: {
            name: "Michigan",
            inactive: true,
        },
        MN: {
            name: "Minnesota",
            color: "#959ec6"
        },
        MO: {
            name: "Missouri",
            color: "#959ec6"
        },
        MS: {
            name: "Mississippi"
        },
        MT: {
            name: "Montana"
        },
        MX: {
            name: "Mexico",
            hide: true
        },
        NB: {
            name: "New Brunswick"
        },
        NC: {
            name: "North Carolina",
            color: "#6f7bb2"
        },
        ND: {
            name: "North Dakota"
        },
        NE: {
            name: "Nebraska",
            color: "#b9bdd8"
        },
        NH: {
            name: "New Hampshire",
            color: "#b9bdd8"
        },
        NJ: {
            name: "New Jersey",
            color: "#959ec6"
        },
        NL: {
            name: "Newfoundland and Labrador",
            hide: true
        },
        NM: {
            name: "New Mexico",
            color: "#959ec6"
        },
        NS: {
            name: "Nova Scotia"
        },
        NT: {
            name: "Northwest Territories",
            hide: true
        },
        NU: {
            name: "Nunavut",
            hide: true
        },
        NV: {
            name: "Nevada",
            color: "#6f7bb2"
        },
        NY: {
            name: "New York",
            color: "#959ec6"
        },
        OH: {
            name: "Ohio",
            color: "#b9bdd8"
        },
        OK: {
            name: "Oklahoma"
        },
        ON: {
            name: "Ontario",
            color: "#b9bdd8"
        },
        OR: {
            name: "Oregon",
            color: "#959ec6"
        },
        PA: {
            name: "Pennsylvania",
            color: "#959ec6"
        },
        PE: {
            name: "Prince Edward Island"
        },
        QC: {
            name: "Québec",
            color: "#b9bdd8"
        },
        RI: {
            name: "Rhode Island"
        },
        SC: {
            name: "South Carolina",
            color: "#959ec6"
        },
        SD: {
            name: "South Dakota"
        },
        SK: {
            name: "Saskatchewan"
        },
        TN: {
            name: "Tennessee",
            color: "#959ec6"
        },
        TX: {
            name: "Texas",
            color: '#46589e'
        },
        UT: {
            name: "Utah",
            color: "#959ec6"
        },
        VA: {
            name: "Virginia",
            color: '#46589e'
        },
        VT: {
            name: "Vermont"
        },
        WA: {
            name: "Washington"
        },
        WI: {
            name: "Wisconsin"
        },
        WV: {
            name: "West Virginia"
        },
        WY: {
            name: "Wyoming"
        },
        YT: {
            name: "Yukon",
            hide: true
        }
    },
    locations: {
        "1": {
            name: "Denver, Colorado",
            lat: 39.7645187,
            lng: -104.9951949,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/aimco-logo-vector.png"/>'
        },
        "2": {
            name: "Chicago, Illinois",
            lat: 41.8339037,
            lng: -87.8720472,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/AMLI_Logo_File-scaled-1-2048x1117.jpg"/>'
        },
        "3": {
            name: "Des Moines, Iowa",
            lat: 41.5667771,
            lng: -93.6765557,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/BH-Logo-Final-Color-2048x2008.png"/>'
        },
        "4": {
            name: "Calgary, Alberta",
            lat: 51.0277202,
            lng: -114.3680119,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Boardwalk_logo.png"/>'
        },
        "5": {
            name: "Greenbelt, Maryland",
            lat: 38.9931495,
            lng: -76.906864,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Bozzuto-logo.png"/>'
        },
        "6": {
            name: "Sandy, Utah",
            lat: 40.5724645,
            lng: -111.8842296,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/BridgeInvestmentGroup.png"/>'
        },
        "7": {
            name: "Indianapolis, Indiana",
            lat: 39.7799642,
            lng: -86.2728326,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/BuckinghamPartners_logo.png"/>'
        },
        "8": {
            name: "Rockville, Maryland",
            lat: 39.0869949,
            lng: -75.1811682,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/capreit_logo.png"/>'
        },
        "9": {
            name: "Minot, North Dakota",
            lat: 48.2373943,
            lng: -101.3057148,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/centerspace_logo.png"/>'
        },
        "10": {
            name: "Lincoln, Maryland",
            lat: 38.9631842,
            lng: -76.8281558,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/commercial-investment-properties-corporate-logo.jpg"/>'
        },
        "11": {
            name: "Atlanta, Georgia",
            lat: 33.7678358,
            lng: -84.4906439,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/cortland-logo-stacked-rgb-1.png"/>'
        },
        "12": {
            name: "Los Angeles, California",
            lat: 34.4207305,
            lng: -117.6919172,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/decron_mobile_small.png"/>'
        },
        "13": {
            name: "Bloomfield Hills, Michigan",
            lat: 42.5781013,
            lng: -83.2631385,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/edwardRoseSons_logo.png"/>'
        },
        "14": {
            name: "San Mateo, California",
            lat: 37.9565988,
            lng: -121.3506495,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Essex_Logo_Black.jpg"/>'
        },
        "15": {
            name: "Atlanta, Georgia",
            lat: 32.7678358,
            lng: -82.9906439,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/GablesResidentialLogo.png"/>'
        },
        "16": {
            name: "Boston , Massachusetts",
            lat: 42.3144556,
            lng: -71.0403237,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/GID_Logo_Corp_DarkBlack.jpg"/>'
        },
        "17": {
            name: "Charleston, South Carolina",
            lat: 33.8212559,
            lng: -80.1105621,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Greystar_Logo.jpg"/>'
        },
        "18": {
            name: "San Francisco, California",
            lat: 38.5565988,
            lng: -121.9506495,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/HamiltonZanze-Logo.png"/>'
        },
        "19": {
            name: "El Paso, Texas",
            lat: 32.2113481,
            lng: -105.5646016,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/huntlogo.png"/>'
        },
        "20": {
            name: "Dallas, Texas",
            lat: 33.3070996,
            lng: -96.6421726,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/InvitationHomes-Logo.png"/>'
        },
        // "21": {
        //     name: "Toronto, Ontario",
        //     lat: 43.7184038,
        //     lng: -79.5181411,
        //     type: 'image',
        //     image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
        //     description: '<img src="/wp-content/uploads/LMC_Logo.jpg"/>'
        // },
        // "22": {
        //     name: "Irving , Texas",
        //     lat: 32.8630007,
        //     lng: -98.0314733,
        //     type: 'image',
        //     image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
        //     description: '<img src="/wp-content/uploads/LMC_Logo.jpg"/>'
        // },
        "23": {
            name: "Germantown, Tennessee",
            lat: 35.0750612,
            lng: -89.8252443,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/MAA-logo.png"/>'
        },
        "24": {
            name: "Kansas City, Missouri",
            lat: 39.0921167,
            lng: -93.8559022,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/MaxusProperties-logo.jpg"/>'
        },
        "25": {
            name: "Harrison, New York",
            lat: 41.0195724,
            lng: -73.7893297,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/MaxxProperties-logo.png"/>'
        },
        "26": {
            name: "San Diego, California",
            lat: 33.6947988,
            lng: -116.570878,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/MG_Logo.jpg"/>'
        },
        "27": {
            name: "Newton, Massachusetts",
            lat: 42.325431,
            lng: -72.2486973,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/northland-logo.png"/>'
        },
        "28": {
            name: "New York, New York",
            lat: 41.4749979,
            lng: -73.3356108,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/osso-logo.png"/>'
        },
        "29": {
            name: "Chicago, Illinois",
            lat: 42.1339037,
            lng: -89.3720472,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Pinnacle_LG_Black_New.jpg"/>'
        },
        "30": {
            name: "Saginaw, Michigan",
            lat: 43.4749979,
            lng: -84.3356108,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Pretium.jpeg"/>'
        },
        "31": {
            name: "Chicago, Illinois",
            lat: 42.8339037,
            lng: -87.8720472,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/progressresidential-logo-scaled-1.jpg"/>'
        },
        "32": {
            name: "Toronto, Ontario",
            lat: 43.7184038,
            lng: -81.2181411,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/starlightinvestments-logo.png"/>'
        },
        "33": {
            name: "Miami, Florida",
            lat: 26.9825453,
            lng: -80.9994985,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/Starwood-Capital.jpg"/>'
        },
        "34": {
            name: "Irvine, California",
            lat: 34.6866448,
            lng: -115.7434288,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/trinity-logo.png"/>'
        },
        "35": {
            name: "Highlands Ranch, Colorado",
            lat: 38.5383572,
            lng: -104.0113958,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/UDR-logo.jpg"/>'
        },
        "36": {
            name: "Houston, Texas",
            lat: 29.8168824,
            lng: -95.6814739,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/venterrarealtycolorhorizontal.png"/>'
        },
        "37": {
            name: "Philadelphia, PA",
            lat: 39.952583,
            lng: -75.165222,
            type: 'image',
            image_url: 'https://cdn.prod.website-files.com/67ffda58fdab244706545196/680bbd379493565112964d0b_marker.svg',
            description: '<img src="/wp-content/uploads/LCOR.png"/>'
        },
    },
    labels: {
    },
    legend: {
        entries: []
    },
    data: {
    },
    regions: {
    },
};

// var simplemaps_namap_mapinfo={
//   map_name: "na",
//   initial_view: {
//     x: 430,
//     y: 347,
//     x2: 830,
//     y2: 751
//   }
// }
