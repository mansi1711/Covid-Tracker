import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INewsDetails } from '../../shared/interfaces/INewsDetails';

@Injectable({
  providedIn: 'root'
})
export class NewsInMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
  const newsDetails: INewsDetails[] = [{
    "id": 1,
    "title": "Why You Can't Always Trust Your Coronavirus Antibody Test Results - ProPublica",
    "description": "In some situations, antibody tests generate more false positives than real ones. It’s because of math.",
    "fullNews": "Many people across the country experienced COVID-19 symptoms but could not get a test to confirm if they actually had the virus. Now some are looking to a different kind of coronavirus test for answers.\r\nAntibody tests are meant to recognize a past infection.",
    "imageUrl": "https://assets-c3.propublica.org/images/video/_1200x630_crop_center-center_82_none/20200505_antibodytestingvideo_1200x630.png?mtime=1588378961"
  },
  {
    "id": 2,
    "title": "Scammers are taking advantage': Consumers warned of illegal advance-fee loans during pandemic",
    "description": "Online money fraudsters are ramping up an old scam, luring struggling Canadians in the COVID-19 era with bogus loans that lead to more financial woes, CBC News has learned.",
    "fullNews": "Online money fraudsters are ramping up an old scam, luring struggling Canadians in the COVID-19 era with bogus loans that lead to more financial woes, CBC News has learned.Scammers are taking advantage of the pandemic because they know that a lot of Canada",
    "imageUrl": "https://i.cbc.ca/1.5552793.1588362389!/fileImage/httpImage/image.png_gen/derivatives/16x9_620/jessie-st-cyr.png"
  },
  {
    "id": 3,
    "title": "County has highest rate of COVID-19 cases on West Coast - KRON4",
    "description": "The highest rate of coronavirus cases of any county on the U.S. West Coast is in Washington state’s Yakima County.?",
    "fullNews": "SPOKANE, Wash. (AP) The highest rate of coronavirus cases of any county on the U.S. West Coast is in Washington states Yakima County.\r\nHealth experts point to a large number of essential workers, a large number of cases in long-term care facilities",
    "imageUrl": "https://www.kron4.com/wp-content/uploads/sites/11/2020/05/498f0dd2188c4f388bd8e83b0e45c70b.jpg?w=1280&h=720&crop=1"
  },
  {
    "id": 3,
    "title": "We weren’t prepared’: 176 Visalia residents and staff test positive for COVID-19 in nursing home with state’s deadliest outbreak - KTLA",
    "description": "The toll is grim at the Redwood Springs Healthcare Center in Visalia, site of California’s deadliest coronavirus outbreak in a nursing home.",
    "fullNews": "The toll is grim at the Redwood Springs Healthcare Center in Visalia, site of Californias deadliest coronavirus outbreak in a nursing home. As of Thursday, 115 residents had tested positive for COVID-19, 61 staff were infected and 26 residents were dead",
    "imageUrl": "https://ktla.com/wp-content/uploads/sites/4/2020/05/1-1.jpeg?w=840&h=560&crop=1&resize=1280,720"
  }

  ]; 

  return {newsDetails};
  }

  genId(newsDetails: INewsDetails[]): number {
    return newsDetails.length > 0 ? Math.max(...newsDetails.map(news => news.id)) + 1 : 1;
  }
}
