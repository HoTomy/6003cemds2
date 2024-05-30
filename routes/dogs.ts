import Router, { RouterContext } from "koa-router";
import bodyParser from "koa-bodyparser";
import {validateDog} from '../controllers/validation';
//import * as model from '../models/dogs';

const router = new Router({ prefix: "/api/v1/dogs" });

const dogs = [
  {
    id: 1,
    name: "Buddy",
    breeds: "Labrador Retriever",
    gender: "Male",
    birth: "2020-03-15",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/labrador/n02099712_7418.jpg",
    remark: "Friendly and energetic",
    status: "Available",
  },
  {
    id: 2,
    name: "Max",
    breeds: "Golden Retriever",
    gender: "Male",
    birth: "2019-07-20",
    centre: "KL",
    imageurl:
      "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",
    remark: "Loves playing fetch",
    status: "Available",
  },
  {
    id: 3,
    name: "Luna",
    breeds: "German Shepherd",
    gender: "Female",
    birth: "2020-01-10",
    centre: "NT",
    imageurl:
      "https://images.dog.ceo/breeds/germanshepherd/n02106662_22394.jpg",
    remark: "Highly intelligent and loyal",
    status: "Available",
  },
  {
    id: 4,
    name: "Charlie",
    breeds: "Bulldog",
    gender: "Male",
    birth: "2018-11-05",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/bulldog-boston/n02096585_296.jpg",
    remark: "Laid-back and friendly",
    status: "Adopted",
  },
  {
    id: 5,
    name: "Daisy",
    breeds: "Poodle",
    gender: "Female",
    birth: "2017-09-12",
    centre: "KL",
    imageurl:
      "https://images.dog.ceo/breeds/poodle-standard/n02113799_5227.jpg",
    remark: "Elegant and intelligent",
    status: "Available",
  },
  {
    id: 6,
    name: "Rocky",
    breeds: "Rottweiler",
    gender: "Male",
    birth: "2019-04-18",
    centre: "NT",
    imageurl: "https://images.dog.ceo/breeds/rottweiler/n02106550_7419.jpg",
    remark: "Strong and protective",
    status: "Available",
  },
  {
    id: 7,
    name: "Coco",
    breeds: "Chihuahua",
    gender: "Female",
    birth: "2020-06-30",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg",
    remark: "Tiny but full of personality",
    status: "Available",
  },
  {
    id: 8,
    name: "Bentley",
    breeds: "Siberian Husky",
    gender: "Male",
    birth: "2019-03-25",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/husky/n02110185_10047.jpg",
    remark: "Playful and energetic",
    status: "Available",
  },
  {
    id: 9,
    name: "Lola",
    breeds: "Beagle",
    gender: "Female",
    birth: "2018-08-15",
    centre: "NT",
    imageurl: "https://images.dog.ceo/breeds/beagle/n02088364_13478.jpg",
    remark: "Curious and friendly",
    status: "Adopted",
  },
  {
    id: 10,
    name: "Maximus",
    breeds: "Boxer",
    gender: "Male",
    birth: "2017-12-01",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/boxer/n02108089_1626.jpg",
    remark: "Energetic and affectionate",
    status: "Available",
  },
  {
    id: 11,
    name: "Molly",
    breeds: "Labrador Retriever",
    gender: "Female",
    birth: "2019-02-28",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg",
    remark: "Gentle and easygoing",
    status: "Available",
  },
  {
    id: 12,
    name: "Oliver",
    breeds: "Pug",
    gender: "Male",
    birth: "2020-09-08",
    centre: "NT",
    imageurl: "https://images.dog.ceo/breeds/pug/n02110958_13256.jpg",
    remark: "Playful and charming",
    status: "Available",
  },
  {
    id: 13,
    name: "Lucy",
    breeds: "Dalmatian",
    gender: "Female",
    birth: "2019-05-20",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
    remark: "Energetic and spotted",
    status: "Available",
  },
  {
    id: 14,
    name: "Rocko",
    breeds: "Bulldog",
    gender: "Male",
    birth: "2018-02-14",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",
    remark: "Affectionate and loyal",
    status: "Adopted",
  },
  {
    id: 15,
    name: "Lily",
    breeds: "Corgi",
    gender: "Female",
    birth: "2020-07-03",
    centre: "NT",
    imageurl: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_6608.jpg",
    remark: "Friendly and playful",
    status: "Available",
  },
  {
    id: 16,
    name: "Cooper",
    breeds: "Australian Shepherd",
    gender: "Male",
    birth: "2019-11-12",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg",
    remark: "Intelligent and active",
    status: "Available",
  },
  {
    id: 17,
    name: "Milo",
    breeds: "Shih Tzu",
    gender: "Male",
    birth: "2018-04-25",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/shihtzu/n02086240_3719.jpg",
    remark: "Lively and affectionate",
    status: "Adopted",
  },
  {
    id: 18,
    name: "Bella",
    breeds: "Yorkshire Terrier",
    gender: "Female",
    birth: "2019-08-10",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/terrier-border/n02093754_687.jpg",
    remark: "Adorable and lively",
    status: "Available",
  },
  {
    id: 19,
    name: "Rocky",
    breeds: "Bullmastiff",
    gender: "Male",
    birth: "2017-06-25",
    centre: "NT",
    imageurl:
      "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4888.jpg",
    remark: "Gentle giant and protective",
    status: "Available",
  },
  {
    id: 20,
    name: "Luna",
    breeds: "Border Collie",
    gender: "Female",
    birth: "2020-04-05",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/collie/n02106030_17165.jpg",
    remark: "Highly intelligent and agile",
    status: "Available",
  },
  {
    id: 21,
    name: "Charlie",
    breeds: "Shiba Inu",
    gender: "Male",
    birth: "2018-12-18",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
    remark: "Independent and spirited",
    status: "Adopted",
  },
  {
    id: 22,
    name: "Daisy",
    breeds: "French Bulldog",
    gender: "Female",
    birth: "2017-11-01",
    centre: "NT",
    imageurl:
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_11836.jpg",
    remark: "Playful and affectionate",
    status: "Available",
  },
  {
    id: 23,
    name: "Maximus",
    breeds: "Great Dane",
    gender: "Male",
    birth: "2019-03-10",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/dane-great/n02109047_2358.jpg",
    remark: "Gentle giant and friendly",
    status: "Available",
  },
  {
    id: 24,
    name: "Mia",
    breeds: "Newfoundland",
    gender: "Female",
    birth: "2020-09-20",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/newfoundland/n02111277_980.jpg",
    remark: "Sweet and affectionate",
    status: "Available",
  },
  {
    id: 25,
    name: "Leo",
    breeds: "Australian Cattle Dog",
    gender: "Male",
    birth: "2019-05-15",
    centre: "NT",
    imageurl:
      "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_18782.jpg",
    remark: "Energetic and intelligent",
    status: "Available",
  },
  {
    id: 26,
    name: "Sophie",
    breeds: "Bluetick",
    gender: "Female",
    birth: "2018-07-05",
    centre: "HK",
    imageurl: "https://images.dog.ceo/breeds/bluetick/n02088632_1108.jpg",
    remark: "Cheerful and fluffy",
    status: "Adopted",
  },
  {
    id: 27,
    name: "Rocky",
    breeds: "Doberman Pinscher",
    gender: "Male",
    birth: "2020-02-12",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/doberman/n02107142_5395.jpg",
    remark: "Alert and loyal",
    status: "Available",
  },
  {
    id: 28,
    name: "Lola",
    breeds: "Schnauzer",
    gender: "Female",
    birth: "2019-04-30",
    centre: "NT",
    imageurl: "https://images.dog.ceo/breeds/schnauzer/n02097209_3401.jpg",
    remark: "Smart and spirited",
    status: "Available",
  },
  {
    id: 29,
    name: "Cooper",
    breeds: "Bernese Mountain Dog",
    gender: "Male",
    birth: "2018-11-08",
    centre: "HK",
    imageurl:
      "https://images.dog.ceo/breeds/mountain-bernese/n02107683_2902.jpg",
    remark: "Gentle and good-natured",
    status: "Available",
  },
  {
    id: 30,
    name: "Lily",
    breeds: "Pomeranian",
    gender: "Female",
    birth: "2020-06-12",
    centre: "KL",
    imageurl: "https://images.dog.ceo/breeds/pomeranian/n02112018_4586.jpg",
    remark: "Fluffy and lively",
    status: "Available",
  },
];

const getAlldogs = async (ctx: RouterContext, next: any) => {
  if (dogs.length) {
    ctx.body = dogs;
  } else {
    ctx.body = { error: "No dogs found" };
  }
  await next();
};

const getByDogId = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if (id < dogs.length + 1 && id > 0) {
    ctx.body = dogs[id - 1];
  } else {
    ctx.status = 404;
  }
  await next();
};

const registerDog = async (ctx: RouterContext, next: any) => {
  let c: any = ctx.request.body;
  let id = c.id;
  let name = c.name;
  let breeds = c.breeds;
  let gender = c.gender;
  let centre = c.centre;
  let birth = c.birth;
  let imageurl = c.imageurl;
  let remark = c.remark;
  let status = c.status;

  let newDog = {
    id: id,
    name: name,
    breeds: breeds,
    gender: gender,
    centre: centre,
    birth: birth,
    imageurl: imageurl,
    remark: remark,
    status: status,
  };
  dogs.push(newDog);
  ctx.status = 201;
  ctx.body = newDog;
  await next();
};

const updateDogById = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  let c: any = ctx.request.body;
  let name = c.name;
  let breeds = c.breeds;
  let gender = c.gender;
  let centre = c.centre;
  let birth = c.birth;
  let imageurl = c.imageurl;
  let remark = c.remark;
  let status = c.status;
  if (id < dogs.length + 1 && id > 0) {
    dogs[id - 1].name = name;
    dogs[id - 1].breeds = breeds;
    dogs[id - 1].gender = gender;
    dogs[id - 1].centre = centre;
    dogs[id - 1].birth = birth;
    dogs[id - 1].imageurl = imageurl;
    dogs[id - 1].remark = remark;
    dogs[id - 1].status = status;
    ctx.status = 200;
    ctx.body = dogs;
  } else {
    ctx.status = 404;
  }
  await next();
};


const deleteDogById = async (ctx: RouterContext, next: any) => {
  let id = +ctx.params.id;
  if (id <= dogs.length && id > 0) {
    dogs.splice(id-1,1);
    ctx.status = 200;
    ctx.body = dogs;
  } else {
    ctx.status = 404;
  }
  await next();
};


router.get("/", getAlldogs);
router.get("/:id", getByDogId);
router.post("/", bodyParser(), registerDog, validateDog);
router.put("/:id", bodyParser(), updateDogById, validateDog);
router.del("/:id", deleteDogById);

export { router };
