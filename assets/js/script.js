$(document).ready(function () {
  var url_String = window.location.href.toLowerCase();
  var url = new URL(url_String);
  var blog = url.searchParams.get("blog");

  if (blog === "nutrition" || blog === null) {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/mask group 46.png");
    $(".dynamic-title").html("What is Nutritional Therapy?");
    $(".dynamic-date").html("23/08/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Nutritional Therapists like to talk about bowel movements – I ask all about it. How often do you move your bowels? What does it look like? Does it float or sink? Is there pain involved? Do you see any undigested food? Ideally, people will move their bowels once or twice a day, without pain, blood, or mucous, producing a well-formed medium-brown stool or expect to see a red tint if you enjoyed a glass of beet root juice. If you look for images of “normal stool” on the internet and namely the Bristol Stool Chart, you’ll get a good idea of what I’m hoping for. Push aside the unnecessary shame society places on a normal body function and give me the details. You’ll be sharing a good bit of information about your health. What can we possibly learn from so much bathroom talk? A lot. And we can catch some significant problems. So, get ready – here are just a few of the things that the stool you produce every day (hopefully!) can help me to know a bit more about your health. It’s a great indicator of how digestive organs are functioning. Stool with particles of undigested food or that isn’t a healthy “normal” brown colour may indicate issues with proper digestion. The stomach, liver, gallbladder, and pancreas all play a part in digestion – if one of those isn’t functioning up to par, it could cause abnormal stool changes. Without proper breakdown of food, vitamin and nutrient absorption can be impaired. It can be an alert for food intolerances or allergies. As anyone with a lactose intolerance can tell you, eat too much of a food that your body doesn’t like, and you’ll know quickly. Diarrhoea, constipation, and changes in stool consistency can all signal food-related issues. Further testing and treatment plans can be used to help confirm food allergies and intolerances as the source. of digestive difficulty. It indicates the health of your microbiome. Abnormal stool habits can point to an unhealthy microbiome. As more research is done, the importance of the microbiome – the community of bacteria and yeasts that live in the intestines – cannot be emphasized enough. Pathogenic bacteria can wreak havoc on the digestive tract, and often the entire immune system. Stool testing is available to identify which bacteria are present and can help your health provider create a treatment plan to encourage beneficial bacterial growth. It can be an alert for a serious health concern.Black, bloody, or “tarry” stools, changes in the size of stools, changes in bowel habits, or abdominal bloating often warrant further investigation. Lab testing and some stool tests can catch life-threatening issues that can be treated if detected in a timely manner. Pay attention to what comes out of your body, as well as what goes in. If you’re not sure of what you see is healthy and normal, snap a picture (I know, I know – but REALLY, do it!) and share it with your GP. This is not intended to be a substitute for medical care. If you have questions or concerns about your health, please speak with your doctor."
    );
    $(".nutirition-card").fadeOut();
    $(".poop-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".functional-card").fadeIn();
  } else if (blog == "functional") {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/functional-med.jpg");
    $(".dynamic-title").html("Functional Medicine");
    $(".dynamic-date").html("23/07/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Axis for Health uses the principles of Functional Medicine, which aims to look for the root cause of disease in an individual, and how and why this has happened. Symptoms are not looked at individually, as an isolated bodily system; the whole person is looked at. For example, factors such as lifestyle, stress, sleep, genes and environment are all considered in a consultation, as well as food. We know the body is a complex, integrated, ecosystem, a web-like network of biological functions. It is hard to understand a part without viewing the whole."
    );
    $(".functional-card").fadeOut();
    $(".nutirition-card").fadeIn();
    $(".poop-card").fadeIn();
    $(".stress-card").fadeIn();
  } else if (blog == "stress") {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/stress.png");
    $(".dynamic-title").html("A Stressful Brain");
    $(".dynamic-date").html("22/06/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Axis for Health uses the principles of Functional Medicine, which aims to look for the root cause of disease in an individual, and how and why this has happened. Symptoms are not looked at individually, as an isolated bodily system; the whole person is looked at. For example, factors such as lifestyle, stress, sleep, genes and environment are all considered in a consultation, as well as food. We know the body is a complex, integrated, ecosystem, a web-like network of biological functions. It is hard to understand a part without viewing the whole."
    );
    $(".stress-card").fadeOut();
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".poop-card").fadeIn();
  } else if (blog == "poop") {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/mask group 50.png");
    $(".dynamic-title").html("Why does bowel movement matter? Yes Poop!");
    $(".dynamic-date").html("22/06/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Nutritional Therapists like to talk about bowel movements – I ask all about it. How often do you move your bowels? What does it look like? Does it float or sink? Is there pain involved? Do you see any undigested food? Ideally, people will move their bowels once or twice a day, without pain, blood, or mucous, producing a well-formed medium-brown stool or expect to see a red tint if you enjoyed a glass of beet root juice. If you look for images of “normal stool” on the internet and namely the Bristol Stool Chart, you’ll get a good idea of what I’m hoping for. Push aside the unnecessary shame society places on a normal body function and give me the details. You’ll be sharing a good bit of information about your health.What can we possibly learn from so much bathroom talk? A lot. And we can catch some significant prob;em So, get ready – here are just a few of the things that the stool you produce every day (hopefully!) can help me to know a bit more about your health.It’s a great indicator of how digestive organs are functioniStool with particles of undigested food or that isn’t a healthy “normal” brown colour may indicate issues with proper digestion. The stomach, liver, gallbladder, and pancreas all play a part in digestion – if one of those isn’t functioning up to par, it could cause abnormal stool changes. Without proper breakdown of food, vitamin and nutrient absorption can be impairIt can be an alert for food intolerances or allergiAs anyone with a lactose intolerance can tell you, eat too much of a food that your body doesn’t like, and you’ll know quickly. Diarrhoea, constipation, and changes in stool consistency can all signal food-related issues. Further testing and treatment plans can be used to help confirm food allergies and intolerances as the source. of digestive difficulIt indicates the health of your microbioAbnormal stool habits can point to an unhealthy microbiome. As more research is done, the importance of the microbiome – the community of bacteria and yeasts that live in the intestines – cannot be emphasized enough. Pathogenic bacteria can wreak havoc on the digestive tract, and often the entire immune system. Stool testing is available to identify which bacteria are present and can help your health provider create a treatment plan to encourage beneficial bacterial growIt can be an alert for a serious health concern.Black, bloody, or “tarry” stools, changes in the size of stools, changes in bowel habits, or abdominal bloating often warrant further investigation. Lab testing and some stool tests can catch life-threatening issues that can be treated if detected in a timely mannPay attention to what comes out of your body, as well as what goes in. If you’re not sure of what you see is healthy and normal, snap a picture (I know, I know – but REALLY, do it!) and share it with your This is not intended to be a substitute for medical care. If you have questions or concerns about your health, please speak with your doctor.."
    );
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".poop-card").fadeOut();
  } else if (blog == "obesity") {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/obesity.jpg");
    $(".dynamic-title").html("What Causes Obesity?");
    $(".dynamic-date").html("12/01/2020 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Obesity is a problem that has plagued our planet for a very long time. As the word 'obesity' suggests, the term refers to a condition where someone's weight gain is excessive, despite their physical activity levels. This causes a multitude of problems including the following:<ul><br><br><li>Losing weight on a regular basis can be difficult. Since so many people are obese, it is very hard to actually lose even one pound or even ten pounds. And losing a pound can actually make it harder to lose it. It is therefore common for an obese person to gain weight back over time.</li><br><br><br><li> Obesity often leads to depression and self-esteem issues. The feeling of being a 'fat person' makes some people feel as though they are less of a person. Also, as we see many people who are overweight at an early age to grow up and start living healthy lifestyles.</li><br><br><br><li> Many health risks associated with obesity include heart disease, cancer, stroke, diabetes, arthritis, osteoarthritis, gallbladder disease, certain forms of cancer, sexual dysfunction, sleep apnea, sleepwalking, depression, and weight gain. Obesity can also lead to mental issues such as anxiety, depression, and mood swings. These problems are also prevalent in many overweight individuals who suffer from obesity as well.</li><br>Obesity can lead to many medical conditions. In some cases, obesity can lead to a condition known as gout. This is caused by the body becoming too resistant to uric acid. There are many causes of obesity that range from genetic predisposition to lifestyle changes or even lack of physical activity.Obesity also leads to an increased risk of death. Some of the higher incidences of death related to obesity include deaths due to cardiovascular diseases, cancers, diabetes, respiratory diseases, and suicide. Some of the highest death rates from obesity are caused by the increasing rate of obesity-related deaths in the elderly population. These deaths can be attributed to a lack of physical activity, poor diet, and inappropriate levels of alcohol consumption.Sadly, many people do not take action to lose weight or do not realize the serious effects of obesity on their health and well-being. In fact, many people may think that they are doing fine but eventually get to a point where they must lose some weight to maintain their current lifestyle. So the ultimate question to ask yourself is: Why is it important for me to lose weight?To answer this question, you need to take the time to determine what causes you to be obese and why you need to lose weight to help you move forward. After understanding what causes you to be obese, you will then be in a better position to decide whether or not it is worth it to lose some weight in order to improve your health and well-being"
    );
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".poop-card").fadeOut();
  } else if (blog == "gut") {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/gut-health.jpg");
    $(".dynamic-title").html(
      "Gut Health and Diet - Are You Suffering From a Lack of Wellness?"
    );
    $(".dynamic-date").html("17/02/2020 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "We're constantly bombarded with the hype about our gut health, but the real truth is that we don't know much about it. It's important to know that our gut is the most vital part of the body. When the gut is out of whack, we all suffer, as our bodies can't properly use the nutrients and energy that are stored in the various parts of our bodies. The proper functioning of the gut can lead to the proper functioning of the rest of the body, so when we're out of sync, we all suffer from the consequences.<br><br>Fortunately, there are a number of things you can do to improve your gut health. One of the easiest things to do is to drink plenty of water. Water helps to keep your digestive system working at peak efficiency, as it allows your digestive juices to move around your body and work to get the nutrients and minerals that your body needs. Drinking water will also help to keep your body hydrated, which will allow you to stay active for longer periods of time. <br><br>Another important thing to keep in mind is that you have to eat a healthy diet. It's important that you eat a well balanced diet that contains all the nutrients you need. The more nutrient-rich your diet, the more your body is going to have to work to get these things, and the healthier you'll be. It's important to remember to eat healthy and stay active to keep your body functioning at its best. <br><br>The last important part of your diet is to make sure that you're getting enough sleep. A lack of sleep can lead to a number of problems for your body. Lack of sleep leads to a lack of energy, which leads to lack of mental alertness leads to lack of physical alertness. A lack of sleep can also lead to a lack of overall digestive functions, so make sure to get as much sleep as possible. <br><br>If you're not familiar with any of these ideas, then you can start today by finding a healthy diet and making sure that you follow it consistently. Once you're healthy and your body is working in a healthy manner, then you'll be better off and will be better able to take care of yourself. <br><br>The more you work on your body, the better it will be. Your body needs the proper care that it can get from a good diet, a healthy diet and a healthy lifestyle. Take care of it now, and you'll be taking good care of it later."
    );
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".poop-card").fadeOut();
  } else if (blog == "improve-gut") {
    $(".dynamic-img").attr("src", "./assets/img/Gallery/2250.jpg");
    $(".dynamic-title").html("How Can I Improve My Gut Health?");
    $(".dynamic-date").html("29/03/2020 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "People often ask themselves, how can I improve my gut health? It is a common question as many people look for simple ways to improve their overall health. Of course, there are many inexpensive and natural ways to improve your general health, but what about gut health?<br><br>As the various natural approaches begin to take hold, it becomes apparent that they all work together to improve health. In some cases, adding in a new food source might help in the short run, but what about long term?<br><br>In addition to working synergistically, supplements can play some important roles. Vitamins, for example, can play an important role in regulating immune response. For example, research has shown that there are some vitamins that have been shown to slow the progression of Alzheimer's disease, among other things.<br><br>Phytonutrients also play a major role in the body's immune system. This means that when you eat foods rich in phytonutrients, you can help your body to strengthen its defenses against viruses and bacteria. The body can also prevent damage to the skin by cleaning the cell membranes. In other words, the body can get rid of toxins by cleaning out the cells .<br><br>Since so many different natural ingredients have been studied, it has become clear that there are quite a few nutrients that can help to promote better gut health. Foods such as berries, red wine, dark chocolate, citrus fruits, blueberries, whole grains, dark green leafy vegetables, and other items that contain antioxidant compounds have been shown to be helpful. .<br><br>Once you realize that you can use a combination of different natural approaches, it can help to start looking at your diet more closely. Many people ignore this area and are unaware of the benefits of improving gut health through a balanced diet. Sometimes, simply by adding a little fiber in the form of raw or cooked fruits and vegetables can make a big difference. <br><br>The trick is to realize that different types of fiber content have different impacts on the body. Try to find a way to include some fiber into each meal by using a variety of beans and legumes, for example. <br><br>Try to ensure that you include at least six servings of fruits and vegetables on a daily basis. They can go a long way to improving your overall health and maintaining the good levels of intestinal flora that you already have. If you don't think that you can do this alone, there are some helpful products that can help you out."
    );
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".poop-card").fadeOut();
  }
  $(".nutirition-card").click(function () {
    $(".nutirition-card").addClass("active-dynamic");
    $(".poop-card").removeClass("active-dynamic");
    $(".functional-card").removeClass("active-dynamic");
    $(".dynamic-img").attr("src", "./assets/img/Gallery/mask group 46.png");
    $(".dynamic-title").html("What is Nutritional Therapy?");
    $(".dynamic-date").html("23/08/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Nutritional Therapists like to talk about bowel movements – I ask all about it. How often do you move your bowels? What does it look like? Does it float or sink? Is there pain involved? Do you see any undigested food? Ideally, people will move their bowels once or twice a day, without pain, blood, or mucous, producing a well-formed medium-brown stool or expect to see a red tint if you enjoyed a glass of beet root juice. If you look for images of “normal stool” on the internet and namely the Bristol Stool Chart, you’ll get a good idea of what I’m hoping for. Push aside the unnecessary shame society places on a normal body function and give me the details. You’ll be sharing a good bit of information about your health. What can we possibly learn from so much bathroom talk? A lot. And we can catch some significant problems. So, get ready – here are just a few of the things that the stool you produce every day (hopefully!) can help me to know a bit more about your health. It’s a great indicator of how digestive organs are functioning. Stool with particles of undigested food or that isn’t a healthy “normal” brown colour may indicate issues with proper digestion. The stomach, liver, gallbladder, and pancreas all play a part in digestion – if one of those isn’t functioning up to par, it could cause abnormal stool changes. Without proper breakdown of food, vitamin and nutrient absorption can be impaired. It can be an alert for food intolerances or allergies. As anyone with a lactose intolerance can tell you, eat too much of a food that your body doesn’t like, and you’ll know quickly. Diarrhoea, constipation, and changes in stool consistency can all signal food-related issues. Further testing and treatment plans can be used to help confirm food allergies and intolerances as the source. of digestive difficulty. It indicates the health of your microbiome. Abnormal stool habits can point to an unhealthy microbiome. As more research is done, the importance of the microbiome – the community of bacteria and yeasts that live in the intestines – cannot be emphasized enough. Pathogenic bacteria can wreak havoc on the digestive tract, and often the entire immune system. Stool testing is available to identify which bacteria are present and can help your health provider create a treatment plan to encourage beneficial bacterial growth. It can be an alert for a serious health concern.Black, bloody, or “tarry” stools, changes in the size of stools, changes in bowel habits, or abdominal bloating often warrant further investigation. Lab testing and some stool tests can catch life-threatening issues that can be treated if detected in a timely manner. Pay attention to what comes out of your body, as well as what goes in. If you’re not sure of what you see is healthy and normal, snap a picture (I know, I know – but REALLY, do it!) and share it with your GP. This is not intended to be a substitute for medical care. If you have questions or concerns about your health, please speak with your doctor."
    );
    $(".poop-card").fadeIn();
    $(".functional-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".nutirition-card").fadeOut();
  });
  $(".poop-card").click(function () {
    $(".nutirition-card").removeClass("active-dynamic");
    $(".functional-card").removeClass("active-dynamic");
    $(".poop-card").addClass("active-dynamic");
    $(".dynamic-img").attr("src", "./assets/img/Gallery/mask group 50.png");
    $(".dynamic-title").html("Why does bowel movement matter? Yes Poop!");
    $(".dynamic-date").html("22/06/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Nutritional Therapists like to talk about bowel movements – I ask all about it. How often do you move your bowels? What does it look like? Does it float or sink? Is there pain involved? Do you see any undigested food? Ideally, people will move their bowels once or twice a day, without pain, blood, or mucous, producing a well-formed medium-brown stool or expect to see a red tint if you enjoyed a glass of beet root juice. If you look for images of “normal stool” on the internet and namely the Bristol Stool Chart, you’ll get a good idea of what I’m hoping for. Push aside the unnecessary shame society places on a normal body function and give me the details. You’ll be sharing a good bit of information about your health.What can we possibly learn from so much bathroom talk? A lot. And we can catch some significant prob;em So, get ready – here are just a few of the things that the stool you produce every day (hopefully!) can help me to know a bit more about your health.It’s a great indicator of how digestive organs are functioniStool with particles of undigested food or that isn’t a healthy “normal” brown colour may indicate issues with proper digestion. The stomach, liver, gallbladder, and pancreas all play a part in digestion – if one of those isn’t functioning up to par, it could cause abnormal stool changes. Without proper breakdown of food, vitamin and nutrient absorption can be impairIt can be an alert for food intolerances or allergiAs anyone with a lactose intolerance can tell you, eat too much of a food that your body doesn’t like, and you’ll know quickly. Diarrhoea, constipation, and changes in stool consistency can all signal food-related issues. Further testing and treatment plans can be used to help confirm food allergies and intolerances as the source. of digestive difficulIt indicates the health of your microbioAbnormal stool habits can point to an unhealthy microbiome. As more research is done, the importance of the microbiome – the community of bacteria and yeasts that live in the intestines – cannot be emphasized enough. Pathogenic bacteria can wreak havoc on the digestive tract, and often the entire immune system. Stool testing is available to identify which bacteria are present and can help your health provider create a treatment plan to encourage beneficial bacterial growIt can be an alert for a serious health concern.Black, bloody, or “tarry” stools, changes in the size of stools, changes in bowel habits, or abdominal bloating often warrant further investigation. Lab testing and some stool tests can catch life-threatening issues that can be treated if detected in a timely mannPay attention to what comes out of your body, as well as what goes in. If you’re not sure of what you see is healthy and normal, snap a picture (I know, I know – but REALLY, do it!) and share it with your This is not intended to be a substitute for medical care. If you have questions or concerns about your health, please speak with your doctor.."
    );
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".stress-card").fadeIn();
    $(".poop-card").fadeOut();
  });

  $(".functional-card").click(function () {
    $(".functional-card").addClass("active-dynamic");
    $(".poop-card").removeClass("active-dynamic");
    $(".nutirition-card").removeClass("active-dynamic");
    $(".dynamic-img").attr("src", "./assets/img/Gallery/functional-med.jpg");
    $(".dynamic-title").html("Functional Medicine");
    $(".dynamic-date").html("23/07/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Axis for Health uses the principles of Functional Medicine, which aims to look for the root cause of disease in an individual, and how and why this has happened. Symptoms are not looked at individually, as an isolated bodily system; the whole person is looked at. For example, factors such as lifestyle, stress, sleep, genes and environment are all considered in a consultation, as well as food. We know the body is a complex, integrated, ecosystem, a web-like network of biological functions. It is hard to understand a part without viewing the whole."
    );
    $(".functional-card").fadeOut();
    $(".nutirition-card").fadeIn();
    $(".poop-card").fadeIn();
    $(".stress-card").fadeIn();
  });

  $(".stress-card").click(function () {
    $(".stess-card").addClass("active-dynamic");

    $(".functional-card").removeClass("active-dynamic");
    $(".poop-card").removeClass("active-dynamic");
    $(".nutirition-card").removeClass("active-dynamic");
    $(".dynamic-img").attr("src", "./assets/img/Gallery/stress.png");
    $(".dynamic-title").html("A Stressful Brain");
    $(".dynamic-date").html("23/07/2019 | Health, Wellness | by Sonya");
    $(".dynamic-desc p").html(
      "Axis for Health uses the principles of Functional Medicine, which aims to look for the root cause of disease in an individual, and how and why this has happened. Symptoms are not looked at individually, as an isolated bodily system; the whole person is looked at. For example, factors such as lifestyle, stress, sleep, genes and environment are all considered in a consultation, as well as food. We know the body is a complex, integrated, ecosystem, a web-like network of biological functions. It is hard to understand a part without viewing the whole."
    );
    $(".stress-card").fadeOut();
    $(".functional-card").fadeIn();
    $(".nutirition-card").fadeIn();
    $(".poop-card").fadeIn();
  });

  $(".curry").click(function () {
    $(".d1").addClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/chickencoconut.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/chickencoconut.jpg"
    );
  });
  $(".meatballs").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").addClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/chickenmeatball.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/chickenmeatball.jpg"
    );
  });
  $(".tofu").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").addClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr("src", "./assets/img/Gallery/recipes/easytofu.jpg");
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/easytofu.jpg"
    );
  });
  $(".noodle").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").addClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr("src", "./assets/img/Gallery/recipes/edamame.jpg");
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/edamame.jpg"
    );
  });
  $(".stew").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").addClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/fishandpumpkin.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/fishandpumpkin.jpg"
    );
  });
  $(".spag").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").addClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/meatfreespaghetti.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/meatfreespaghetti.jpg"
    );
  });
  $(".salmon").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").addClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/salmonrecipe.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/salmonrecipe.jpg"
    );
  });

  // dots click
  $(".d1").click(function () {
    $(".d1").addClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/chickencoconut.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/chickencoconut.jpg"
    );
  });
  $(".d2").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").addClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/chickenmeatball.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/chickenmeatball.jpg"
    );
  });
  $(".d3").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").addClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr("src", "./assets/img/Gallery/recipes/easytofu.jpg");
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/easytofu.jpg"
    );
  });
  $(".d4").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").addClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr("src", "./assets/img/Gallery/recipes/edamame.jpg");
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/edamame.jpg"
    );
  });
  $(".d5").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").addClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/fishandpumpkin.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/fishandpumpkin.jpg"
    );
  });
  $(".d6").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").addClass("active-dots");
    $(".d7").removeClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/meatfreespaghetti.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/meatfreespaghetti.jpg"
    );
  });
  $(".d7").click(function () {
    $(".d1").removeClass("active-dots");
    $(".d2").removeClass("active-dots");
    $(".d3").removeClass("active-dots");
    $(".d4").removeClass("active-dots");
    $(".d5").removeClass("active-dots");
    $(".d6").removeClass("active-dots");
    $(".d7").addClass("active-dots");
    $(".recipe-img").attr(
      "src",
      "./assets/img/Gallery/recipes/salmonrecipe.jpg"
    );
    $(".test-popup-link").attr(
      "href",
      "./assets/img/Gallery/recipes/salmonrecipe.jpg"
    );
  });
});
