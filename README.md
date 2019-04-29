# Get Your Animes

Want to watch an anime from a legal source ?  
You don't know where to find your licensed anime ?

[Get Your Animes](https://getyouranimes.com) helps you to find a legal streaming provider

## Data sources :
- Crunchyroll
- Netflix ( thanks to http://animeonnetflix.com )
- Wakanim
- Anime Digital Network

## Limitations
All data have been gathered with a French IP, so maybe the data will not be accurate for you location.  
Netflix data has been gathered through http://animeonnetflix.com, so the animes displayed are only the one avalaible in US (e.g One Punch is not available on Netflix is US, but is on Netflix France).  
I'm working on gathering data from differents location to build a better database.

## How it works
### Backend:  
Scraping is powered by [Scrapy](https://scrapy.org/)  
Some bash to shape and upload the data  
And a cron job  
On a Raspberry Pi

### Frontend:  
Very basic ReactJS + Redux
Bootstrap 4 (with [ReactStrap](https://reactstrap.github.io/))  
