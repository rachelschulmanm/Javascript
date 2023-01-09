function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  console.log(`You will be a ${jobTitle} in ${location} married to${partnerName}
    with ${numberOfChildren} children`);
}

const job = " programer";
const loct = "NewYork";
const par = "Rana";
const chil = 2;

tellFortune(job, loct, par, chil);
