// const fetch = require("node-fetch");
// const cheerio = require("cheerio");

import fetch from "node-fetch";
import cheerio from "cheerio";

const url = "https://www.rottentomatoes.com/browse/opening";

//user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36
const meta = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
};

const headers = meta;

const main = async () => {
  const res = await fetch(url, { method: "GET", headers: headers });

  const body = await res.text();
  //console.log(body);

  const $ = cheerio.load(body);

  const films = $(".media-list")
    .children()
    .map(function (i, e) {
      return {
        name: $(this).find(".media-list__title").text(),
        score: $(this).find(".tMeterScore").text(),
        poster: $(this).find(".media-list__poster").attr("src"),
      };
    })
    .toArray();

  console.log(films);
};

main();

/*
<div class="media-list__poster_container">
            
            <a href="/m/house_of_gucci" data-qa="media-list-item-link">
                
                    <img class="media-list__poster" src="https://resizing.flixster.com/AN_50ZpT8rQKYHmlwBskCSA-Aok=/180x257/v2/https://resizing.flixster.com/xcI-BnHMulSDzpf0N5sU_F4RLOY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzVmOTU3MzI3LTgwMzktNGI5My1iZWU2LTc1ODBhOGI2ODU1ZC5qcGc=" alt="House of Gucci">
                
            </a>
        </div>
		
		
		<div class="media-list__movie-info">
            <a href="/m/house_of_gucci">
                <div class="media-list__meter-container">
                    
                        <span class="media-list__meter-icon tMeterIcon tiny">
                            <span class="icon icon--tiny icon__fresh"></span>
                            <span class="tMeterScore">61%</span>
                        </span>
                    
                </div>

                <div class="media-list__title">House of Gucci</div>
*/
