var APP_DATA = {
  "scenes": [
    {
      "id": "0-porta",
      "name": "porta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2094397302190125
      },
      "linkHotspots": [
        {
          "yaw": -0.19153946974912373,
          "pitch": 0.1563204606908002,
          "rotation": 13.351768777756625,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.09843656981248117,
        "pitch": 0.16065239524212593,
        "fov": 1.2094397302190125
      },
      "linkHotspots": [
        {
          "yaw": -0.19233948782848742,
          "pitch": -0.4280509497382887,
          "rotation": 7.853981633974483,
          "target": "2-sala"
        },
        {
          "yaw": 2.521041565475123,
          "pitch": 0.6429574650859493,
          "rotation": 10.995574287564278,
          "target": "3-cozinha"
        },
        {
          "yaw": -1.4814770578905083,
          "pitch": 0.8616265200705193,
          "rotation": 0,
          "target": "4-lavabo"
        },
        {
          "yaw": -0.6223485035662364,
          "pitch": 0.34377476512510263,
          "rotation": 4.71238898038469,
          "target": "5-corredor"
        },
        {
          "yaw": -2.6768739584422008,
          "pitch": 0.39640530241584315,
          "rotation": 0,
          "target": "0-porta"
        },
        {
          "yaw": -1.0232257545465568,
          "pitch": -0.10835403317474146,
          "rotation": 7.853981633974483,
          "target": "6-escritorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala",
      "name": "sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0144158895368953,
          "pitch": 0.30085937004860597,
          "rotation": 1.5707963267948966,
          "target": "5-corredor"
        },
        {
          "yaw": -2.1733361892146377,
          "pitch": 0.511175826121999,
          "rotation": 0.7853981633974483,
          "target": "4-lavabo"
        },
        {
          "yaw": -2.039344469379703,
          "pitch": 0.9573351948619084,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": -3.066153484036999,
          "pitch": 0.7912982711176504,
          "rotation": 0,
          "target": "3-cozinha"
        },
        {
          "yaw": -2.490717737550611,
          "pitch": 0.2814240989628711,
          "rotation": 6.283185307179586,
          "target": "0-porta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cozinha",
      "name": "cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1659474040264968,
          "pitch": 1.090949698091416,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": -2.2852288357310755,
          "pitch": 0.5728922010869226,
          "rotation": 0,
          "target": "4-lavabo"
        },
        {
          "yaw": -2.4949569313837348,
          "pitch": 0.6976329396024035,
          "rotation": 4.71238898038469,
          "target": "0-porta"
        },
        {
          "yaw": -2.050883696825954,
          "pitch": 0.4723859354270026,
          "rotation": 0,
          "target": "5-corredor"
        },
        {
          "yaw": -1.61386570359263,
          "pitch": 0.1741690783069494,
          "rotation": 1.5707963267948966,
          "target": "2-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lavabo",
      "name": "lavabo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3797194163728896,
          "pitch": 0.7306087835932136,
          "rotation": 6.283185307179586,
          "target": "3-cozinha"
        },
        {
          "yaw": -1.7316145035079522,
          "pitch": 0.28872419973889407,
          "rotation": 12.566370614359176,
          "target": "0-porta"
        },
        {
          "yaw": 2.648616514123277,
          "pitch": 0.1359676183725611,
          "rotation": 1.5707963267948966,
          "target": "2-sala"
        },
        {
          "yaw": -2.7147596576139534,
          "pitch": 1.4434736196379276,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corredor",
      "name": "corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.005338420804934074,
          "pitch": 0.5134035677588926,
          "rotation": 0,
          "target": "9-closet"
        },
        {
          "yaw": 0.6420021059081016,
          "pitch": 0.735437976691264,
          "rotation": 0.7853981633974483,
          "target": "8-quarto"
        },
        {
          "yaw": 2.033908717668951,
          "pitch": 1.0107468451834691,
          "rotation": 0,
          "target": "6-escritorio"
        },
        {
          "yaw": 2.936706503725744,
          "pitch": 1.024423247301792,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": -0.6335451395535454,
          "pitch": 0.9052680683748733,
          "rotation": 0,
          "target": "7-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-escritorio",
      "name": "escritorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8271760282076404,
          "pitch": 0.991213322359048,
          "rotation": 0,
          "target": "5-corredor"
        },
        {
          "yaw": 2.787826507730106,
          "pitch": 0.20889068993177062,
          "rotation": 4.71238898038469,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banheiro",
      "name": "banheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6573367188694093,
          "pitch": 1.439105777695577,
          "rotation": 0,
          "target": "5-corredor"
        },
        {
          "yaw": 2.805445272023726,
          "pitch": 0.9580977987216865,
          "rotation": 0,
          "target": "8-quarto"
        },
        {
          "yaw": -2.522387417800001,
          "pitch": 0.7213569984860637,
          "rotation": 5.497787143782138,
          "target": "6-escritorio"
        },
        {
          "yaw": -2.1969654018888534,
          "pitch": 0.34405553871005523,
          "rotation": 1.5707963267948966,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-quarto",
      "name": "quarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.63819584311228,
          "pitch": 0.7151636434351705,
          "rotation": 0,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-closet",
      "name": "closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.47146681838049886,
          "pitch": 0.5505817486386455,
          "rotation": 0,
          "target": "11-suite"
        },
        {
          "yaw": -1.9047797473605996,
          "pitch": 1.1049713824589684,
          "rotation": 0,
          "target": "10-banh-suite"
        },
        {
          "yaw": 2.0574005330366667,
          "pitch": 0.7264757081788709,
          "rotation": 0,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-banh-suite",
      "name": "banh suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.571120603995449,
          "pitch": 0.6709413122382539,
          "rotation": 0,
          "target": "11-suite"
        },
        {
          "yaw": 2.1384736364966956,
          "pitch": 1.3476933221457514,
          "rotation": 0,
          "target": "9-closet"
        },
        {
          "yaw": 3.1041985462079964,
          "pitch": 0.29719556147174053,
          "rotation": 1.5707963267948966,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-suite",
      "name": "suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9697344825225347,
          "pitch": 1.2474480990149193,
          "rotation": 0,
          "target": "9-closet"
        },
        {
          "yaw": -2.376509630759669,
          "pitch": 0.6817257820489289,
          "rotation": 0,
          "target": "10-banh-suite"
        },
        {
          "yaw": -2.7185448531464402,
          "pitch": 0.35986973868711836,
          "rotation": 4.71238898038469,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Meu AP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
