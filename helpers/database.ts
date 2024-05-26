import Datastore from "nedb-promises";

// Create a new database instance for the 'dogs' table
const dogsDB = Datastore.create({ filename: "./dogs.db", autoload: true });

//dogsDB.ensureIndex({ fieldName: "id", unique: true });
// Initialize the 'dogs' table
const initializeDogsTable = async () => {
  const sampleData = [
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
      imageurl:
        "https://images.dog.ceo/breeds/bulldog-boston/n02096585_296.jpg",
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
      imageurl:
        "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_6608.jpg",
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
  ];
/*  
  try {
    await dogsDB.insert(sampleData);
    console.log('Dogs table initialized with sample data');
  } catch (err) {
    console.error('Error initializing dogs table:', err);
  }
*/
  
};

initializeDogsTable();

//await dogsDB.remove({}, { multi: true });

// Initialize the 'cats' table
//initializeCatsTable();

export const run_query = async <T = any>(
  collectionName: string,
  filter: object = {},
  options: object = {},
): Promise<T[]> => {
  try {
    const results = await dogsDB.find<T>(filter, options);
    return results;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};

export const run_insert = async <T = any>(
  collectionName: string,
  document: T,
): Promise<any> => {
  try {
    const result = await dogsDB.insert(document);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};

export const run_update = async <T = any>(
  collectionName: string,
  filter: object = {},
  update: object,
): Promise<number> => {
  try {
    const options = { multi: true };
    const result = await dogsDB.update(filter, update, options);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};

export const run_delete = async <T = any>(
  collectionName: string,
  filter: object = {},
): Promise<number> => {
  try {
    const options = { multi: true };
    const result = await dogsDB.remove(filter, options);
    return result;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
};
