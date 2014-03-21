---
layout: page
title: "Enduring Courage | John F. Ross"
---


<div class="container">
  <div class="row">
    <div class="col-md-4">
      <img src="images/enduring-courage-cover.jpg" style="width:100%">
    </div>
    <div class="col-md-8">
      <h1>Enduring Courage</h1>
      <h2>Ace Pilot Eddie Rickenbacker and the Dawn of the Age of Speed</h2>
      <h3>St. Martin's Press: May 13, 2014.</h3>

      <hr>

      <p>The sensational true story of Eddie Rickenbacker, America's greatest flying ace.</p>

      <p>At the turn of the twentieth century two new technologies—the car and airplane—took the nation’s imagination by storm as they burst, like comets, into American life. The brave souls that leaped into these dangerous contraptions and pushed them to unexplored extremes became new American heroes: the race car driver and the flying ace.</p>

      <p>No individual did more to create and intensify these raw new roles than the tall, gangly Eddie Rickenbacker, who defied death over and over with such courage and pluck that a generation of Americans came to know his face better than the president’s. The son of poor, German-speaking Swiss immigrants in Columbus, Ohio, Rickenbacker overcame the specter of his father’s violent death, a debilitating handicap, and, later, accusations of being a German spy, to become the American military ace of aces in World War I and a Medal of Honor recipient. He and his high-spirited, all-too-short-lived pilot comrades, created a new kind of aviation warfare, as they pushed their machines to the edge of destruction—and often over it—without parachutes, radios, or radar.</p>

      <p>Enduring Courage is the electrifying story of the beginning of America’s love affair with speed—and how one man above all the rest showed a nation the way forward. No simple daredevil, he was an innovator on the racetrack, a skilled aerial dualist and squadron commander, and founder of Eastern Air Lines. Decades after his heroics against the Red Baron’s Flying Circus, he again showed a war-weary nation what it took to survive against nearly insurmountable odds when he and seven others endured a harrowing three-week ordeal adrift without food or water in the Pacific during World War II.</p>

      <p>For the first time, Enduring Courage peels back the layers of hero to reveal the man himself. With impeccable research and a gripping narrative, John F. Ross tells the unforgettable story of a man who pushed the limits of speed, endurance and courage and emerged as an American legend.</p>

    </div>
  </div>
</div>


<div class="row">
  <div class="span12" id="reviews">
    <p id="body"></p>
    <p id="reviewer"></p>

  </div>
</div>



<script>

  var reviews = [
    {
      body: "Entertaining... Ross peppers the text with quotes that place readers right alongside the ace through nearly every moment of his life. Obviously this is exciting material to work with—after all, Rickenbacker was a man who drove in the first Indy 500 and dueled with the Red Baron’s flying circus—but Ross is never fawning in this thoroughly enjoyable and downright rollicking read."
      , reviewer: "Booklist, starred review"
    },
    {
      body: "Ross has a knack for exciting, visual narrative, and the life-defining moments of race and dogfight... A highly entertaining portrait, which reveres its subject as a hero defined by his high-speed feats."
      , reviewer: "Publishers Weekly"
    },
    {
      body: "John Ross is that rare soul who writes narrative history with the verve and timing of an accomplished novelist. Enduring Courage—a heroic portrait of the aviator ace Eddie Rickenbacker of Ohio—is a bona fide page turner. The Indianapolis race car scenes and World War I dogfights ripple with excitement. I couldn't put it down."
      , reviewer: "Douglas Brinkley, bestselling author, Professor of History at Rice University, and historian for CBS News"
    },
    {
      body: "Daring, beautiful, and masterfully told, Enduring Courage puts you shoulder-to-shoulder with one of the great American spirits of all-time, Eddie Rickenbacker, who does in each chapter what the rest of us　dream to do with our lives."
      , reviewer: "Robert Kurson, New York Times bestselling author of Shadow Divers"
    },
    {
      body: "Whether it’s the Indianapolis 500, a World War I dogfight, or a struggle for survival on a life raft in the Pacific, John Ross puts you there in the midst of the turbulent, often unbelievable life of Eddie Rickenbacker—the irascible, death-defying hero who helped set the dizzying pace of our modern, machine-driven age. As Ross says in the Introduction to Enduring Courage, ‘Hold onto your seats.’"
      , reviewer: "Nathaniel Philbrick, New York Times bestselling author of In the Heart of the Sea and Bunker Hill"
    },
    {
      body: "To say Enduring Courage is inspiring is totally inadequate praise. It is also gripping, electrifying, insightful—and full of new information about a legendary American hero. I have seldom been so glad to read a book."
      , reviewer: "Thomas Fleming, New York Times bestselling author of Conquerors of the Sky"
    }
  ];

  var i = 0;
  setInterval(function() {
    if (i < reviews.length) {
      $('#body').text(reviews[i]['body']);
      $('#reviewer').text(reviews[i]['reviewer']);
      i++;
    } else {
      i = 0;
    }
  }, 5000);

</script>