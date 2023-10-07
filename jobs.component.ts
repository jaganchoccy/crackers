import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  active = 1;

  groundCrackers: any;
  skyCrackers: any;
  fancyCrackers: any;

  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
    this.GetJson();
  }


  GetJson() {
    // Your JSON data
    const jsonData = {
      "GroundCrackers":
      {
        "FlowerPots": 
        {
          "Small-10pcs": {
            "Price": "85", "availablity": "true"
          },
          "Big-10pcs": {
            "Price": "110", "availablity": "true"
          },
          "Special-10pcs": {
            "Price": "140", "availablity": "true"
          },
          "Ashoka-10pcs": {
            "Price": "190", "availablity": "true"
          },
          "ColorKoti-10pcs": {
            "Price": "350", "availablity": "true"
          },
          "Deluxe-5pcs": {
            "Price": "260", "availablity": "true"
          },
          "SuperDeluxe-2pcs": {
            "Price": "230", "availablity": "true"
          },
          "ColorKotiDeluxe-10pcs": {
            "Price": "570", "availablity": "true"
          }
        },
        "GroundChakra":
        {
          "Big-10pcs": {
            "Price": "60", "availablity": "true"
          },
          "Big-25pcs": {
            "Price": "150", "availablity": "true"
          },
          "Special-10pcs": {
            "Price": "105", "availablity": "true"
          },
          "Deluxe-10pcs": {
            "Price": "215", "availablity": "true"
          },
          "PlasticChakra-10pcs": {
            "Price": "375", "availablity": "true"
          }
        },
        "OneSoundCrackers":
        {		
          "2.75inch-kuruvi-1pack": {
            "Price": "20", "availablity": "true"
          },
          "3.5inch-Lakshmi-1pack": {
            "Price": "27", "availablity": "true"
          },
          "4inch-Lakshmi-1pack": {
            "Price": "40", "availablity": "true"
          },
          "4inch-JokerBomb-1pack": {
            "Price": "40", "availablity": "true"
          },
          "4inch-GoldLakshmi-1pack": {
            "Price": "55", "availablity": "true"
          },
          "4inch-DeluxeLakshmi-1pack": {
            "Price": "60", "availablity": "true"
          },
          "5inch-Lakshmi-1pack": {
            "Price": "85", "availablity": "true"
          }			
        },
        "SmallWala":
        {
          "RedBijili-1pack": {
            "Price": "50", "availablity": "true"
          },
          "Striped-Bijili-1pack": {
            "Price": "60", "availablity": "true"
          },
          "28-Chorsa": {
            "Price": "30", "availablity": "true"
          },
          "28-Giant": {
            "Price": "40", "availablity": "true"
          },
          "24-Deluxe": {
            "Price": "75", "availablity": "true"
          },
          "50-Deluxe": {
            "Price": "175", "availablity": "true"
          },
          "100-Deluxe": {
            "Price": "375", "availablity": "true"
          }	
        },	
        "AtomBomb":
        {
          "ClassicBomb-10pcs": {
            "Price": "195", "availablity": "true"
          },
          "Jurassic": {
            "Price": "320", "availablity": "true"
          },
          "HydroBomb": {
            "Price": "70", "availablity": "true"
          },
          "Bulletbomb": {
            "Price": "125", "availablity": "true"
          }			
        },
        "BigWala":
        {
          "100-wala": {
            "Price": "195", "availablity": "true"
          },
          "1000-wala": {
            "Price": "320", "availablity": "true"
          },
          "2000-wala": {
            "Price": "70", "availablity": "true"
          },
          "5000-wala": {
            "Price": "125", "availablity": "true"
          },
          "10000-wala": {
            "Price": "125", "availablity": "true"
          }			
        },
        "PaperBomb":
        {
          "250Gms-1pcs": {
            "Price": "150", "availablity": "true"
          },
          "500Gms-1pcs": {
            "Price": "250", "availablity": "true"
          },
          "1Kg-1pcs": {
            "Price": "500", "availablity": "true"
          },
          "MiniPaperBomb-5pcs": {
            "Price": "500", "availablity": "true"
          }
        }
      },
      "SkyCrackers":
      {
        "MiniSkyShots":
        {
          "7Shots-1pcs": {
            "Price": "300", "availablity": "true"
          },
          "Skyfore-1pcs": {
            "Price": "450", "availablity": "true"
          },
          "GoldenFly-1pcs": {
            "Price": "450", "availablity": "true"
          },
          "SkyWings-5pcs": {
            "Price": "450", "availablity": "true"
          }
        },
        "SingleSkyShots":
        {
          "ChotaFancy-1pcs": {
            "Price": "125", "availablity": "true"
          },
          "2.5inchFancy-1pcs": {
            "Price": "450", "availablity": "true"
          },
          "2.5inchFancy-3pcs": {
            "Price": "585", "availablity": "true"
          },
          "3inchFancy-1pcs": {
            "Price": "650", "availablity": "true"
          },
          "3.5inchFancy-1pcs": {
            "Price": "750", "availablity": "true"
          },
          "3.5inch-7Step-Fancy-1pcs": {
            "Price": "875", "availablity": "true"
          },
          "3.5inch-Fancy-DoubleBall-1pcs": {
            "Price": "1100", "availablity": "true"
          },
          "4inchFancy-1pcs": {
            "Price": "1050", "availablity": "true"
          },
          "5inchFancy-1pcs": {
            "Price": "1700", "availablity": "true"
          }
        },
        "MultiSkyShots":
        {
          "Thoka-12Shots-1pcs": {
            "Price": "430", "availablity": "true"
          },
          "Limited-30Shots": {
            "Price": "1120", "availablity": "true"
          },
          "Mega-60Shots": {
            "Price": "2240", "availablity": "true"
          },
          "120Shots": {
            "Price": "4480", "availablity": "true"
          },
          "240Shots": {
            "Price": "8960", "availablity": "true"
          },
          "2inchSetout": {
            "Price": "10500", "availablity": "true"
          },
          "25-WizzlingShots": {
            "Price": "1500", "availablity": "true"
          }			
        },
        "RocketShots":
        {
          "BombRocket-10pcs": {
            "Price": "110", "availablity": "true"
          },
          "WizzleRocket-10pcs": {
            "Price": "470", "availablity": "true"
          }			
        }
      },
      "FancyCrackers":
      {
        "Sparklers":
        {
          "Electric-12cm": {
            "Price": "85", "availablity": "true"
          },
          "Color-12cm": {
            "Price": "95", "availablity": "true"
          },
          "Electric-15cm": {
            "Price": "135", "availablity": "true"
          },
          "Color-15cm": {
            "Price": "150", "availablity": "true"
          },
          "Color-Red-15cm": {
            "Price": "180", "availablity": "true"
          },
          "Color-Green-15cm": {
            "Price": "165", "availablity": "true"
          },
          "Electric-30cm": {
            "Price": "135", "availablity": "true"
          },
          "Color-30cm": {
            "Price": "150", "availablity": "true"
          },
          "Color-Red-30cm": {
            "Price": "180", "availablity": "true"
          },
          "Color-Green-30cm": {
            "Price": "165", "availablity": "true"
          },
          "Electric-50cm": {
            "Price": "375", "availablity": "true"
          },
          "Electric-75cm": {
            "Price": "550", "availablity": "true"
          }
          
        },
        "FancyShower": {
    
        },
        "KidsFavorite": {
    
        }
      },
      "GiftBoxes":
      {
        "25-Items": {
          "Price": "550", "availablity": "true"
        },
        "50-Items": {
          "Price": "1100", "availablity": "true"
        },
        "75-Items": {
          "Price": "1550", "availablity": "true"
        },
        "100-Items": {
          "Price": "2200", "availablity": "true"
        },
        "150-Items": {
          "Price": "3300", "availablity": "true"
        },
        "200-Items": {
          "Price": "4400", "availablity": "true"
        }
      },
      "OtherCrackers":
      {
        
      }
      
    };

    debugger
    // Accessing the values
    this.groundCrackers = jsonData.GroundCrackers;
    this.skyCrackers = jsonData.SkyCrackers;
    this.fancyCrackers = jsonData.FancyCrackers;

    debugger
    // Now you can access specific items within each category, e.g., GroundCrackers, SkyCrackers, FancyCrackers
    // const smallBijiliPrice = this.groundCrackers.SmallWala["RedBijili-1pack"].Price;
    // const skyShotPrice = this.skyCrackers.MultiSkyShots["120Shots"].Price;
    // const electricSparklerPrice = this.fancyCrackers.Sparklers["Electric-12cm"].Price;

    // You can use these values as needed in your Angular component.
  }

}
