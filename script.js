TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "hfovMax": 80,
  "id": "panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650",
  "thumbnailUrl": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_t.jpg",
  "pitch": 0,
  "partial": false,
  "label": "lobby-full",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "yaw": 25.75,
      "bleaching": 0.79,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_AB150727_A763_0A85_41BC_8F9290B02679",
      "bleachingDistance": 0.32,
      "pitch": 20.41
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB9B3EBF_B74C_8789_41D8_DD7A4D82A0BF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 18,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -117.05,
        "hfov": 6.33,
        "pitch": 0.56
       }
      ],
      "items": [
       {
        "yaw": -117.05,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.33,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 105,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.56
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB9BDEBF_B74C_8789_41D1_B65F9AEE330F",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -136.85,
        "hfov": 20.27,
        "pitch": 4.66
       }
      ],
      "items": [
       {
        "yaw": -136.85,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.27,
        "image": {
         "levels": [
          {
           "height": 333,
           "width": 338,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.66
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB9B2EBF_B74C_8789_41DF_0381927DD3E3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 21,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -81.73,
        "hfov": 11.26,
        "pitch": 2.44
       }
      ],
      "items": [
       {
        "yaw": -81.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.26,
        "image": {
         "levels": [
          {
           "height": 138,
           "width": 187,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.44
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_B9C52C9E_B744_8B8B_41B1_817653C65842",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 17,
           "width": 16,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -117.06,
        "hfov": 6.49,
        "pitch": 0.39
       }
      ],
      "items": [
       {
        "yaw": -117.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.49,
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 108,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.39
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_B9FA79E2_B74C_8DBB_41E2_65CD989EBC0F",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48, this.camera_F2494EE7_EAC0_8A37_41D7_DCCEAF600D31); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 23,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -81.66,
        "hfov": 12.83,
        "pitch": 2.46
       }
      ],
      "items": [
       {
        "yaw": -81.66,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.83,
        "image": {
         "levels": [
          {
           "height": 143,
           "width": 214,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.46
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BA6E7428_B743_BAB7_41E1_DC0A2DDE2BFB",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -137.25,
        "hfov": 21.04,
        "pitch": 4.71
       }
      ],
      "items": [
       {
        "yaw": -137.25,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 21.04,
        "image": {
         "levels": [
          {
           "height": 217,
           "width": 351,
           "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.71
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_t.jpg",
    "stereoSphere": {
     "levels": [
      {
       "height": 6000,
       "width": 6000,
       "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 80,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "hfovMax": 80,
     "id": "panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48",
     "thumbnailUrl": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_t.jpg",
     "pitch": 0,
     "partial": false,
     "label": "hallway_full",
     "class": "Panorama",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "yaw": -65.69,
         "bleaching": 0.38,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_B3E49212_A7AF_0A9F_41D5_FADC92F3471C",
         "bleachingDistance": 0.4,
         "pitch": 63.62
        },
        {
         "yaw": -9.92,
         "bleaching": 0.02,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_B381DA48_A7AF_1A8C_41B0_44C4B2A668FE",
         "bleachingDistance": 0.4,
         "pitch": 26.44
        },
        {
         "yaw": 19.72,
         "bleaching": 0.1,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_B3AF0088_A7AD_078C_41B3_14EB36B338B1",
         "bleachingDistance": 0.4,
         "pitch": 26.19
        },
        {
         "yaw": 175.23,
         "bleaching": 0.05,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_B34A46E6_A7AD_0B84_41E3_D8C4F19A1029",
         "bleachingDistance": 0.4,
         "pitch": 28.95
        },
        {
         "yaw": -155.13,
         "bleaching": 0.26,
         "class": "LensFlarePanoramaOverlay",
         "id": "overlay_B36E488A_A7AD_078C_41B3_5835C1849A2D",
         "bleachingDistance": 0.4,
         "pitch": 27.19
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BA12907C_B794_03B1_41C5_9A9CACF5FD05",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 27,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -16.1,
           "hfov": 15.58,
           "pitch": -2.54
          }
         ],
         "items": [
          {
           "yaw": -16.1,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.58,
           "image": {
            "levels": [
             {
              "height": 151,
              "width": 259,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.54
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BA12707C_B794_03B1_41BB_E2BACD75EED8",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 15,
              "width": 28,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 159.6,
           "hfov": 21.8,
           "pitch": -3.29
          }
         ],
         "items": [
          {
           "yaw": 159.6,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 21.8,
           "image": {
            "levels": [
             {
              "height": 206,
              "width": 363,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.29
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BA12407C_B794_03B1_41DF_DBD496454955",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA, this.camera_F243DEF4_EAC0_8A29_41E7_5FAECEE32E6B); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 25,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 160.01,
           "hfov": 20.3,
           "pitch": -3.28
          }
         ],
         "items": [
          {
           "yaw": 160.01,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.3,
           "image": {
            "levels": [
             {
              "height": 212,
              "width": 338,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.28
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_BA12607C_B794_03B1_41DA_EC9521C78F7A",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650, this.camera_F27DEF01_EAC0_8BEB_41E7_02AC0CC0A9AA); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 27,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -16.35,
           "hfov": 15.91,
           "pitch": -2.54
          }
         ],
         "items": [
          {
           "yaw": -16.35,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.91,
           "image": {
            "levels": [
             {
              "height": 152,
              "width": 265,
              "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.54
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_t.jpg",
       "stereoSphere": {
        "levels": [
         {
          "height": 6000,
          "width": 6000,
          "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 4998,
          "width": 4998,
          "url": "media/panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfovMin": 80,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfov": 360,
        "hfovMax": 80,
        "id": "panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA",
        "thumbnailUrl": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_t.jpg",
        "pitch": 0,
        "partial": false,
        "label": "conference_room_v4-stereo",
        "class": "Panorama",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_BAD285C7_B78C_0CDF_41D3_F8A890E0423B",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 24,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -28.38,
              "hfov": 20.36,
              "pitch": -1.2
             }
            ],
            "items": [
             {
              "yaw": -28.38,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 20.36,
              "image": {
               "levels": [
                {
                 "height": 226,
                 "width": 339,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.2
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_B91855B6_B78C_0CB1_41CF_206548700816",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48, this.camera_F24DBEDA_EAC0_8A19_41E9_4272ADDCB8DF); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 25,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -28.73,
              "hfov": 22.22,
              "pitch": -1.22
             }
            ],
            "items": [
             {
              "yaw": -28.73,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 22.22,
              "image": {
               "levels": [
                {
                 "height": 232,
                 "width": 370,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.22
             }
            ]
           },
           {
            "id": "overlay_E78B7290_EAC3_9AE9_41CA_3725CD6A094C",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupMedia(this.window_E5C4A98C_EAC0_F6FA_41CC_8574E6192044, this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D, this.playList_E54D96E7_EAC0_7A37_414C_2078BF8A8749, '90%', '90%', true, true); this.playList_E54D96E7_EAC0_7A37_414C_2078BF8A8749.set('selectedIndex', 0); ; this.viewer_uidE54DC6E8_EAC0_7A39_41E1_BE0BE9D6F842VideoPlayer.play(); "
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 135,
                 "width": 200,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 134.53,
              "hfov": 35.09,
              "pitch": -6.54
             }
            ],
            "items": [
             {
              "yaw": 134.53,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 35.09,
              "image": {
               "levels": [
                {
                 "height": 399,
                 "width": 588,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.54
             }
            ]
           },
           {
            "id": "overlay_F9AEC8C1_EAC3_966B_41DF_8CF79CDF0267",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.showPopupMedia(this.window_FE72867A_EAC0_9A19_41E9_48FED4B519BD, this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D, this.playList_FC93E877_EAC0_9617_41DD_7402EF2606E0, '90%', '90%', true, true); this.playList_FC93E877_EAC0_9617_41DD_7402EF2606E0.set('selectedIndex', 0); ; this.viewer_uidFC93B877_EAC0_9617_41D5_2BBD2A54790CVideoPlayer.play(); "
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 63,
                 "width": 65,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_3_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 135.78,
              "hfov": 7.8,
              "pitch": -7.21
             }
            ],
            "items": [
             {
              "yaw": 135.78,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.8,
              "roll": 0,
              "image": {
               "levels": [
                {
                 "height": 127,
                 "width": 130,
                 "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.21
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_t.jpg",
          "stereoSphere": {
           "levels": [
            {
             "height": 6000,
             "width": 6000,
             "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 3217,
             "width": 3217,
             "url": "media/panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "hfovMin": 80,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48",
          "class": "AdjacentPanorama",
          "yaw": -28.73,
          "backwardYaw": 160.01,
          "distance": 1
         }
        ]
       },
       "class": "AdjacentPanorama",
       "yaw": 160.01,
       "backwardYaw": -28.73,
       "distance": 1
      },
      {
       "panorama": "this.panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650",
       "class": "AdjacentPanorama",
       "yaw": -16.35,
       "backwardYaw": -81.66,
       "distance": 1
      }
     ]
    },
    "class": "AdjacentPanorama",
    "yaw": -81.66,
    "backwardYaw": -16.35,
    "distance": 1
   }
  ]
 },
 {
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "buttonCardboardView": {
   "paddingRight": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": "100%",
   "maxHeight": 36,
   "width": "100%",
   "borderSize": 0,
   "minWidth": 1,
   "maxWidth": 49,
   "shadow": false,
   "minHeight": 1,
   "horizontalAlign": "center",
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "id": "IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7.png",
   "class": "IconButton",
   "backgroundOpacity": 0
  },
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "automaticZoomSpeed": 1,
  "id": "panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1313,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -28.09,
   "pitch": -1.98
  }
 },
 "this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1320,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -138.06,
   "pitch": -5.49
  }
 },
 {
  "hfovMax": 80,
  "id": "panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085",
  "thumbnailUrl": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_t.jpg",
  "pitch": 0,
  "partial": false,
  "label": "Suite_2_v3-stereo",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_BABC94CD_B794_0CD3_41DE_7B573D88F5F9",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -170.32,
        "hfov": 17.33,
        "pitch": 2.69
       }
      ],
      "items": [
       {
        "yaw": -170.32,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.33,
        "image": {
         "levels": [
          {
           "height": 172,
           "width": 289,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.69
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BABCB4CD_B794_0CD3_41B8_261B469655C1",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 30,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -170.53,
        "hfov": 20.78,
        "pitch": 2.71
       }
      ],
      "items": [
       {
        "yaw": -170.53,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.78,
        "image": {
         "levels": [
          {
           "height": 179,
           "width": 346,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.71
       }
      ]
     },
     {
      "yaw": 77,
      "bleaching": 0.7,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_A14F9951_B1E5_6BCC_41CE_B6BB0AAC4AA5",
      "bleachingDistance": 0.4,
      "pitch": 5.34
     },
     {
      "id": "overlay_C476A85E_D532_A877_41C6_1F291DF6E1A4",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_C7B1C3D1_D5DF_B84D_41C6_C23E0533770E, this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA, this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, '90%', '90%', true, true); this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92.set('selectedIndex', 0); ; this.viewer_uidE54E06E5_EAC0_7A2B_41D7_C4A5E3E3DA01VideoPlayer.play(); "
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 127,
           "width": 200,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 157.33,
        "hfov": 25.92,
        "pitch": -4.56
       }
      ],
      "items": [
       {
        "yaw": 157.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 25.92,
        "image": {
         "levels": [
          {
           "height": 277,
           "width": 433,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.56
       }
      ]
     },
     {
      "id": "overlay_C6D92CB6_D5EE_A834_41E8_CA64B421256C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_FF7FBCEE_EAC0_8E39_41C4_BAB0112E21D8, this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA, this.playList_FCED2874_EAC0_9629_41B0_0F19257B3C1D, '90%', '90%', true, true); this.playList_FCED2874_EAC0_9629_41B0_0F19257B3C1D.set('selectedIndex', 0); ; this.viewer_uidFCEDE874_EAC0_9629_41EB_8121588A8FF1VideoPlayer.play(); "
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 48,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 158.66,
        "hfov": 5.84,
        "pitch": -3.97
       }
      ],
      "items": [
       {
        "yaw": 158.66,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.84,
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 112,
           "width": 97,
           "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.97
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_t.jpg",
    "stereoSphere": {
     "levels": [
      {
       "height": 6000,
       "width": 6000,
       "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1400,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 158.09,
   "pitch": -3.11
  }
 },
 {
  "hfovMax": 80,
  "id": "panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D",
  "thumbnailUrl": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_t.jpg",
  "pitch": 0,
  "partial": false,
  "label": "Color-suitev3-stereo",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_BB22575E_B77C_0DF1_41DC_517A5CCD9E82",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -98.25,
        "hfov": 17.89,
        "pitch": 3.19
       }
      ],
      "items": [
       {
        "yaw": -98.25,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.89,
        "image": {
         "levels": [
          {
           "height": 188,
           "width": 298,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.19
       }
      ]
     },
     {
      "yaw": 16.96,
      "bleaching": 0.47,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_A1A73A9E_B1E2_E974_41D8_00147E12613E",
      "bleachingDistance": 0.71,
      "pitch": 9.36
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_BB22675E_B77C_0DF1_4184_FD11C0A426E4",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 27,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -98.18,
        "hfov": 19.96,
        "pitch": 3.22
       }
      ],
      "items": [
       {
        "yaw": -98.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.96,
        "image": {
         "levels": [
          {
           "height": 191,
           "width": 333,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.22
       }
      ]
     },
     {
      "id": "overlay_AF6361A0_BD24_D6B2_41C4_B1AB8CC11909",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_C1F3032F_D5FD_B9D4_41BE_249411FF984A, this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813, this.playList_E54D06E6_EAC0_7A29_41E2_DDF12D3B49F9, '90%', '90%', true, true); this.playList_E54D06E6_EAC0_7A29_41E2_DDF12D3B49F9.set('selectedIndex', 0); ; this.viewer_uidE54D26E7_EAC0_7A37_41E7_EEA03BC131C0VideoPlayer.play(); "
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 127,
           "width": 200,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -58.62,
        "hfov": 24.52,
        "pitch": -5.31
       }
      ],
      "items": [
       {
        "yaw": -58.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 24.52,
        "image": {
         "levels": [
          {
           "height": 262,
           "width": 410,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.31
       }
      ]
     },
     {
      "id": "overlay_C483493A_D536_683C_41E4_551F211BD743",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_FE09DA71_EAC1_8A2B_41EA_3C1F7DD50434, this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813, this.playList_FCECE876_EAC0_9629_41A9_64329B5E48A4, '90%', '90%', true, true); this.playList_FCECE876_EAC0_9629_41A9_64329B5E48A4.set('selectedIndex', 0); ; this.viewer_uidFCECA876_EAC0_9629_41EB_7C3507A25FF6VideoPlayer.play(); "
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 59,
           "width": 47,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -57.4,
        "hfov": 5.67,
        "pitch": -4.82
       }
      ],
      "items": [
       {
        "yaw": -57.4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.67,
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 118,
           "width": 94,
           "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.82
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_t.jpg",
    "stereoSphere": {
     "levels": [
      {
       "height": 6000,
       "width": 6000,
       "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 4998,
       "width": 4998,
       "url": "media/panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 80,
  "vfov": 180,
  "hfov": 360
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": []
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_camera",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1400,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -60.22,
   "pitch": -7.83
  }
 },
 "this.panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -154.02,
   "pitch": -12.31
  }
 },
 {
  "label": "SLMA3004D",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA.mp4"
  },
  "width": 1920,
  "id": "video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "label": "y2mate.com - luxury_cruisin_im_on_a_yacht_rNf1ywnzzTI_1080p",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_C02307B2_D5F2_78CF_41D6_50FB116F3813.mp4"
  },
  "width": 1920,
  "id": "video_C02307B2_D5F2_78CF_41D6_50FB116F3813",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_C02307B2_D5F2_78CF_41D6_50FB116F3813_t.jpg"
 },
 {
  "label": "02 FULL TIME PROGRAMS_FINAL_YOUTUBE_lbr",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_E42F893C_EAC0_7619_41E8_6633C96BFD1D.mp4"
  },
  "width": 1920,
  "id": "video_E42F893C_EAC0_7619_41E8_6633C96BFD1D",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_to_width",
  "thumbnailUrl": "media/video_E42F893C_EAC0_7619_41E8_6633C96BFD1D_t.jpg"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650",
    "camera": "this.panorama_BB9BEEBF_B74C_8789_41E6_D97ED64F7650_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48",
    "camera": "this.panorama_BA12B07B_B794_03B7_41D2_FC7B5C17BD48_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085",
    "camera": "this.panorama_BABC74CD_B794_0CD3_41D3_9AACF584B085_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D",
    "camera": "this.panorama_BB23A75E_B77C_0DF1_41C7_B9DEA493CE2D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA",
    "camera": "this.panorama_BA935059_B774_03F3_41AD_4AC80B76DDBA_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 5, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5, this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6, this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7, this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D)"
   }
  ]
 },
 {
  "label": "SLMA3004D",
  "class": "Video",
  "video": {
   "height": 1080,
   "width": 1920,
   "class": "VideoResource",
   "mp4Url": "media/video_C605CDB8_D5DE_A83B_41E9_B3988C5425EB.mp4"
  },
  "width": 1920,
  "id": "video_C605CDB8_D5DE_A83B_41E9_B3988C5425EB",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_C605CDB8_D5DE_A83B_41E9_B3988C5425EB_t.jpg"
 },
 {
  "class": "PlayList",
  "id": "playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92",
  "items": [
   {
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidE54E06E5_EAC0_7A2B_41D7_C4A5E3E3DA01VideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidE54E06E5_EAC0_7A2B_41D7_C4A5E3E3DA01",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "media": "this.video_C605CDB8_D5DE_A83B_41E9_B3988C5425EB",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE54E06E5_EAC0_7A2B_41D7_C4A5E3E3DA01VideoPlayer); this.setEndToItemIndex(this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, 0, 1)",
    "start": "this.viewer_uidE54E06E5_EAC0_7A2B_41D7_C4A5E3E3DA01VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, 0, this.video_C605CDB8_D5DE_A83B_41E9_B3988C5425EB)"
   },
   {
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidF87B1D75_EAC0_8E2A_41C3_CF9F95F079A5VideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidF2589EC2_EAC0_8A69_41AF_CB0670F18CEE",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "media": "this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidF87B1D75_EAC0_8E2A_41C3_CF9F95F079A5VideoPlayer); this.setEndToItemIndex(this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, 1, 0)",
    "start": "this.viewer_uidF87B1D75_EAC0_8E2A_41C3_CF9F95F079A5VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92, 1, this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_FCED2874_EAC0_9629_41B0_0F19257B3C1D",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidFCEDE874_EAC0_9629_41EB_8121588A8FF1VideoPlayer)",
    "media": "this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidFCEDE874_EAC0_9629_41EB_8121588A8FF1VideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidF2575EC2_EAC0_8A69_41AA_43D02C16917C",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "start": "this.viewer_uidFCEDE874_EAC0_9629_41EB_8121588A8FF1VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_FCED2874_EAC0_9629_41B0_0F19257B3C1D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCED2874_EAC0_9629_41B0_0F19257B3C1D, 0, this.video_FB8725BE_EAC0_BE19_41E1_1BCBEFB304CA)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_E54D06E6_EAC0_7A29_41E2_DDF12D3B49F9",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE54D26E7_EAC0_7A37_41E7_EEA03BC131C0VideoPlayer)",
    "media": "this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidE54D26E7_EAC0_7A37_41E7_EEA03BC131C0VideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidF257BEC3_EAC0_8A6F_41CC_BE39C84B397A",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "start": "this.viewer_uidE54D26E7_EAC0_7A37_41E7_EEA03BC131C0VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_E54D06E6_EAC0_7A29_41E2_DDF12D3B49F9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E54D06E6_EAC0_7A29_41E2_DDF12D3B49F9, 0, this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_FCECE876_EAC0_9629_41A9_64329B5E48A4",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidFCECA876_EAC0_9629_41EB_7C3507A25FF6VideoPlayer)",
    "media": "this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidFCECA876_EAC0_9629_41EB_7C3507A25FF6VideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidF2567EC3_EAC0_8A6F_41EB_7A010B573AF3",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "start": "this.viewer_uidFCECA876_EAC0_9629_41EB_7C3507A25FF6VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_FCECE876_EAC0_9629_41A9_64329B5E48A4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FCECE876_EAC0_9629_41A9_64329B5E48A4, 0, this.video_C02307B2_D5F2_78CF_41D6_50FB116F3813)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_E54D96E7_EAC0_7A37_414C_2078BF8A8749",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE54DC6E8_EAC0_7A39_41E1_BE0BE9D6F842VideoPlayer)",
    "media": "this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidE54DC6E8_EAC0_7A39_41E1_BE0BE9D6F842VideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidF2560EC4_EAC0_8A69_41DA_CCBA9C671E19",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "start": "this.viewer_uidE54DC6E8_EAC0_7A39_41E1_BE0BE9D6F842VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_E54D96E7_EAC0_7A37_414C_2078BF8A8749, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E54D96E7_EAC0_7A37_414C_2078BF8A8749, 0, this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_FC93E877_EAC0_9617_41DD_7402EF2606E0",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidFC93B877_EAC0_9617_41D5_2BBD2A54790CVideoPlayer)",
    "media": "this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D",
    "class": "VideoPlayListItem",
    "player": {
     "displayPlaybackBar": true,
     "class": "VideoPlayer",
     "id": "viewer_uidFC93B877_EAC0_9617_41D5_2BBD2A54790CVideoPlayer",
     "viewerArea": {
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 20,
      "progressBackgroundColor": [
       "#000000"
      ],
      "playbackBarBorderColor": "#AAAAAA",
      "progressLeft": 10,
      "paddingRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipBorderSize": 1,
      "playbackBarBorderSize": 2,
      "minWidth": 100,
      "progressBottom": 2,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 1,
      "transitionMode": "blending",
      "progressOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingBottom": 0,
      "progressBackgroundColorRatios": [
       1
      ],
      "progressRight": 10,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingTop": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 4,
      "playbackBarLeft": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "class": "ViewerArea",
      "toolTipTextShadowOpacity": 0,
      "toolTipOpacity": 1,
      "progressHeight": 10,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       1
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowSpread": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundOpacity": 1,
      "progressBorderSize": 0,
      "borderRadius": 0,
      "playbackBarHeadShadow": true,
      "playbackBarBottom": 0,
      "toolTipFontStyle": "normal",
      "paddingLeft": 0,
      "progressBarBackgroundColor": [
       "#F04E30"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#AAAAAA",
      "height": "100%",
      "playbackBarOpacity": 1,
      "borderSize": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "toolTipFontFamily": "Arial",
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderRadius": 4,
      "playbackBarHeadBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 6,
      "id": "viewer_uidF256DEC4_EAC0_8A69_41C9_8353B5F3602B",
      "playbackBarHeadBorderRadius": 0,
      "toolTipPaddingRight": 6,
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 4,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarRight": 0,
      "toolTipFontSize": 12
     }
    },
    "start": "this.viewer_uidFC93B877_EAC0_9617_41D5_2BBD2A54790CVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_FC93E877_EAC0_9617_41DD_7402EF2606E0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_FC93E877_EAC0_9617_41DD_7402EF2606E0, 0, this.video_E42F893C_EAC0_7619_41E8_6633C96BFD1D)"
   }
  ]
 },
 {
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedIconColor": "#FFFFFF",
  "backgroundColor": [],
  "headerBorderSize": 0,
  "overflow": "scroll",
  "paddingRight": 0,
  "modal": true,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBorderColor": "#000000",
  "headerBackgroundColor": [
   "#DDDDDD"
  ],
  "scrollBarMargin": 2,
  "gap": 10,
  "title": "",
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColor": [],
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "horizontalAlign": "center",
  "shadow": false,
  "headerBorderColor": "#000000",
  "scrollBarWidth": 10,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "paddingBottom": 0,
  "closeButtonPaddingBottom": 0,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarColor": "#000000",
  "footerBorderSize": 0,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "headerBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "titlePaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "children": [
   "this.viewer_uidF2589EC2_EAC0_8A69_41AF_CB0670F18CEE"
  ],
  "closeButtonIconLineWidth": 3,
  "closeButtonBorderSize": 0,
  "footerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "layout": "vertical",
  "closeButtonPaddingTop": 0,
  "footerBorderColor": "#000000",
  "titleFontFamily": "Arial",
  "headerPaddingLeft": 10,
  "bodyPaddingLeft": 0,
  "headerBackgroundOpacity": 0,
  "height": 600,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "width": 400,
  "footerHeight": 5,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonIconHeight": 20,
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColor": [],
  "closeButtonPaddingLeft": 0,
  "titlePaddingBottom": 5,
  "minHeight": 20,
  "bodyBackgroundOpacity": 0,
  "close": "this.playList_E5B0C6E4_EAC0_7A29_41E6_4F2E7F146C92.set('selectedIndex', -1);",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "headerPaddingRight": 0,
  "titleFontStyle": "normal",
  "veilColorDirection": "horizontal",
  "id": "window_C7B1C3D1_D5DF_B84D_41C6_C23E0533770E",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontColor": "#000000",
  "closeButtonPaddingRight": 0,
  "contentOpaque": false,
  "closeButtonPressedIconLineWidth": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle"
 },
 {
  "headerBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "backgroundColor": [],
  "closeButtonBorderColor": "#000000",
  "overflow": "scroll",
  "paddingRight": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "modal": true,
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 10,
  "title": "",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColor": [],
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "shadowHorizontalLength": 3,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "horizontalAlign": "center",
  "shadow": true,
  "headerBorderColor": "#000000",
  "scrollBarWidth": 10,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarColor": "#000000",
  "closeButtonPaddingBottom": 0,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontWeight": "normal",
  "titlePaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "shadowColor": "#000000",
  "headerVerticalAlign": "middle",
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "children": [
   "this.viewer_uidF2575EC2_EAC0_8A69_41AA_43D02C16917C"
  ],
  "closeButtonIconLineWidth": 3,
  "closeButtonBorderSize": 0,
  "footerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "layout": "vertical",
  "closeButtonPaddingTop": 0,
  "titleFontFamily": "Arial",
  "headerPaddingLeft": 10,
  "bodyPaddingLeft": 0,
  "headerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "bodyBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "shadowOpacity": 0.5,
  "closeButtonPressedBackgroundColor": [],
  "closeButtonPaddingLeft": 0,
  "titlePaddingBottom": 5,
  "titlePaddingTop": 5,
  "minHeight": 20,
  "close": "this.playList_FCED2874_EAC0_9629_41B0_0F19257B3C1D.set('selectedIndex', -1);",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "headerPaddingRight": 0,
  "titleFontStyle": "normal",
  "veilColorDirection": "horizontal",
  "id": "window_FF7FBCEE_EAC0_8E39_41C4_BAB0112E21D8",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontColor": "#000000",
  "closeButtonPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "contentOpaque": false,
  "bodyPaddingBottom": 0,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle"
 },
 {
  "headerBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "backgroundColor": [],
  "closeButtonBorderColor": "#000000",
  "overflow": "scroll",
  "paddingRight": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBorderColor": "#000000",
  "modal": true,
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD"
  ],
  "gap": 10,
  "title": "",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColor": [],
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "shadowHorizontalLength": 3,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "horizontalAlign": "center",
  "shadow": true,
  "headerBorderColor": "#000000",
  "closeButtonBackgroundColorRatios": [],
  "scrollBarWidth": 10,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "paddingBottom": 0,
  "shadowSpread": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarColor": "#000000",
  "closeButtonPaddingBottom": 0,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "headerBackgroundColorRatios": [
   0
  ],
  "titleFontWeight": "normal",
  "titlePaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "shadowColor": "#000000",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "children": [
   "this.viewer_uidF257BEC3_EAC0_8A6F_41CC_BE39C84B397A"
  ],
  "closeButtonIconLineWidth": 3,
  "closeButtonBorderSize": 0,
  "footerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "layout": "vertical",
  "closeButtonPaddingTop": 0,
  "titleFontFamily": "Arial",
  "headerPaddingLeft": 10,
  "bodyPaddingLeft": 0,
  "width": 400,
  "headerBackgroundOpacity": 0,
  "height": 600,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "paddingLeft": 0,
  "borderRadius": 5,
  "footerHeight": 5,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonIconHeight": 20,
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedBackgroundColor": [],
  "closeButtonPaddingLeft": 0,
  "titlePaddingBottom": 5,
  "titlePaddingTop": 5,
  "minHeight": 20,
  "bodyBackgroundOpacity": 0,
  "close": "this.playList_E54D06E6_EAC0_7A29_41E2_DDF12D3B49F9.set('selectedIndex', -1);",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "headerPaddingRight": 0,
  "titleFontStyle": "normal",
  "veilColorDirection": "horizontal",
  "id": "window_C1F3032F_D5FD_B9D4_41BE_249411FF984A",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontColor": "#000000",
  "contentOpaque": false,
  "closeButtonPressedIconLineWidth": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "closeButtonPaddingRight": 0,
  "bodyPaddingBottom": 0,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle"
 },
 {
  "headerBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "backgroundColor": [],
  "closeButtonBorderColor": "#000000",
  "overflow": "scroll",
  "paddingRight": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBorderColor": "#000000",
  "modal": true,
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 10,
  "title": "",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColor": [],
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "shadowHorizontalLength": 3,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "horizontalAlign": "center",
  "shadow": true,
  "headerBorderColor": "#000000",
  "scrollBarWidth": 10,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarColor": "#000000",
  "closeButtonPaddingBottom": 0,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBorderSize": 0,
  "titlePaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "shadowColor": "#000000",
  "headerVerticalAlign": "middle",
  "titleFontWeight": "normal",
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "children": [
   "this.viewer_uidF2567EC3_EAC0_8A6F_41EB_7A010B573AF3"
  ],
  "closeButtonIconLineWidth": 3,
  "closeButtonBorderSize": 0,
  "footerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "layout": "vertical",
  "closeButtonPaddingTop": 0,
  "titleFontFamily": "Arial",
  "headerPaddingLeft": 10,
  "bodyPaddingLeft": 0,
  "headerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "bodyBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "shadowOpacity": 0.5,
  "closeButtonPressedBackgroundColor": [],
  "closeButtonPaddingLeft": 0,
  "titlePaddingBottom": 5,
  "titlePaddingTop": 5,
  "minHeight": 20,
  "close": "this.playList_FCECE876_EAC0_9629_41A9_64329B5E48A4.set('selectedIndex', -1);",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "headerPaddingRight": 0,
  "titleFontStyle": "normal",
  "veilColorDirection": "horizontal",
  "id": "window_FE09DA71_EAC1_8A2B_41EA_3C1F7DD50434",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontColor": "#000000",
  "closeButtonPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "contentOpaque": false,
  "bodyPaddingBottom": 0,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle"
 },
 {
  "headerBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "backgroundColor": [],
  "closeButtonBorderColor": "#000000",
  "overflow": "scroll",
  "paddingRight": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBorderColor": "#000000",
  "modal": true,
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 10,
  "title": "",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColor": [],
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "shadowHorizontalLength": 3,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "horizontalAlign": "center",
  "shadow": true,
  "headerBorderColor": "#000000",
  "scrollBarWidth": 10,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarColor": "#000000",
  "footerBorderSize": 0,
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontWeight": "normal",
  "titlePaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "shadowColor": "#000000",
  "headerVerticalAlign": "middle",
  "bodyBorderSize": 0,
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "children": [
   "this.viewer_uidF2560EC4_EAC0_8A69_41DA_CCBA9C671E19"
  ],
  "closeButtonIconLineWidth": 3,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingBottom": 0,
  "footerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "layout": "vertical",
  "closeButtonPaddingTop": 0,
  "footerBorderColor": "#000000",
  "titleFontFamily": "Arial",
  "headerPaddingLeft": 10,
  "bodyPaddingLeft": 0,
  "headerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "bodyBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "shadowOpacity": 0.5,
  "closeButtonPressedBackgroundColor": [],
  "closeButtonPaddingLeft": 0,
  "titlePaddingBottom": 5,
  "titlePaddingTop": 5,
  "minHeight": 20,
  "close": "this.playList_E54D96E7_EAC0_7A37_414C_2078BF8A8749.set('selectedIndex', -1);",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "headerPaddingRight": 0,
  "titleFontStyle": "normal",
  "veilColorDirection": "horizontal",
  "id": "window_E5C4A98C_EAC0_F6FA_41CC_8574E6192044",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontColor": "#000000",
  "closeButtonPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "contentOpaque": false,
  "bodyPaddingBottom": 0,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle"
 },
 {
  "headerBorderSize": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "backgroundColor": [],
  "closeButtonBorderColor": "#000000",
  "overflow": "scroll",
  "paddingRight": 0,
  "shadowBlurRadius": 6,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyBorderColor": "#000000",
  "modal": true,
  "scrollBarMargin": 2,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 10,
  "title": "",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColor": [],
  "minWidth": 20,
  "bodyPaddingTop": 0,
  "shadowHorizontalLength": 3,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "horizontalAlign": "center",
  "shadow": true,
  "footerBorderSize": 0,
  "scrollBarWidth": 10,
  "titleTextDecoration": "none",
  "titleFontSize": 14,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBackgroundColorRatios": [],
  "paddingBottom": 0,
  "shadowSpread": 1,
  "closeButtonBorderRadius": 11,
  "closeButtonBackgroundOpacity": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarColor": "#000000",
  "closeButtonPaddingBottom": 0,
  "headerBorderColor": "#000000",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBorderSize": 0,
  "titlePaddingRight": 5,
  "scrollBarVisible": "rollOver",
  "shadowColor": "#000000",
  "headerVerticalAlign": "middle",
  "titleFontWeight": "normal",
  "footerBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonIconWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonRollOverBackgroundColor": [],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "children": [
   "this.viewer_uidF256DEC4_EAC0_8A69_41C9_8353B5F3602B"
  ],
  "closeButtonIconLineWidth": 3,
  "closeButtonBorderSize": 0,
  "footerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "layout": "vertical",
  "closeButtonPaddingTop": 0,
  "footerBorderColor": "#000000",
  "titleFontFamily": "Arial",
  "headerPaddingLeft": 10,
  "bodyPaddingLeft": 0,
  "headerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "borderRadius": 5,
  "paddingLeft": 0,
  "footerHeight": 5,
  "closeButtonIconHeight": 20,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconColor": "#B2B2B2",
  "bodyBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "shadowOpacity": 0.5,
  "closeButtonPressedBackgroundColor": [],
  "closeButtonPaddingLeft": 0,
  "titlePaddingBottom": 5,
  "titlePaddingTop": 5,
  "minHeight": 20,
  "close": "this.playList_FC93E877_EAC0_9617_41DD_7402EF2606E0.set('selectedIndex', -1);",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingRight": 0,
  "headerPaddingTop": 10,
  "headerPaddingRight": 0,
  "titleFontStyle": "normal",
  "veilColorDirection": "horizontal",
  "id": "window_FE72867A_EAC0_9A19_41E9_48FED4B519BD",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontColor": "#000000",
  "closeButtonPaddingRight": 0,
  "closeButtonPressedIconLineWidth": 3,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "contentOpaque": false,
  "bodyPaddingBottom": 0,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_F24DBEDA_EAC0_8A19_41E9_4272ADDCB8DF",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1320,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -19.99,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_F2494EE7_EAC0_8A37_41D7_DCCEAF600D31",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1320,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 163.65,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_F243DEF4_EAC0_8A29_41E7_5FAECEE32E6B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 151.27,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 1,
  "id": "camera_F27DEF01_EAC0_8BEB_41E7_02AC0CC0A9AA",
  "automaticRotationSpeed": 1,
  "manualRotationSpeed": 1313,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": 98.34,
   "pitch": 0
  }
 }
], "children": [
 {
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeight": 20,
  "progressBackgroundColor": [
   "#000000"
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "paddingRight": 0,
  "maxHeight": 3840,
  "toolTipFontColor": "#606060",
  "toolTipBackgroundColor": "transparent",
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingBottom": 4,
  "toolTipBorderSize": 0,
  "playbackBarBorderSize": 2,
  "minWidth": 50,
  "maxWidth": 3840,
  "progressBottom": 1,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   1
  ],
  "progressRight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarLeft": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
  "toolTipOpacity": 0,
  "progressHeight": 10,
  "class": "ViewerArea",
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 10,
  "toolTipFontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#F04E30"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "height": "100%",
  "playbackBarOpacity": 1,
  "borderSize": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "minHeight": 50,
  "playbackBarBorderRadius": 4,
  "top": "0%",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBorderRadius": 4,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "left": "0%",
  "right": "0%",
  "playbackBarRight": 0,
  "toolTipFontSize": 18,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ]
 },
 {
  "children": [
   {
    "paddingRight": 0,
    "verticalAlign": "middle",
    "borderRadius": 0,
    "paddingLeft": 0,
    "height": "47.5%",
    "maxHeight": 678,
    "url": "skin/Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922.png",
    "width": "40.241%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "maxWidth": 1767,
    "shadow": false,
    "minHeight": 1,
    "scaleMode": "fit_inside",
    "click": "this.openLink(\"https://www.spangtv.com\", \"_blank\")",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "Image_BA7BB2B4_B1ED_FEB4_41C3_987DE346C922",
    "paddingTop": 0,
    "class": "Image",
    "backgroundOpacity": 0
   }
  ],
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "overflow": "visible",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": "21.552%",
  "maxHeight": 600,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "maxWidth": 800,
  "minWidth": 400,
  "shadow": false,
  "minHeight": 1,
  "gap": 10,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "bottom": "1%",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 1,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "contentOpaque": true,
  "class": "Container",
  "left": "37%",
  "layout": "horizontal",
  "right": "37%",
  "backgroundOpacity": 0
 },
 {
  "children": [
   "this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7"
  ],
  "paddingRight": 0,
  "verticalAlign": "middle",
  "overflow": "scroll",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": "9.914%",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderSize": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "horizontalAlign": "center",
  "shadow": false,
  "paddingBottom": 0,
  "bottom": "12.28%",
  "id": "Container_B03A0516_BB4F_5F29_41D3_E69A54913B7E",
  "scrollBarOpacity": 0,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "contentOpaque": false,
  "class": "Container",
  "left": "41.58%",
  "layout": "horizontal",
  "right": "42%",
  "backgroundOpacity": 0
 }
], 
 "verticalAlign": "top",
 "overflow": "visible",
 "borderRadius": 0,
 "mouseWheelEnabled": false,
 "paddingRight": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "gap": 10,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 20,
 "shadow": false,
 "minHeight": 20,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.8,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "class": "Player",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A7C2E859_B794_03F3_41D8_C81477FDCCC7], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "layout": "absolute"
})